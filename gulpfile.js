var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  minify = require('gulp-minify-css'),
  concat = require('gulp-concat'),
  autoprefixer = require('gulp-autoprefixer'),
  connect = require('gulp-connect');

// 压缩css
gulp.task('css', function () {
  gulp.src(['./src/css/stylesheet.css','./src/css/reset.css','./src/css/grid.css','./src/css/main.css'])
    .pipe(autoprefixer({
      browsers: ['last 20 versions', 'ie 6-8']
    }))
    .pipe(concat('style.css'))
    .pipe(minify())
    .pipe(gulp.dest('./dist/css'))
});

// 压缩js
gulp.task('js', function () {
  gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('connect', function () {
  connect.server({
    root: 'dist',
    port:9292,
    livereload: true
  })
})

gulp.task('reload', function () {
  gulp.src('./dist/*.html')
    .pipe(connect.reload())
})

gulp.task('auto', function () {
  gulp.watch('./src/css/*.css', ['css']);
  gulp.watch('./src/js/*.js', ['js'])
  gulp.watch(['./dist/**/*'],['reload'])
})

gulp.task('default', ['css', 'js', 'connect', 'auto'])
