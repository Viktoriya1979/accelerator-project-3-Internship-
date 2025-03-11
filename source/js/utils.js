const slideElements = document.querySelectorAll('.swiper-slide');

// Функция для получения фокуса на элементе
const createFocusOnElement = () => {
  slideElements.forEach((item) => {
    item.setAttribute('tabindex', '0');
  });
};

// Блокировка и разблокировка скролла на странице
const scrollController = {
  scrollPosition: 0,
  disabledScroll() {
    scrollController.scrollPosition = window.scrollY;
    document.body.style.cssText = `
       top: -${scrollController.scrollPosition}px;
     `;
    document.body.classList.add('page__body--lock');
    document.documentElement.classList.add('page--lock');
  },
  enabledScroll() {
    document.body.classList.remove('page__body--lock');
    window.scroll({ top: scrollController.scrollPosition });
    document.documentElement.classList.remove('page--lock');
  },
};

// Функция для проверки, нажата ли клавиша "Escape"
const isEscapeKey = (evt) => evt.key === 'Escape';

// Сообщение об ошибке
const isErrorMessageExists = () => Boolean(document.querySelector('.error'));

// Сообщение об успехе
const isSuccessMessageExists = () => Boolean(document.querySelector('.success'));

// export { createFocusOnElement };
export { createFocusOnElement, isEscapeKey, scrollController, isErrorMessageExists, isSuccessMessageExists };
