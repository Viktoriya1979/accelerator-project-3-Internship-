import { createFocusOnElement } from './utils.js';
import { heroSliderLooping } from './hero-slider-swiper.js';
import { programsSlider } from './programs-slider-swiper.js';

const initSwipers = () => {
  heroSliderLooping.init();
  programsSlider.init();
  createFocusOnElement();
};

export { initSwipers };
