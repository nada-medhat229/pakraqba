

$(document).ready(function () {

    // loading

    $("body").css('overflow-y', 'auto');
    $('#loading').fadeOut(500);


        // show sub menu

        $("nav .has-menu").click(function(){
          $(this).children(".sub-menu").toggleClass("d-flex");
        });
        $("nav .has-menu").mouseover(function(){
          $(this).children(".sub-menu").addClass("d-flex");
        });
        $("nav .has-menu").mouseover(function(){
          $(this).children(".sub-menu").addClass("d-flex");
        });
       
        $("nav .has-menu").mouseleave(function(){
          $(this).children(".sub-menu").removeClass("d-flex");
        });
        $(".bottom-nav .virtical-sub-menu a").mouseover(function(){
          $(this).parents(".virtical-sub-menu").addClass("active");
        });
        $(".bottom-nav .virtical-sub-menu").mouseleave(function(){
          $(this).removeClass("active");
        });
        $(".side-menu-nav .has-menu").click(function(){
          $(this).children(".sub-menu").slideToggle(300);
        });

        $(".heart").click(function() {
          $(this).toggleClass("fav");
          console.log(this)
        })

$("nav .hav-user").click(function () {
  $(".hov-menu").toggleClass("d-flex")
})


    // ----- scroll top button ------

    var btn_top = $('#scroll-top');
    var btn_bottom = $('.scroll-bottom');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn_top.addClass('show');
      } else {
        btn_top.removeClass('show');
      }
    });

    $(".play-icon").click(function(){
      document.querySelector(".video-container video").play();
      $(this).addClass("d-none");
      $(".pause-icon").removeClass("d-none");
    })
    
    $(".pause-icon").click(function(){
      document.querySelector(".video-container video").pause();
      $(this).addClass("d-none");
      $(".play-icon").removeClass("d-none");
    })



    btn_top.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });

    btn_bottom.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:730}, '300');
    });





    var changeSlide = 4; // mobile -1, desktop + 1
// Resize and refresh page. slider-two slideBy bug remove
var slide = changeSlide;
if ($(window).width() < 600) {
    var slide = changeSlide;
    slide--;
} else if ($(window).width() > 999) {
    var slide = changeSlide;
    slide++;
} else {
    var slide = changeSlide;
}

$('.one').owlCarousel({
  nav: false,
  items: 1,
  autoplay: 5000,
rtl:true
})
$('.two').owlCarousel({
  nav: false,
  margin: 10,
  rtl:true,
  responsive: {
      0: {
          items: changeSlide - 1,
          slideBy: changeSlide - 1
      },
      600: {
          items: changeSlide,
          slideBy: changeSlide
      },
      1000: {
          items: changeSlide + 1,
          slideBy: changeSlide + 1
      }
  }
})
var owl = $('.one');
owl.owlCarousel();
owl.on('translated.owl.carousel', function (event) {

  $('.slider-two .item').removeClass("active");
  var c = $(".slider .owl-item.active").index();
  $('.slider-two .item').eq(c).addClass("active");
  var d = Math.ceil((c + 1) / (slide)) - 1;
  $(".slider-two .owl-dots .owl-dot").eq(d).trigger('click');
})

$('.slider-two .item').click(function () {
  var b = $(".item").index(this);
  $(".slider .owl-dots .owl-dot").eq(b).trigger('click');
  $(".slider-two .item").removeClass("active");
  $(this).addClass("active");
});
var owl2 = $('.two');
owl2.owlCarousel();



// upload profile pic
if ($(".form-addbuilder .profile-pic").length > 0) {
  const imgDiv = document.querySelector('.profile-pic');
  const img = document.querySelector('#photo');
  const file = document.querySelector('#file');
  const uploadBtn = document.querySelector('#uploadBtn');

  //if user hover on img div 

  imgDiv.addEventListener('mouseenter', function(){
      uploadBtn.style.display = "block";
  });

  //if we hover out from img div

  imgDiv.addEventListener('mouseleave', function(){
      uploadBtn.style.display = "none";
  });

  //when we choose a pic to upload

  file.addEventListener('change', function(){
  const choosedFile = this.files[0];
  if (choosedFile) {
      const reader = new FileReader(); 
      reader.addEventListener('load', function(){
          img.setAttribute('src', reader.result);
      });
      reader.readAsDataURL(choosedFile);
  }
  });
}


var currency = "BTC";
var url = "https://api.coinbase.com/v2/exchange-rates?currency=" + currency;

