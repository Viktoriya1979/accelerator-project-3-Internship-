import Swiper from 'swiper/bundle';

const swiperElement = document.querySelector('.hero__swiper-container.swiper');

const heroSliderLooping = new Swiper(swiperElement, {
  // Optional parameters
  loop: true,
  init: false,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  lazyPreloadPrevNext: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-slide-active .hero-card__swiper-pagination',
    type: 'bullets',
    clickable: true,
    bulletElement: 'button',
    // bulletElement: 'span',
    bulletClass: 'hero-card__pagination-bullet',
    bulletActiveClass: 'hero-card__pagination-bullet--active',
  },

  breakpoints: {
    // when window width is >= 1440px
    1440: {
      allowTouchMove: false,
    },
  },
  on: {
    slideChangeTransitionStart: function () {
      heroSliderLooping.pagination.init();
      heroSliderLooping.pagination.render();
      heroSliderLooping.pagination.update();
    }
  }
});

export { heroSliderLooping };
