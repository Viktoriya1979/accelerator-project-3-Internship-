import { isEscapeKey, scrollController, isErrorMessageExists, isSuccessMessageExists } from './utils.js';
import { isTextFieldFocused, sendForm, modalFormElement } from './modal-form.js';

const modalElement = document.querySelector('.modal-container');
const buttonOpenModalElement = document.querySelector('.about__more-details-link');
const buttonCloseModalElement = document.querySelector('.modal-container__close-button');

const openModal = () => {
  setTimeout(() => {
    modalElement.classList.remove('modal-container--close');
  }, 200);
  scrollController.disabledScroll();
  modalFormElement.addEventListener('submit', sendForm);
  document.body.addEventListener('click', onBodyClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeModal = () => {
  setTimeout(() => {
    modalElement.classList.add('modal-container--close');
  }, 200);
  scrollController.enabledScroll();
  document.body.removeEventListener('click', onBodyClick);
  document.removeEventListener('keydown', onDocumentKeydown);
  modalFormElement.removeEventListener('submit', sendForm);
  modalFormElement.reset();
};

buttonOpenModalElement.addEventListener('click', (event) => {
  event.preventDefault();
  openModal();
});

buttonCloseModalElement.addEventListener('click', closeModal);

function onBodyClick(event) {
  const target = event.target;

  if (target === modalElement) {
    closeModal();
  }
}

function onDocumentKeydown(event) {
  if (isEscapeKey(event) && !isTextFieldFocused() && !isErrorMessageExists() && !isSuccessMessageExists()) {
    event.preventDefault();
    closeModal();
  }
}
