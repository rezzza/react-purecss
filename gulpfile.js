'use strict';

var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var ghPages = require('gulp-gh-pages');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var exorcist = require('exorcist');
var path = require('path');

gulp.task('dist', function (cb) {
    runSequence(
        'clean',
        'compile',
        cb
    );
});

gulp.task('compile', function (cb) {
    var b = browserify('index.js', {
        debug: true,
        extensions: ['.js', '.jsx']
    });

    b.external('react');
    b.transform('reactify');

    return b.bundle()
        .pipe(exorcist(path.join(__dirname, 'dist/react-purecss.js.map')))
        .pipe(source('react-purecss.js'))
        .pipe(gulp.dest('./dist'))
});

gulp.task('clean', function (cb) {
    del([
        './dist/**/*',
        '!./dist/.gitkeep'
    ], cb);
});

gulp.task('deploy', function () {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});
