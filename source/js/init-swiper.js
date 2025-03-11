import { createFocusOnElement } from './utils.js';
import { heroSliderLooping } from './hero-slider-swiper.js';

const initSwipers = () => {
  heroSliderLooping.init();
  createFocusOnElement();
};

export { initSwipers };
