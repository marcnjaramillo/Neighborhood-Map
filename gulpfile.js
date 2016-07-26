var gulp = require('gulp');
var jshint = require('gulp-jshint');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('jshint', function() {
  gulp.src('./src/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('minify-css', function() {
  return gulp.src('css/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/style.min.css'));
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('views/js/src/main.js'),
        uglify(),
        gulp.dest('views/js/dist')
    ],
    cb
  );
});
