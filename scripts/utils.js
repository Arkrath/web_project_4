

export const toggleModal = modal => {
  const isModalOpened = modal.classList.contains('modal_open');
  modal.classList.toggle('modal_open');
  lastModalOpened = modal;

  if (isModalOpened) {
		modal.removeEventListener('click', handleClick);
		document.removeEventListener('keydown', handleEsc);

	} else {
		modal.addEventListener('click', handleClick);
		document.addEventListener('keydown', handleEsc);
	}
}

export const handleEsc = ({ keyCode }) => {
  if (keyCode === 27) {
    toggleModal(lastModalOpened);
  }
}

export const defaultConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible',
};
