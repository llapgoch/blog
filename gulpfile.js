var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task('sass', function(){
  return gulp.src('library/scss/style.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('library/css'))
});
