
jQuery(function($) {
  var doAnimations = function() {
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.adm-emag p, .title-adm, .bot-cover, .col-adm, .txt-fter, .bot-ship, .ppt-adm');
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    $animatables.each(function(i) {
       var $animatable = $(this);
      if (($animatable.offset().top + $animatable.height() - 20) < offset) {
            $animatable.addClass('animated');
      } else {
        $animatable.removeClass('animated'); 
      }
    });
  };
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');
}); 


$('.item-cover a').click(function(e){
    e.preventDefault();
    var target = $($(this).attr('href'));
    if(target.length){
        var scrollTo = target.offset().top - 44;
        $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
    }
});