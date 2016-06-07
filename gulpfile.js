require('babel-core/register');

const gulp = require('gulp');
const Jasmine = require('gulp-jasmine');

gulp.task('spec', function() {
    return gulp.src('spec/**/*.spec.js')
        .pipe(Jasmine());
});