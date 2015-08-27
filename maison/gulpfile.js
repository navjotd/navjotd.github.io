var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
		livereload = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var gulp = require('gulp'),
  	connect = require('gulp-connect');

gulp.task('styles', function(){
  gulp.src(['css/sass/*.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('css/css/'))
		.pipe(livereload());
});


gulp.task('default', function(){
	livereload.listen();
  gulp.watch("css/sass/*.scss", ['styles']);
});


gulp.task('server', function() {
  connect.server({
    port: 8888
  });
});