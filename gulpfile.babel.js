var gulp = require('gulp'),
    less = require("gulp-less"),
    concat = require("gulp-concat"),
    sourcemaps = require("gulp-sourcemaps"),
    babel = require("gulp-babel");

gulp.task('default', () => {
    return gulp.src('/assets-dev/src/js/common/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./build'));
});