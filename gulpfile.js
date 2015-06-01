'use strict';

var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var exorcist = require('exorcist');
var path = require('path');

gulp.task('build', function (cb) {
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
    b.transform('babelify');

    return b.bundle()
        .pipe(exorcist(path.join(__dirname, 'build/react-purecss.js.map')))
        .pipe(source('react-purecss.js'))
        .pipe(gulp.dest('./build'))
});

gulp.task('clean', function (cb) {
    del([
        './build/**/*',
        '!./build/.gitkeep'
    ], cb);
});
