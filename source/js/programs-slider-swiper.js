import Swiper from 'swiper/bundle';

const swiperElement = document.querySelector('.programs__swiper-container.swiper');

const programsSlider = new Swiper(swiperElement, {
  // Optional parameters
  init: false,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // slidesPerView: 1,
  slidesPerView: 'auto',
  lazyPreloadPrevNext: 1,
  spaceBetween: 30,

  breakpoints: {
    // when window width is >= 768px
    768: {
      // slidesPerView: 2,
      scrollbar: {
        enabled: true,
      },
    },
    // when window width is >= 1440px
    1440: {
      spaceBetween: 32,
      slidesPerView: 3,
      allowTouchMove: false,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.programs__swiper-button.swiper-button.swiper-button-next',
    prevEl: '.programs__swiper-button.swiper-button.swiper-button-prev',
  },

  scrollbar: {
    enabled: false,
    el: '.programs__swiper-scrollbar.swiper-scrollbar',
    draggable: true,
    dragClass: 'programs__swiper-scrollbar-drag swiper-scrollbar-drag',
    // dragSize: 'auto',
    dragSize: 324,
  },
});

export { programsSlider };
