////  Modal
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
const modalAddCardForm = document.querySelector('.form__add-card');
//const formCardTitleInput = modalAddCardForm.querySelector('.form__input_type_card-title');
//const formCardLinkInput = modalAddCardForm.querySelector('.form__input_type_card-link');
const addCardSubmitButton = modalAddCardForm.querySelector('.form__save-button_theme_add-card');
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
////  Other


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

//  Functions
////  Calls the initial gallery__cards to be displayed
initialCards.forEach(data => {
	const cardElement = cardTemplate.cloneNode(true);

	const cardImage = cardElement.querySelector('.gallery__card-image');
	const cardTitle = cardElement.querySelector('.gallery__card-title');
	const cardLikeButton = cardElement.querySelector('.gallery__card-heart');
	const cardDeleteButton = cardElement.querySelector('.gallery__card-delete');

	cardTitle.textContent = data.name;
	cardImage.style.backgroundImage = `url(${data.link})`;

	cardImage.addEventListener('click', () => {
		const modalImage = modalExpandImage.querySelector('.modal__image');
		const modalCaption = modalExpandImage.querySelector('.modal__caption');

		modalImage.src = data.link;
		modalCaption.textContent = data.name;
		toggleModal(modalExpandImage);
	});
	// Like card interaction
	cardLikeButton.addEventListener('click', () => {
		cardLikeButton.classList.toggle("gallery__card-heart_active");
	});

	cardDeleteButton.addEventListener('click', () => {
		//handleCardDelete()
	});


	list.prepend(cardElement);
});

//// Toggle Modal Windows Open/Close
function toggleModal(modal) {
	modal.classList.toggle('modal_open');
}

//// EVENT LISTENERS
////  Opens add card modal by clicking on add button
addCardButton.addEventListener('click', () => {
	modalAddCard.classList.add('modal_open');
});

////  Opens edit profile modal window by clicking on edit button
editProfileButton.addEventListener('click', () => {
	modalEditProfile.classList.add('modal_open');
});


////  Closes edit profile modal by clicking on close button
closeEditProfileButton.addEventListener('click', () => {
	toggleModal(modalEditProfile);
});
////  Closes add card modal by clicking on close button
closeAddCardButton.addEventListener('click', () => {
	toggleModal(modalAddCard);
});
////  Closes Expand Image modal by ciicking on close button
closeExpandImageButton.addEventListener('click', () => {
	toggleModal(modalExpandImage);
});

////  Defaults form values to main page value if closed before submit.
closeEditProfileButton.addEventListener('click', () => {
	formNameInput.value = profileUserName.textContent;
	formDescriptionInput.value = profileUserDescription.textContent;
});

////  Saves the edits made in Edit Profile modal when clicking Save button.
modalEditProfileForm.addEventListener('submit', event => {
	event.preventDefault();
	profileUserName.textContent = formNameInput.value;
	profileUserDescription.textContent = formDescriptionInput.value;

	toggleModal(modalEditProfile);
});

//// Provides function to add a gallery Card
function addCard(cardTitle, cardImage) {
	const cardElement = cardTemplate.cloneNode(true);
	cardElement.querySelector('.gallery__card-title').textContent = cardTitle;
	cardElement.querySelector('.gallery__card-image').value = cardImage;

	list.prepend(cardElement);
}

addCardSubmitButton.addEventListener("click", event => {
  event.preventDefault();
	const cardTitle = document.querySelector('.form__input_type_card-title');
	const cardLink = document.querySelector('.form__input_type_card-link');

	addCard(cardTitle.value, cardLink.value);
	cardTitle.value = "";
	cardLink.style.backgroundImage = `url(${cardLink.value})`;
	toggleModal(modalAddCard);
});


