var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('app/sass/style1.scss')
    .pipe(sass()) 
    .pipe(gulp.dest('app/css'))
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('app/sass/style1.scss', ['sass']);
});