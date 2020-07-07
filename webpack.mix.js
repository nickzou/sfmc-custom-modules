const mix = require('laravel-mix');

require('laravel-mix-polyfill');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js(`src/js/app.js`, `dist/js/app.js`)
.options({
    processCssUrls: false
})
.sass(`src/scss/styles.scss`, `dist/css/styles.css`)
.sourceMaps()
.polyfill({
    enabled: true,
    useBuiltIns: "usage",
    targets: {"firefox": "50", "ie": 11}
 })
 .browserSync({
     files: ['dist/*.html', 'dist/css/*.css', 'dist/js/*.js'],
     proxy: false,
     port: '3000',
     server: {
        baseDir: 'dist',
        index: 'index.html'
     }
 });