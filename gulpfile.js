var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function(){
  return gulp.src('library/scss/style.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('library/css'))
});

gulp.watch('library/scss/**/*.scss', ['default']);
