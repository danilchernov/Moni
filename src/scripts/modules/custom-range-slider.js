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
        animate: true,
        animationDuration: 300,
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

      /* Pip event listeners */
      let pips = {
        elements: slider.querySelectorAll('.noUi-value'),
        init() {
          for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].style.cursor = 'pointer';
            this.elements[i].addEventListener('click', this.clickOnPip);
          }
        },
        clickOnPip() {
          var value = Number(this.getAttribute('data-value'));
          slider.noUiSlider.set(value);
        },
      };

      pips.init();

      function convertToFormat(number) {
        let localFormat = wNumb({
          thousand: ' ',
          postfix: '',
          decimals: 0,
        });

        let localValue = localFormat.to(number);

        return localValue;
      }

      function updateTotal(totalPrice) {
        sliderTotal.textContent = convertToFormat(totalPrice);
      }

      function checkLimit(limit) {
        let bar = document.querySelector('.custom-range-slider .noUi-connect');

        if (limit === 50000) {
          bar.classList.add('full');
        } else {
          bar.classList.remove('full');
        }
      }

      /* Show total */
      slider.noUiSlider.on('update', function(values, handle) {
        let number = +values[handle];

        updateTotal(number);
        tooltip.updateElement(null, convertToFormat(number));
        checkLimit(number);
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
