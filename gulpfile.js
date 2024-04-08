var gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));

sass.compiler = require('node-sass');

const { series } = require("gulp");

function css(cb) {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
}

exports.default = series(css);
