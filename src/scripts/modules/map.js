export default () => {
  let { ymaps } = window;

  ymaps.ready(init);

  function init() {
    let map = new ymaps.Map('map', {
      center: [53.3348, 83.7769],
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
