

$(window).scroll(function(e) {
  let doc = $(document);
  let nav = $('.nav-bar');
  let logo = $('.nav-logo');
  let menu = $('.nav-menu a');
  // if (doc.scrollTop() <= 180) {
  let opacity = doc.scrollTop() / 180;
  console.log(opacity);
  nav.css('background', 'rgba(0,0,0,'+opacity+')' );
  logo.css('opacity', opacity);
  menu.css('-webkit-filter', 'invert('+ opacity +')');
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

      // $('.link--active').removeClass('link--active');
      // jumpobj.addClass('link--active');

      $('body, html').stop().animate({
        scrollTop: offset
      }, thespeed, 'swing');
      e.preventDefault();
    });
  }
};

$(document).ready(function(){
  $.mark.jump();
});

