'use strict';

const { watch, series } = require('gulp');
const {templates, styles, scripts, images, icons, assets} = require('../paths');

module.exports = () => {
  watch(assets.watch, series('copy'));
  watch(icons.watch, series('icons'));
  watch(images.watch, series('images'));
  watch(styles.watch.vendor, series('styles:vendor'));
  watch(scripts.watch, series('scripts'));
  watch(styles.watch.main, series('styles'));
  watch(templates.watch, series('templates'));
};
