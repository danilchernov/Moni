import '../config/jqueryLoad';
import 'magnific-popup';

export default () => {
  let $openBtn = $('.menu-button_burger');
  let $sidebar = $('.js-sidebar');

  let callbacks = {
    beforeOpen() {
      $sidebar.removeClass('slideOutRight');
    },

    open() {
      $sidebar.addClass('slideInRight');
    },

    beforeClose() {
      $sidebar.removeClass('slideInRight');
      $sidebar.addClass('slideOutRight');
    },
  };

  let options = {
    type: 'inline',
    midClick: true,
    removalDelay: 300,
    callbacks: callbacks,
  };

  $openBtn.magnificPopup(options);
};
