const { src, dest } = require('gulp'),
      { icons } = require('../paths'),
      debug = require('gulp-debug'),
      imagemin = require('gulp-imagemin'),
      { svgo } = require('gulp-imagemin'),
      rename = require('gulp-rename'),
      svgStore = require('gulp-svgstore');

module.exports = () => {
  return src(icons.src)
    .pipe(imagemin([
      svgo({
        plugins: [
          {
            removeViewBox: false,
            collapseGroups: true,
            prefixIds: true,
            removeStyleElement: true
          }
        ]
      })
    ]))
    .pipe(svgStore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(dest(icons.build));
};