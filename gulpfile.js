'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    rigger = require('gulp-rigger'),
    browserSync = require("browser-sync"),
    prefixer = require('gulp-autoprefixer'),
    reload = browserSync.reload,
    imagemin = require('gulp-imagemin');

var path = {
    src: {
        html: 'src/*.html',
        js: 'src/common/js/*.js',
        style: 'src/common/scss/*.*',
        img: 'src/common/images/**/*.*'
    },
    build: {
        html: 'final-page',
        js: 'final-page/js/',
        css: 'final-page/css/',
        img: 'final-page/images/'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/**/*.js',
        style: 'src/**/*.scss',
        img: 'src/components/images/**/*.*'
    }
};

var config = {
    server: {
        baseDir: "./final-page"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Server"
};

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'image:build'
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
});

gulp.task('default', ['build', 'webserver', 'watch']);
gulp.task('dev', ['build', 'watch']);