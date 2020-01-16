import '../config/jqueryLoad';
import 'magnific-popup';

export default () => {
  let $body = $('body');
  let $openBtn = $('.menu-button_burger');
  let $sidebar = $('.js-sidebar');
  let scrollBarWidth = window.innerWidth - $(window).width();

  function preventDefault(e) {
    e.preventDefault();
  }

  let callbacks = {
    beforeOpen() {
      $sidebar.removeClass('slideOutRight');
    },

    open() {
      $body.css({
        overflow: 'hidden',
      });

      $sidebar.addClass('slideInRight');
      document.body.addEventListener('touchmove', preventDefault, {
        passive: false,
      });
    },

    beforeClose() {
      $sidebar.removeClass('slideInRight');
      $sidebar.addClass('slideOutRight');
    },

    close() {
      $body.css({
        overflow: 'auto',
      });
      document.body.removeEventListener('touchmove', preventDefault);
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
