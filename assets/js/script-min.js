$(document).scroll(function(e) {
  let doc = $(document);
  let nav = $('.nav-bar');
  let logo = $('.nav-logo');
  // if (doc.scrollTop() <= 180) {
  let opacity = doc.scrollTop() / 180;
  console.log(opacity);
  nav.css('background', 'rgba(0,0,0,'+opacity+')' )
  logo.css('opacity', opacity)
  // }
});


