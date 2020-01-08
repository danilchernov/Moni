'use strict';

const { src, dest } = require('gulp'),
      { templates } = require('../paths'),
      plumber = require('gulp-plumber'),
      notify = require('gulp-notify'),
      debug = require('gulp-debug'),
      templateEngine = require('gulp-pug'),
      htmlBeautify = require('gulp-html-beautify');


module.exports = () => {
return src(templates.src)
    .pipe(plumber({
      errorHandler: notify.onError((error) => {
        console.log(error.message);
      })
    }))
    .pipe(templateEngine({pretty: true}))
    .pipe(htmlBeautify({ indent_size: 2 }))
    .pipe(dest(templates.dest));
};
