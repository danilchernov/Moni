const gulp = require('gulp'),
      { app } = require('../paths'),
      bs = require('browser-sync').create();

module.exports = () => {
  bs.init({
    server: {
      baseDir: app.build,
      notify: false,
      ui: false,
      online: true,
      tunnel: true
    }
  });
  bs.watch(app.build).on('change', bs.reload);
};