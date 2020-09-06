//// Modules import/Export
import {defaultConfig} from './utils.js';
import FormValidation from './FormValidation.js';
import {toggleModal} from './utils.js';
import card from './card.js';


////  Modal
const modalEditProfile = document.querySelector('.modal_type_edit-profile');
const modalAddCard = document.querySelector('.modal_type_add-card');
const modalExpandImage = document.querySelector('.modal_type_expand-image');
let lastModalOpened = null;

////  Profile
const profileUserName = document.querySelector('.profile__user-name');
const profileUserDescription = document.querySelector('.profile__user-description');

////  Forms
////  Edit Profile Form
const modalEditProfileForm = document.querySelector('.form');
const formNameInput = document.querySelector('.form__input_type_name');
const formDescriptionInput = document.querySelector('.form__input_type_description');

////  Add Card Form
const modalAddCardForm = document.querySelector('.form_add-card');
const inputTitle = document.querySelector('.form__input_type_card-title');
const inputImage = document.querySelector('.form__input_type_card-link');

////  Gallery
const cardTemplate = document.querySelector('.card-template').content.querySelector('.gallery__card');
const list = document.querySelector('.gallery__grid');

////  Buttons
////  Edit Profile Buttons
const editProfileButton = document.querySelector('.profile__edit-button');
const closeEditProfileButton = modalEditProfile.querySelector('.modal__close');

////  Add Card Buttons
const addCardButton = document.querySelector('.profile__add-button');
const closeAddCardButton = modalAddCard.querySelector('.modal__close');

////  Expand Image Buttons
const closeExpandImageButton = modalExpandImage.querySelector('.modal__close');

// Create Class Instance
const editProfileValidator = new FormValidation(defaultConfig, modalEditProfileForm);
const addCardValidator = new FormValidation(defaultConfig, modalAddCardForm );

// Activate Form Validation
editProfileValidator.enableValidation();
addCardValidator.enableValidation();


// Initial array used to populate the first 6 cards as default.
const initialCards = [{
	name: "Yosemite Valley",
	link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
}, {
	name: "Lake Louise",
	link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
}, {
	name: "Bald Mountains",
	link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
}, {
	name: "Latemar",
	link: "https://code.s3.yandex.net/web-code/latemar.jpg"
}, {
	name: "Vanoise National Park",
	link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
}, {
	name: "Lago di Braies",
	link: "https://code.s3.yandex.net/web-code/lago.jpg"
}];

////  Calls the initial 6 gallery__cards to be displayed
initialCards.forEach(data => {
  const card = new Card(data, '.card-template')
	const cardElement = card.createCard();
	list.append(cardElement);
});


const handleEsc = ({ keyCode }) => {
  if (keyCode === 27) {
    toggleModal(lastModalOpened);
  }
}

card.createCard()

const listenerToggle = ({modal, isModalOpened}) => {
	if (isModalOpened) {
		modal.removeEventListener('click', handleClick);
		modal.removeEventListener('keydown', handleEsc);

	} else {
		modal.addEventListener('click', handleClick);
		modal.addEventListener('keydown', handleEsc);
	}
};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////|    Submit    |////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//// Submit event listeners
modalAddCardForm.addEventListener('submit', addCardSubmit);
modalEditProfileForm.addEventListener('submit', editProfileSubmit);


//// Submit data handlers
//// EDIT PROFILE
function editProfileSubmit(event) {
	event.preventDefault();
	profileUserName.textContent = formNameInput.value;
	profileUserDescription.textContent = formDescriptionInput.value;

	toggleModal(modalEditProfile);

}
//// ADD NEW CARD
function addCardSubmit(event) {
	event.preventDefault();
	const cardElement = createCard(inputTitle.value, inputImage.value);
	list.prepend(cardElement);
	modalAddCardForm.reset();

	toggleModal(modalAddCard);
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////|     Open     |////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////  Opens ADD CARD modal
addCardButton.addEventListener('click', () => {
	toggleModal(modalAddCard);
});

////  Opens EDIT PROFILE modal
editProfileButton.addEventListener('click', () => {
	formNameInput.value = profileUserName.textContent;
	formDescriptionInput.value = profileUserDescription.textContent;
	toggleModal(modalEditProfile);

});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////|    Close     |////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//// Closes ANY OPEN modal when clicking off form
const handleClick = ({target}) => {
	if (target.classList.contains('modal_open')) {
		toggleModal(target);
	}
};


////  Close EDIT PROFILE modal
closeEditProfileButton.addEventListener('click', () => {
	toggleModal(modalEditProfile);
});


////  Closes ADD CARD modal
closeAddCardButton.addEventListener('click', () => {
	toggleModal(modalAddCard);
	inputTitle.value = "";
	inputImage.value = "";

});
////  Closes EXPAND IMAGE modal
closeExpandImageButton.addEventListener('click', () => {
	toggleModal(modalExpandImage);
	formNameInput.value = profileUserName.textContent;
	formDescriptionInput.value = profileUserDescription.textContent;
});
