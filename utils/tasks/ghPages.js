const ghPages = require('gh-pages'),
      { app } = require('../paths'),
      path = require('path');

module.exports = (cb) => {
  ghPages.publish(path.join(process.cwd(), app.build), cb);
};
