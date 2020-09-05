
export default class FormValidation {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
  }
  _showInputError(input,{errorClass, inputErrorClass, ...rest}) {
    const error = this._formElement.querySelector('#${input.id}-error');

    input.classList.add(this._settings.inputErrorClass);
    error.classList.add(this._settings.errorClass);
    error.textContent = input.validationMessage;
  }
  _hideInputError(input, {errorClass, inputErrorClass, ...rest}) {
    const error = this._formElement.querySelector('#${input.id}-error');

    error.classList.remove(this._settings.errorClass);
    input.classList.remove(this._settings.inputErrorClass);
    error.textContent = '';
  }

  _checkInputValidity(input, rest) {
    if (input.validity.valid) {
      this._hideInputError(this._formElement, input, rest);
    } else {
      this._showInputError(this._formElement, input, rest);
    }
  }

  _toggleSubmitButton(inputs, button, {inactiveButtonClass, ...rest}) {
    const isInvalid = inputs.some((input) => {
      return !input.validity.valid;
    });

    if (isInvalid) {
      button.classList.add(inactiveButtonClass);
      button.setAttribute("disabled", true);
    } else {
      button.classList.remove(inactiveButtonClass);
      button.removeAttribute("disabled");
    }
  }

  _setEventListeners() {
    const inputs = [this._formElement.querySelectorAll(this._settings.inputSelector)];
    const button = this._formElement.querySelector(this._settings.submitButtonSelector);

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleSubmitButton(inputs, button);
      });
    });
  }
  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }

}



