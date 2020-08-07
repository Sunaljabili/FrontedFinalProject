$(document).ready(function(){
// Navbar Hover
    $(".dropdown").hover(function(){
      $(this).addClass("show");
      $(this).find(".dropdown-menu").addClass("show");
    },function(){
        $(this).removeClass("show");
        $(this).find(".dropdown-menu").removeClass("show");
    })
 
  // Slider Plugin
  

    // Slick  Plugin
    if($(".one-time").length){
      $('.one-time').slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow:'<i class="fas fa-long-arrow-alt-left"></i>',
        nextArrow:'<i class="fas fa-long-arrow-alt-right"></i>',
      });
        
    }
    // Slick Plugin
    if($(".autoplay").length){
      $('.autoplay').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        autoplaySpeed: 1000,
        touchMove:true,
        arrows:false,
      });
    }
    $('.slider').slick({
      infinite: true,
      speed: 2000,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 4500,
      prevArrow: '<i class="fal fa-long-arrow-left"></i>',
      nextArrow: '<i class="fal fa-long-arrow-right"></i>',
      responsive: [{
          breakpoint: 1040,
          settings: {
              infinite: true,
              dots: true,
              arrows: false,
          }
      }]

  });
        
});