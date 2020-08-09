$(document).ready(function () {

  // Index Page Start

  // Navbar Hover
  $(".dropdown").hover(function () {
    $(this).addClass("show");
    $(this).find(".dropdown-menu").addClass("show");
  }, function () {
    $(this).removeClass("show");
    $(this).find(".dropdown-menu").removeClass("show");
  })

  // Slider Plugin


  // Slick  Plugin
  if ($(".one-time").length) {
    $('.one-time').slick({
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      adaptiveHeight: true,
      prevArrow: '<i class="fas fa-long-arrow-alt-left"></i>',
      nextArrow: '<i class="fas fa-long-arrow-alt-right"></i>',
    });

  }
  // Slick Plugin
  if ($(".autoplay").length) {
    $('.autoplay').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      autoplaySpeed: 1000,
      touchMove: true,
      arrows: false,
    });
  }
  // Slider Plugin
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

  // Index Page End 

  // Accordions Page Start

  // Hover Accordion Version 1
  $(document).on("click", ".card-header", function () {
    $(this).next().slideDown("fast", function () {
      $(this).addClass("active")
    });
    $(this).parents(".accordionparent").find(".active").slideUp("fast", function () {
      $(this).removeClass("active");
    })
  })

  // Tabs Page
  $(document).on("click", ".menu .menu-items ", function () {
    let active = $(".activetab");
    active.removeClass("activetab");
    $(this).addClass("activetab");



    let id = $(this).attr("data-id");
    $(this).parents(".tabparent").find(".item").each(function () {
      if ($(this).attr("data-id") == id) {
        $(this).addClass("d-block")
      } else {
        $(this).removeClass("d-block")
      }
    })

  })

  $(window).scroll(function () {
    var top_of_element = $(".progressbar").offset().top;
    var bottom_of_element = $(".progressbar").offset().top + $(".progressbar").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();
    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element))
      ProgresBar();
  })

  function ProgresBar() {
    $('.progressbar').each(function () {
      var t = $(this);
      var elem = t.attr('data-perc');
      $(this).find(".approach-fill-val").animate({

        width: elem + "%"
      }, {
        duration: 1500,
        easing: 'linear',
        step: function (now) {
          t.find('.approach-value').text(Math.ceil(now) + '%')
        }
      });
    })
  }

  ProgresBar();
});