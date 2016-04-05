var gulp = require('gulp');
var coffee = require('gulp-coffee');
var jade = require('gulp-jade');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var bowerFiles = require("gulp-bower-files");

var templates = ['_src/**/*.jade'];
var scripts = ['_src/**/*.coffee'];

gulp.task('scripts', function () {
  gulp.src(scripts)
    .pipe(plumber())
    .pipe(coffee())
    .pipe(uglify())
    .pipe(gulp.dest('.'));
});

gulp.task('templates', function() {
  gulp.src(templates)
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function () {
  gulp.watch(scripts, ['scripts']);
  gulp.watch(templates, ['templates']);
});

gulp.task('bower', function () {
  bowerFiles({includeDev: true}).pipe(gulp.dest('./lib'));
});

gulp.task('default', ['bower', 'scripts', 'templates', 'watch']);
