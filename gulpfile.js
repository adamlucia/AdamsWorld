var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./app/css/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

//create css file if there is not one already
gulp.task('sass:watch', function () {
    gulp.watch('./app/css/**/*.scss', ['sass']);
});
