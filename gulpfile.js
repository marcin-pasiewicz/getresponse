var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var cleanCSS = cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');



gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
})

gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build-css', function() {
   return gulp.src('app/css/**/*.css')
       .pipe(cleanCSS())
       .pipe(gulp.dest('./dist/css'));
});

gulp.task('build-js', function() {
    return gulp.src('app/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('build-fonts', function() {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('build-img', function() {
    return gulp.src('app/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
});

gulp.task('build-html', function() {
   return gulp.src('app/*.html')
       .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['build-css', 'build-js', 'build-fonts', 'build-img', 'build-html']);
