const { task, series, parallel } = require('gulp');
const tasks = require('./utils/tasks');

task('clean', tasks.clean);
task('copy', tasks.copy);
task('templates', tasks.templates);
task('styles', tasks.styles);
task('styles:vendor', tasks['styles-vendor']);
task('scripts', tasks.scripts);
task('images', tasks.images);
task('icons', tasks.icons);
task('watchers', tasks.watchers);
task('server', tasks.server);
task('gh-pages', tasks['ghPages']);

task(
  'build',
  series(
    'clean',
    parallel(
      'copy',
      'images',
      'icons',
      'scripts',
      'styles:vendor',
      'styles',
      'templates',
    )
  )
);
task('default', series('build', parallel('watchers', 'server')));
