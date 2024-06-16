import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.jsx',
                // 'resources/theme/scss/style.scss',
                'resources/css/app.css',
                // 'resources/theme/js/script.js',
                // 'resources/theme/lib/jquery/jquery-3.7.1.min.js'
            ],
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
    ],
});
