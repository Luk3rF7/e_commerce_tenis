const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHTML(cb){
  return gulp.src('src/*.html')
  .pipe(htmlmin({
    collapseWhitespace:true
  }))
  .pipe(gulp.dest('build'))
}
function appCSS(cb){
  return gulp.src('src/assets/css/**.css')
  .pipe(sass().on('error',sass.logError))
  .pipe(uglifycss({
    "uglyComments": false
  }))
  .pipe(concat('style.css'))
  .pipe(gulp.dest('build/assets/css'))
}
function appJS(cb){
  return gulp.src('src/js/*.js')
  .pipe(babel({presets:['ENV']}))
  .pipe(uglify())
  .pipe(concat('main.js'))
  .pipe(gulp.dest('build/js'))
}

function appIMG(cb){
  return gulp.src('src/assets/img/**/*.*')
  .pipe(gulp.dest('build/assets/img/'))
}

gulp.task('appHTML',appHTML)
gulp.task('appCSS',appCSS)
gulp.task('appJS',appJS)
gulp.task('appIMG',appIMG)

module.exports = {
  appHTML,
  appCSS,
  appJS,
  appIMG
}