

$('.item-box-cover a').click(function(e){ 
    e.preventDefault();
    var target = $($(this).attr('href'));
    if(target.length){
        var scrollTo = target.offset().top - 44;
        $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
    }
});

new WOW().init();


$(window).load(function(){
  $(window).scroll(function() {
    var wintop = $(window).scrollTop(), docheight = $('.adm-emag').height(), winheight = $(window).height();
    console.log(wintop);
    var totalScroll = (wintop/(docheight-winheight))*100;
    console.log("total scroll" + totalScroll);
    $(".KW_progressBar").css("width",totalScroll+"%");
    $(".icon-bike").css("left",totalScroll+"%");
  });

}); 