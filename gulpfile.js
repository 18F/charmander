var gulp = require('gulp'),
    path = require('path'),
    batch = require('gulp-batch')

    // SCSS
    sass = require('gulp-sass');
 
    // JS BUILD
  //  concat = require('gulp-concat'),
  //  rename = require('gulp-rename'),
  //  uglify = require('gulp-uglify'),
 
    // HTML
  //  htmlmin = require('gulp-htmlmin'),
 
    // Browser sync
  //  browserSync = require('browser-sync'),

    // Exec
    exec = require('child_process').exec;
 
    // Import files
    pkg = require('./package.json')
;

gulp.task('jekyll-build', function (done) {
  //browserSync.notify('<span style="color: grey">Running:</span> $ jekyll build');
  exec('jekyll build', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});

gulp.task('jekyll', ['jekyll-build'], function() {
    gulp.src('assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('_deploy/assets/css'));
});

gulp.task('scss', function() {
    gulp.src('assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('_deploy/assets/css'));
});

gulp.task('default', ['jekyll'], function() {
    gulp.watch('app/*', ['jekyll']);
    gulp.watch('assets/scss/*.scss', ['scss']);
});