function makeRequest() {
  xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var response = JSON.parse(this.responseText);
 
  };
  xhr.open("GET", url, true);
  xhr.setRequestHeader("CB-VERSION", "2018-01-01");
  xhr.send();
}
makeRequest();

    
    // upload profile pic
    if ($(".profile-pic").length > 0) {
      const imgDiv = document.querySelector('.profile-pic');
      const img = document.querySelector('#photo');
      const file = document.querySelector('#file');
      const uploadBtn = document.querySelector('#uploadBtn');
      //if user hover on img div
      imgDiv.addEventListener('mouseenter', function(){
          uploadBtn.style.display = "block";
      });
      //if we hover out from img div
      imgDiv.addEventListener('mouseleave', function(){
          uploadBtn.style.display = "none";
      });
      //when we choose a pic to upload
      file.addEventListener('change', function(){
      const choosedFile = this.files[0];
      if (choosedFile) {
          const reader = new FileReader();
          reader.addEventListener('load', function(){
              img.setAttribute('src', reader.result);
          });
          reader.readAsDataURL(choosedFile);
      }
      });
    }







    $(".register-as").change(function() {
      let x = $(this).val();
      if ( x.includes("3")) {
        $(".if-agent").slideDown(500);
      }else{
        $(".if-agent").slideUp(500);
      }
    })



  



    if ($("#logo-img").length > 0) {
  document.getElementById('logo-img').onchange = function () {
    $(".file-name").text(this.value)
  };

    }

  var input = document.querySelector(".phone-input1");
  window.intlTelInput(input, {
    // any initialisation options go here
    customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
      return "e.g. " + selectedCountryPlaceholder;
    },
  });
  var input = document.querySelector(".phone-input2");
  window.intlTelInput(input, {
    // any initialisation options go here
    customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
      return "e.g. " + selectedCountryPlaceholder;
    },
  });

  new WOW().init();



});


$(function(){


  $(".offered-real-estate .items-container.owl-carousel").owlCarousel({
    nav: false,
    loop: false,
    autoplay: false,
    autoplayHoverPause: true,
    responsiveClass: true,
    margin: 20,
    rtl: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
  });


  $(".offered-real-estate .card .owl-carousel").owlCarousel({
    nav: false,
    autoplay: false,
    autoplayHoverPause: false,
    responsiveClass: true,
    items: 1,
    dots: true,
    rtl: true,
    mouseDrag: false
  });
  
  

  
  
  $(".titanium-agencies .owl-carousel").owlCarousel({
    nav: false,
    loop: false,
    autoplay: false,
    autoplayHoverPause: true,
    responsiveClass: true,
    margin: 20,
    rtl: true,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 4
        },
        1000: {
            items: 5
        },
        1300: {
            items: 6
        }
    }
  });
  
  
  $(".spicial-agencies .owl-carousel").owlCarousel({
    nav: true,
    loop: false,
    autoplay: false,
    autoplayHoverPause: true,
    responsiveClass: true,
    margin: 20,
    rtl: true,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 4
        },
        1000: {
            items: 5
        },
        1300: {
            items: 6
        }
    }
  });
  
  $(".our-parteners .owl-carousel").owlCarousel({
    nav: true,
    loop: false,
    autoplay: false,
    autoplayHoverPause: true,
    responsiveClass: true,
    margin: 20,
    rtl: true,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 4
        },
        1000: {
            items: 5
        },
        1300: {
            items: 6
        }
    }
  });

  $(".city.owl-carousel").owlCarousel({
    margin: 10,
    rtl: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".suggested-for-buy-rent .owl-carousel").owlCarousel({
    margin: 20,
    nav: true,
    rtl: true,
    responsive: {
      0: {
        items: 1
    },
    600: {
        items: 2
    },
    1000: {
        items: 3
    },
    1300: {
        items: 4
    }
    },
  });

  $(".slice .owl-carousel").owlCarousel({
    margin: 10,
    rtl: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });



  



  var changeSlide = 4; // mobile -1, desktop + 1
  // Resize and refresh page. slider-two slideBy bug remove
  var slide = changeSlide;
  if ($(window).width() < 600) {
      var slide = changeSlide;
      slide--;
  } else if ($(window).width() > 999) {
      var slide = changeSlide;
      slide++;
  } else {
      var slide = changeSlide;
  }
  
  $('.one').owlCarousel({
    nav: false,
    items: 1,
    autoplay: 5000,
  rtl:true
  })
  $('.two').owlCarousel({
    nav: false,
    margin: 10,
    rtl:true,
    responsive: {
        0: {
            items: changeSlide - 1,
            slideBy: changeSlide - 1
        },
        600: {
            items: changeSlide,
            slideBy: changeSlide
        },
        1000: {
            items: changeSlide + 1,
            slideBy: changeSlide + 1
        }
    }
  })
  var owl = $('.one');
  owl.owlCarousel();
  owl.on('translated.owl.carousel', function (event) {
  
    $('.slider-two .item').removeClass("active");
    var c = $(".slider .owl-item.active").index();
    $('.slider-two .item').eq(c).addClass("active");
    var d = Math.ceil((c + 1) / (slide)) - 1;
    $(".slider-two .owl-dots .owl-dot").eq(d).trigger('click');
  })
  
  $('.slider-two .item').click(function () {
    var b = $(".item").index(this);
    $(".slider .owl-dots .owl-dot").eq(b).trigger('click');
    $(".slider-two .item").removeClass("active");
    $(this).addClass("active");
  });
  var owl2 = $('.two');
  owl2.owlCarousel();



  $(".nice-select").niceSelect();
  $(".chosen-select").chosen({rtl: true});

})



function myFunction() {
  // Get the checkbox
  var check1 = document.getElementById("op1");
  var check2 = document.getElementById("op2");

  // Get the output text
  var olduser = document.getElementById("data-user-old");
  var newuser = document.getElementById("data-user-new");

  // If the checkbox is checked, display the output text
  if (check1.checked == true){
    olduser.style.display = "block";
  } else {
    olduser.style.display = "none";
  }
  if (check2.checked == true){
    newuser.style.display = "block";
  } else {
    newuser.style.display = "none";
  }
}