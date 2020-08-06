$(document).ready(function(){
// Navbar Hover
    $(".dropdown").hover(function(){
      $(this).addClass("show");
      $(this).find(".dropdown-menu").addClass("show");
    },function(){
        $(this).removeClass("show");
        $(this).find(".dropdown-menu").removeClass("show");
    })

    if($(".one-time").length){
      $('.one-time').slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow:'<i class="fas fa-long-arrow-alt-left"></i>',
        nextArrow:'<i class="fas fa-long-arrow-alt-right"></i>'
      });
        
    }
        
});