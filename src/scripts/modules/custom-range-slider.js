import noUiSlider from 'nouislider';
import Tooltip from './custom-tooltip';
import wNumb from 'wnumb';

export default () => {
  let containers = document.querySelectorAll('.js-custom-range-slider');

  if (containers.length) {
    containers.forEach(container => {
      let slider = container.querySelector('.js-custom-range-slider-target');
      // eslint-disable-next-line prettier/prettier
      let sliderTotal = container.querySelector('.js-custom-range-slider-total');

      let tooltip = new Tooltip({
        id: 'tooltip',
        placeSelector: '.noUi-origin',
      });

      noUiSlider.create(slider, {
        start: 25000,
        connect: [true, false],
        padding: [1500, 1500],
        range: {
          min: 3500,
          max: 51500,
        },
        pips: {
          mode: 'positions',
          values: [3.125, 44.791, 96.875],
          density: 3,
          format: wNumb({
            thousand: ' ',
            postfix: ' руб',
            decimals: 0,
          }),
        },
      });

      /* Show total */
      slider.noUiSlider.on('update', function(values, handle) {
        let localFormat = wNumb({
          thousand: ' ',
          postfix: '',
          decimals: 0,
        });

        let localValue = localFormat.to(+values[handle]);

        sliderTotal.textContent = localValue;

        tooltip.updateElement(null, localValue);
      });

      slider.noUiSlider.on('start', function(values, handle) {
        tooltip.initElement();
      });

      slider.noUiSlider.on('start', function(values, handle) {
        tooltip.initElement();
      });

      slider.noUiSlider.on('end', function(values, handle) {
        tooltip.destroyElement();
      });
    });
  }
};
