////  Modal
const modalOverlay = document.querySelector('.modal');
const modalEditProfile = document.querySelector('.modal_type_edit-profile');
const modalAddCard = document.querySelector('.modal_type_add-card');
const modalExpandImage = document.querySelector('.modal_type_expand-image');

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
///const addCardSubmitButton = modalAddCardForm.querySelector('.form__save-button_theme_add-card');
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////|  CODE BREAK  |////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////|  CODE BREAK  |////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  Adds a new card
function createCard(title, image) {
	const cardElement = cardTemplate.cloneNode(true);
	const cardImage = cardElement.querySelector('.gallery__card-image');
	const cardTitle = cardElement.querySelector('.gallery__card-title');
	const cardLikeButton = cardElement.querySelector('.gallery__card-heart');
	const cardDeleteButton = cardElement.querySelector('.gallery__card-delete');

	cardTitle.textContent = title;
	cardImage.style.backgroundImage = `url(${image})`;

	cardImage.addEventListener('click', () => {
		const modalImage = modalExpandImage.querySelector('.modal__image');
		const modalCaption = modalExpandImage.querySelector('.modal__caption');

		modalImage.alt = title;
		modalImage.src = image;
		modalCaption.textContent = title;
		toggleModal(modalExpandImage);
	});
	// Like card interaction
	cardLikeButton.addEventListener('click', () => {
		cardLikeToggle(cardLikeButton);
	});

	// Deletes the nearest card to the button being pressed
	cardDeleteButton.addEventListener('click', (event) => {
		cardDeleteHandler(event);
	});

	return cardElement;

}
////  Calls the initial 6 gallery__cards to be displayed
initialCards.forEach(data => {
  const cardElement = createCard(data.name, data.link);
	list.append(cardElement);
});

function cardLikeToggle(cardLikeButton) {
	cardLikeButton.classList.toggle('gallery__card-heart_active');
}

function cardDeleteHandler(event) {
	event.target.parentNode.remove();
}


//// Toggle Modal Windows Open/Close
function toggleModal(modal) {
	modal.classList.toggle('modal_open');
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////|   Keypress   |////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// CREATE ESCAPE KEY PRESS TO CLOSE HANDLER AND FUNCTION



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
  clickCloseHandler(modalAddCard);
});

////  Opens EDIT PROFILE modal
editProfileButton.addEventListener('click', () => {
	formNameInput.value = profileUserName.textContent;
	formDescriptionInput.value = profileUserDescription.textContent;
	toggleModal(modalEditProfile);
	clickCloseHandler(modalEditProfile);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////|    Close     |////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//// Closes ANY OPEN modal when clicking off form
function clickCloseHandler(modal) {
	const modalOpen = document.querySelector('.modal_open');
	const modalVisible = modal.classList.contains('modal_open');
	modalOverlay.addEventListener('click', (event) => {
		if (event.target === modalOpen && modalVisible) {
			toggleModal(modal);
		}
	});
}


////  Close EDIT PROFILE modal
closeEditProfileButton.addEventListener('click', () => {
	toggleModal(modalEditProfile);
});

////  Defaults form values to main page value if closed before submit.
closeEditProfileButton.addEventListener('click', () => {

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
