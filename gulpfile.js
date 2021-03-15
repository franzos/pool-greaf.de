var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify-es").default;
var pump = require("pump");
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

const { series } = require("gulp");

function css(cb) {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
}

exports.default = series(css);
