import { sendData } from './api.js';
import { showSuccessMessage, showErrorMessage } from './status-message.js';

const modalFormElement = document.querySelector('[data-form-name=modal-form]');
const modalSubmitButtonElement = document.querySelector('[data-form-name=modal-form] > .form-wrapper__form-button');
const modalNameInputElement = modalFormElement.querySelector('input[type="text"]');
const modalPhoneInputElement = modalFormElement.querySelector('input[type="tel"]');
const modalSelectElement = modalFormElement.querySelector('.form-wrapper__select-control');
const modalControlElement = modalFormElement.querySelector('.form-control__input');

const SubmitButtonCaption = {
  SUBMITTING: 'Отправляю...',
  IDLE: 'Отправить'
};

const modalToggleSubmitButton = (isDisabled) => {
  modalSubmitButtonElement.disabled = isDisabled;

  if (isDisabled) {
    modalSubmitButtonElement.textContent = SubmitButtonCaption.SUBMITTING;
  } else {
    modalSubmitButtonElement.textContent = SubmitButtonCaption.IDLE;
  }
};

// Функция, определяющая текущий фокус на элементе
const isTextFieldFocused = () =>
  document.activeElement === modalNameInputElement ||
  document.activeElement === modalPhoneInputElement ||
  document.activeElement === modalSelectElement ||
  document.activeElement === modalControlElement;


async function sendForm(event) {
  event.preventDefault();
  const form = new FormData(event.target);

  try {
    modalToggleSubmitButton(true);
    await sendData(form);
    showSuccessMessage();
    event.target.reset();
    modalToggleSubmitButton(false);

  } catch (error) {
    showErrorMessage();
    modalToggleSubmitButton(false);
  }
}

export { isTextFieldFocused, modalFormElement, sendForm };
