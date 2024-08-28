// Intro
$('.slider-nav').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
    prevArrow: null, 
    nextArrow: null,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.slider-nav').on('afterChange', function(event, slick, currentSlide, nextSlide){
    if (currentSlide === slick.slideCount - 1) {
        $(".btns").attr("class", "d-none");
        $(".btt2").removeClass("d-none");
        
        $(".btt2 .suby").click(function() {
            window.location.href = "/singup.html";
        });
    }
});

$('.next-btn').on('click', function(){
    $('.slider').slick('slickNext');
});
 
// Custom BTN
var clickCount = 0;

$(".next-btn").click(function() {
    clickCount++;

    if (clickCount === 4) {
        // Swal.fire({
        //     title: "Good job!",
        //     text: "You clicked the button!",
        //     icon: "success"
        // });

        $(".btns").attr("class", "d-none");
        $(".btt2").removeClass("d-none");
    }
});

$(".btt2 .suby").click(function() {
    window.location.href = "singup.html";
});

$('.slider-nav2').slick({
    dots: false,
    rtl: true,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 0,
    speed: 1000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
      }
    }]
});

// Pop Screen
document.getElementById("mySidenav").style.width = "100%";
document.getElementById("mySidenav").style.height = "70%";
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("mySidenav").style.height = "70%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.height = "0";
}

// Side Bar
function openBar() {
    document.getElementById("mySidebar").style.width = "74%";
    document.getElementById("mySidebar").style.height = "100%";
}

function closeBar() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("mySidebar").style.height = "0";
}
