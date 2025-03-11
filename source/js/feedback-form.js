import { sendData } from './api.js';
import { showSuccessMessage, showErrorMessage } from './status-message.js';

const feedbackFormElement = document.querySelector('[data-form-name=feedback-form]');
const feedbackSubmitButtonElement = feedbackFormElement.querySelector('[data-form-name=feedback-form] > .form-wrapper__form-button ');

const SubmitButtonCaption = {
  SUBMITTING: 'Отправляю...',
  IDLE: 'Отправить'
};

const feedbackToggleSubmitButton = (isDisabled) => {
  feedbackSubmitButtonElement.disabled = isDisabled;

  if (isDisabled) {
    feedbackSubmitButtonElement.textContent = SubmitButtonCaption.SUBMITTING;
  } else {
    feedbackSubmitButtonElement.textContent = SubmitButtonCaption.IDLE;
  }
};

feedbackFormElement.addEventListener('submit', sendForm);

async function sendForm(event) {

  event.preventDefault();
  // const form = event.target;
  const form = new FormData(event.target);
  const textareaFormElement = document.querySelector('.form-field__input--textarea');
  const messageErrorFormElement = document.querySelector('.form-field__input-error-message');
  const textMessage = textareaFormElement.value;

  if (textMessage.trim() === '') {
    messageErrorFormElement.style.cssText = `
      display: block;
      `;
    setTimeout(() => {
      messageErrorFormElement.style.cssText = '';
    }, 8000);

    return;
  }

  try {
    feedbackToggleSubmitButton(true);
    await sendData(form);
    // await form.submit();
    showSuccessMessage();
    // form.reset();
    event.target.reset();
    feedbackToggleSubmitButton(false);

  } catch (error) {
    showErrorMessage();
    feedbackToggleSubmitButton(false);
  }
}

