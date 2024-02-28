const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const urlPrefixer = require('gulp-url-prefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const del = require('del');
const browserSync = require('browser-sync').create();
const deploy = require('gulp-gh-pages');
const sass = require('gulp-dart-sass');

sass.compiler = require('sass');

const path = "/officelite-coming-soon-site/";

const html = () => {
    return gulp.src('*.html')
        .pipe(urlPrefixer.html({
            prefix: path,
            tags: ['script', 'link', 'img', 'a']
        }))
        .pipe(gulp.dest('build'))
}

const fonts = () => {
    return gulp.src('src/fonts/*.ttf')
        .pipe(gulp.dest('build/fonts'))
}

const styles = () => {
    return gulp.src('src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(urlPrefixer.css({
            prefix: path
        }))
        .pipe(gulp.dest('build/styles'))
}

const scripts = () => {
    return gulp.src('src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/scripts'))
}

const images = () => {
    return gulp.src('src/images/**/*')
        .pipe(gulp.dest('build/images'))
}

const server = () => {
    browserSync.init({
        server: {
            baseDir: "build"
        },
        notify: false
    });
    browserSync.watch('build', browserSync.reload);
}

const deleteBuild = (cb) => {
    return del('build/').then(() => { cb() });
}

const deployBuild = () => {
    return gulp.src("build/**/*")
        .pipe(deploy())
}

const watch = () => {
    gulp.watch('*.html', html);
    gulp.watch('src/fonts/*.ttf', fonts);
    gulp.watch('src/styles/**/*.scss', styles);
    gulp.watch('src/scripts/*.js', scripts);
    gulp.watch('src/images/**/*.*', images);
}

gulp.task(deployBuild);

exports.default = gulp.series(
    deleteBuild,
    gulp.parallel(html, fonts, styles, scripts, images),
    gulp.parallel(watch, server)
)