import 'svgxuse';
import objectFitImages from './polyfills/objectFitImages';

/* custom Modules */
import sidebar from './modules/sidebar';
import customRange from './modules/custom-range-slider';
import map from './modules/map.js';

objectFitImages();

sidebar();
customRange();
map();
