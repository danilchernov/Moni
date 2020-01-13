export default () => {
  let { ymaps } = window;

  ymaps.ready(init);
  function init() {
    // Создание карты.
    let map = new ymaps.Map('map', {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [53.3348, 83.7769],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 17,
      controls: [],
    });

    let placemark = new ymaps.Placemark(
      [53.3348, 83.7769],
      {
        openBalloonOnClick: false,
        cursor: 'default',
      },
      {
        iconLayout: 'default#image',
        iconImageHref: '../images/pin.png',
        iconImageSize: [22, 32],
      },
    );

    map.behaviors.disable(['scrollZoom', 'drag']);
    map.geoObjects.add(placemark);
  }
};
