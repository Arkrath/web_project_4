export default class FormValidation {

  constructor(settings, formElement) {
      this._settings = settings
      this._formElement = formElement;
  }

  _showInputError(input, error) {
   const error = this._formElement.querySelector('#${input.id}-error');

    error.classList.add(this._settings.errorClass);
    input.classList.add(this._settings.inputErrorClass);
    error.textContent = input.validationMessage;
  }

  _hideInputError(input, error) {
   const error = this._formElement.querySelector('#${input.id}-error');

    error.classList.remove(this._settings.errorClass);
    input.classList.remove(this._settings.inputErrorClass);
    error.textContent = '';
  }

  _checkInputValidity(input) {
    if (input.validity.valid) {
      this._hideInputError(this._formElement, input);
    } else {
      this._showInputError(this._formElement, input);
    }
  }

  _toggleSubmitButton() {
    const isInvalid = inputs.some((input) => {
      return !input.validity.valid;
    });

    if (isInvalid) {
      button.classList.add(this._settings.inactiveButtonClass);
      button.setAttribute("disabled", true);
    } else {
      button.classList.remove(this._settings.inactiveButtonClass);
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
    };



}

// Search for edit profile form
const editProfileForm = document.querySelector('.form_edit-profile');
const addCardForm = document.querySelector('.form_add-card');

// Create Class Instance
const editProfileValidator = new FormValidation(defaultConfig, editProfileForm);
const addCardValidator = new FormValidation(defaultConfig, addCardForm);

// Activate validation
editProfileValidator.enableValidation();
addCardValidator.enableValidation();
