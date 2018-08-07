

$(window).scroll(function(e) {
  let doc = $(document);
  let nav = $('.nav-bar');
  let navLogo = $('.nav-logo');
  let menu = $('.nav-menu a');
  let intro = $('.intro-box');
  // if (doc.scrollTop() <= 180) {
  let opacity = doc.scrollTop() / 180;
  nav.css('background', 'rgba(0,0,0,'+opacity+')' );
  navLogo.css('opacity', opacity);
  intro.css('opacity', 1.3 - opacity/2);
  // intro.css('-webkit-transform', 'translateY('+ opacity * 130+'px)');

  menu.css('-webkit-filter', 'invert('+ opacity +')');
  if (opacity >= 2) {
    $('.impressum-container').removeClass('hidden');
  }
  if (opacity <= 1.9) {
    $('.impressum-container').addClass('hidden');
  }
  // }
});


$.mark = {
  jump: function (options) {
    let defaults = {
      selector: 'a.scroll-on-page-link'
    };
    if (typeof options === 'string') {
      defaults.selector = options;
    }

    options = $.extend(defaults, options);
    return $(options.selector).click(function (e) {

      let jumpobj = $(this);
      let target = jumpobj.attr('href');
      let thespeed = 1000;
      let offset = $(target).offset().top;

      $('.link--active').removeClass('link--active');
      jumpobj.addClass('link--active');

      $('html,body').animate({

        scrollTop: offset
      }, thespeed);
      e.preventDefault();
    });
  }
};

$(document).ready(function(){
  $.mark.jump();
});

