import '../config/jqueryLoad';
import 'magnific-popup';

export default () => {
  let $body = $('body');
  let $openBtn = $('.menu-button_burger');
  let $sidebar = $('.js-sidebar');
  let scrollBarWidth = window.innerWidth - $(window).width();

  let callbacks = {
    beforeOpen() {
      $sidebar.removeClass('slideOutRight');
    },

    open() {
      $body.css({
        'overflow-y': 'hidden',
      });

      $sidebar.addClass('slideInRight');
    },

    beforeClose() {
      $sidebar.removeClass('slideInRight');
      $sidebar.addClass('slideOutRight');
    },

    close() {
      $body.css({
        'overflow-y': 'auto',
      });
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
