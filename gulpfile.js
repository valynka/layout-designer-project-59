const { src, dest } = require('gulp');
const { parallel } = require('gulp');
const { watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

const browserSyncJob = () => {
    browserSync.init({
      server: "build/"
    });
    watch('app/scss/*.scss', buildSass);
    watch('app/pages/*.pug', buildPug);
};  

const buildSass = () => {
  console.log('Компиляция SASS');

  return src('app/scss/*.scss')
    .pipe(sass())
    .pipe(dest('build/styles/'))
    .pipe(browserSync.stream());
}

const buildPug = () => {
    console.log('Компиляция Pug');
  
    return src('app/pages/*.pug')
      .pipe(pug({ pretty: true }))
      .pipe(dest('build/'))
      .pipe(browserSync.stream());
}

exports.server = browserSyncJob;
exports.build = parallel(buildSass, buildPug);