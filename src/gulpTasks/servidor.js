const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

/*  Servidor Gulp */

function server(cb){
  return gulp.src('build')
  .pipe(webserver({
    port:8080,
    open:true,
    livereload:true,
  }))
}

/*  monitorar arquivos */
function monitorarArquivos(cb){
  // html
  watch('src/**/*.html', ()=> gulp.series('appHTML')())
  watch('src/**/*.css', ()=> gulp.series('appCSS')())
  watch('src/**/*.js', ()=> gulp.series('appJS')())
  watch('src/assets/img/**/*.*', () => gulp.series('appIMG'))
  return cb()
}

module.exports = {
  server,
  monitorarArquivos,
}