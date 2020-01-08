const APP_NAME = './Moni'

module.exports = {
  app: {
    src: './src',
    build: `${APP_NAME}`,
    ghPages: `${APP_NAME}/**/*`
  },
  templates: {
    src: './src/templates/pages/*.pug',
    watch: './src/templates/**/*.pug',
    dest: `${APP_NAME}`
  },
  styles: {
    src: {main: './src/styles/main.scss', vendor: './src/styles/vendor.scss'},
    watch: {main: './src/styles/**/*.scss', vendor: './src/styles/vendor.scss'},
    build: `${APP_NAME}/css`
  },
  scripts: {
    src: './src/scripts/index.js',
    watch: './src/scripts/**/*.js',
    build: `${APP_NAME}/scripts`
  },
  images: {
    src: './src/images/**/*.*',
    watch: './src/images/**/*.*',
    build: `${APP_NAME}/images`
  },
  icons: {
    src: './src/icons/**/*.svg',
    watch: './src/icons/**/*.svg',
    build: `${APP_NAME}/images`
  },
  assets: {
    src: './src/fonts/**/*.{woff,woff2}',
    watch: './src/fonts/**/*.{woff,woff2}'
  }
}
