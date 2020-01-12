export default class Tooltip {
  constructor(options) {
    this.options = options;
    this.element = document
      .getElementById(options.id)
      .content.querySelector('.js-tooltip');
    this.placeSelector = options.placeToDisplay;
    this.placeToDisplay = null;
  }

  registerDisplayPlace() {
    // eslint-disable-next-line prettier/prettier
    this.placeToDisplay = document.querySelector(this.options.placeSelector);
  }

  displayElement() {
    this.placeToDisplay.appendChild(this.element);
  }

  destroyElement() {
    this.placeToDisplay.removeChild(this.element);
  }

  updateElementContent(str) {
    let content = this.element.querySelector('.js-tooltip-number');
    content.textContent = str;
  }

  updateElement(newPosition, newContent) {
    // this.updateElementPosition();
    this.updateElementContent(newContent);
  }

  initElement() {
    this.registerDisplayPlace();
    this.displayElement();
  }
}
