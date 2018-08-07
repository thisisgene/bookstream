$(document).ready(function(){
  $.mark.jump();
});

$(document).scroll(function(e) {
  let doc = $(document);
  let nav = $('.nav-bar');
  let logo = $('.nav-logo');
  let menu = $('.nav-menu a');
  // if (doc.scrollTop() <= 180) {
  let opacity = doc.scrollTop() / 180;
  console.log(opacity);
  nav.css('background', 'rgba(0,0,0,'+opacity+')' )
  logo.css('opacity', opacity)
  menu.css('-webkit-filter', 'invert('+ opacity +')')
  // }
});


$.mark = {
  jump: function (options) {
    var defaults = {
      selector: 'a.scroll-on-page-link'
    };
    if (typeof options === 'string') {
      defaults.selector = options;
    }

    options = $.extend(defaults, options);
    return $(options.selector).click(function (e) {

      var jumpobj = $(this);
      var target = jumpobj.attr('href');
      var thespeed = 1000;
      var offset = $(target).offset().top;
      console.log(offset);
      $('.link--active').removeClass('link--active');
      jumpobj.addClass('link--active');
      // clickToActivate = true;

      $('html,body').animate({
        scrollTop: offset
      }, thespeed, 'swing', function(){
        // setTimeout(function(){clickToActivate = false;}, 100);
      });
      e.preventDefault();
    });
  }
};