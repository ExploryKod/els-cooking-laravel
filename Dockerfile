FROM php:8.2-fpm

ARG user=application
ARG uid=1000

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    nano \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    supervisor \
    nginx \
    build-essential \
    openssl \
    autoconf \
    gcc \
    g++ \
    make \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libcurl4-openssl-dev \
    libpcre3-dev \
    libxslt1-dev \
    nodejs \
    npm \
    && apt-get clean


RUN docker-php-ext-install gd pdo pdo_mysql sockets

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Create system user to run Composer and Artisan Commands
RUN useradd -G www-data,root -u $uid -d /home/$user $user
RUN mkdir -p /home/$user/.composer && \
    chown -R $user:$user /home/$user

WORKDIR /var/www

ENV WEB_DOCUMENT_ROOT /var/www/public
ENV APP_ENV production

# If you need to fix ssl
COPY ./openssl.cnf /etc/ssl/openssl.cnf

COPY composer.json composer.lock ./

RUN composer install --no-dev --optimize-autoloader --no-scripts

COPY . .

# Install Node.js dependencies and build assets
RUN npm install
RUN npm run build

RUN composer install
# Optimizing Configuration loading
RUN php artisan config:cache
# Optimizing Route loading
RUN php artisan route:cache
# Optimizing View loading
RUN php artisan view:cache

RUN chown -R $uid:$uid /var/www

# Copy Nginx configuration
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/app.conf /etc/nginx/sites-enabled/app.conf
# copy supervisor configuration
COPY docker/supervisor/supervisord.conf /etc/supervisord.conf

EXPOSE 80

# run supervisor
CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisord.conf"]
