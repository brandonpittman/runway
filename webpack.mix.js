const path = require('path')
const mix = require('laravel-mix')
const tailwind = require('tailwindcss')
require('laravel-mix-purgecss')

console.log(path.resolve(__dirname))

mix
  .js('resources/js/runway.js', 'js')
  .babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import'],
  })
  .webpackConfig({
    output: {
      publicPath: 'site/themes/runway/',
    },
  })
  //  .extract()
  .postCss('resources/css/runway.css', 'css', [tailwind])
  .purgeCss({
    folders: ['layouts', 'templates', 'partials', 'resources/js/components'],
  })
  .browserSync({
    proxy: 'runway.test',
    files: ['./**/*', '../../content/**/*'],
  })
