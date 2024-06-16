<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>


    @vite(['resources/css/app.css', 'resources/theme/scss/style.scss', 'resources/theme/js/script.js', 'resources/theme/lib/jquery/jquery-3.7.1.min.js'])
    <!-- Livewire Styles -->
    @routes
    @livewireStyles

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
            integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
            crossorigin=""></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.slim.min.js" integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8=" crossorigin="anonymous"></script>
</head>

<body class="font-sans antialiased page-home">
@include('partials.header')
<div class="content">
    @yield('content')
</div>
@include('partials.footer')

<!-- Livewire Scripts -->
@livewireScripts

<script src="{{ Vite::asset('resources/theme/lib/jquery/jquery-3.7.1.min.js') }}"></script>
{{--<script src="{{ Vite::asset('public/build/assets/script.umd.js') }}"></script>--}}
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
    const contactForm = document.querySelector('.contact-container__email')
    if(contactForm) {
        const emaildecode = (e) => {
            let email = atob(e.dataset.email);
            e.href = 'mailto:'+email;
            e.innerHTML = email;
        }
        const emailtag = document.querySelector('.contact-email__link');
        let observer = new IntersectionObserver((entries) => {
            entries.map((entry) => {
                if (entry.isIntersecting) {
                    let script = document.createElement('script');
                    script.onload = function () {
                        emaildecode(entry.target)
                    };
                    script.src ="{{ Vite::asset('resources/theme/js/decode-email.js') }}";
                    document.head.appendChild(script);
                }
            });
        }).observe(emailtag);
    }

</script>
</body>

</html>
