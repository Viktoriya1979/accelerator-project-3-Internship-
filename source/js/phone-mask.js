const phoneInputElements = document.querySelectorAll('input[type="tel"]');

function phoneMask(phone) {
  return phone
    .replace(/\D+/g, '')
    .replace(/(\d)/, '+7')
    .replace(/(\d)(\d)/, '$1 $2')
    .replace(/(\d{3})(\d)/, '($1) $2')
    .replace(/(\d{3})(\d)/, '$1-$2')
    .replace(/(\d{2})(\d{2})$/, '$1-$2');
}

function handleChangePhone(event) {
  event.target.value = phoneMask(event.target.value);
}

phoneInputElements.forEach((phoneInput) => {
  phoneInput.addEventListener('input', handleChangePhone);
});
