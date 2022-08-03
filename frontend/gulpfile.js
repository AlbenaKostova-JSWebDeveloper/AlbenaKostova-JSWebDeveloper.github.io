const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return src('src/sass/main.scss') 
        .pipe(sass()) 
        .pipe(dest('public/assets/css'));
}

function watchTask() {
    watch(['src/sass/main.scss'], buildStyles); 
}

exports.default = series(buildStyles, watchTask);