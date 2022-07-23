$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $(".body").toggleClass("lock");
  });
});

new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  spaceBetween: 10,

  breakpoints: {
    320: {
      centeredSlides: true,
    },
    768: {
      slidesPerView: false,
    },
    1200: {
      slidesPerView: true,
    },
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

var $reviewsSlider = $(".reviews-slider");
if ($reviewsSlider.length) {
  $reviewsSlider.slick({
    accessibility: false,
    centerMode: true,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
}
