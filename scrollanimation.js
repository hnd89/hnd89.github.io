$(window).scroll(function(){
    $(".hero_img").css("opacity", 0.9 - $(window).scrollTop() / 200);
  });
