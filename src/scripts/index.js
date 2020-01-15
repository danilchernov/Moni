import 'svgxuse';
import objectFitImages from './polyfills/objectFitImages';

/* custom Modules */
import sidebar from './modules/sidebar';
import customRange from './modules/custom-range-slider';
import map from './modules/map.js';
import ripple from './modules/ripple-effect-emulation';

objectFitImages();

sidebar();
customRange();
map();
ripple();
