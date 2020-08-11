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

  // $(window).scroll(function () {
  //   var top_of_element = $(".progressbar").offset().top;
  //   var bottom_of_element = $(".progressbar").offset().top + $(".progressbar").outerHeight();
  //   var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  //   var top_of_screen = $(window).scrollTop();
  //   if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element))
  //     ProgresBar();
  // })

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

  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    autoplay:true,
    prevArrow: '<i class="fal fa-long-arrow-left"></i>',
    nextArrow: '<i class="fal fa-long-arrow-right"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    // speed:1500,
    ]});
 
});

// Index Page Filter Plugin

filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


// Product-List Page Slider 

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  var img=document.getElementsByClassName("img");
  img.AddEventListener("click",function(){
    moda
  })
}

var counter = function () {
  var count = 0;
  var template = `
    <div class="counter">
      <input type="button" class="minus" value="<"/>
      <span class="count">${count}</span>
      <input type="button" class="plus" value=">"/>
    </div>
  `;
  var el = $(template);
  var countEl = el.find(".count");

  el.find(".minus").click(function () {
    count = count - 1;
    countEl.html(count);
  });

  el.find(".plus").click(function () {
    count = count + 1;
    countEl.html(count);
  });
  return el;
};

$("#counter1").append(counter());

