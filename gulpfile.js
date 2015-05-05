var gulp = require('gulp'),
    path = require('path'),
    batch = require('gulp-batch'),

    // SCSS
    sass = require('gulp-sass'),
 
    // JS BUILD
  //  concat = require('gulp-concat'),
  //  rename = require('gulp-rename'),
  //  uglify = require('gulp-uglify'),
 
    // HTML
  //  htmlmin = require('gulp-htmlmin'),
 
    // Browser sync

    // Exec
    exec = require('child_process').exec,
 
    // Import files
    pkg = require('./package.json')
;

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('jekyll-build', function (done) {
  browserSync.notify('<span style="color: grey">Running:</span> $ jekyll build');
  return exec('jekyll build', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});

gulp.task('jekyll', ['jekyll-build'], function() {
    return gulp.src('assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('_deploy/assets/css'))
        .pipe(reload({stream:true}));
});

gulp.task('scss', function() {
    gulp.src('assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('_deploy/assets/css'))
        .pipe(reload({stream:true}));
});

gulp.task('default', ['jekyll'], function() {
  browserSync.init({
        server: {
            baseDir: "./_deploy/"
        },
        ui: false,
        tunnel: true
    });

    gulp.watch('app/*', ['jekyll']);
    gulp.watch('assets/scss/*.scss', ['scss']);
    gulp.watch('_deploy/*.html').on("change", browserSync.reload);
});