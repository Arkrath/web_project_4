////  Modal
const modalForm = document.querySelector('.form');
const modalEditProfile = document.querySelector('.modal_type_edit-profile');
const modalAddCard = document.querySelector('.modal_type_add-card');
const modalExpandImage = document.querySelector('.modal_type_expand-image');

////  Profile
const profileUserName = document.querySelector('.profile__user-name');
const profileUserDescription = document.querySelector('.profile__user-description');
////  Forms
const formNameInput = document.querySelector('.form__input_type_name');
const formDescriptionInput = document.querySelector('.form__input_type_description');
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
    toggleModal(modalExpandImage)
    })
  cardLikeButton.addEventListener('click', () => {
    //changeLikeState()
	})

	cardDeleteButton.addEventListener('click', () => {
	  //handleCardDelete()
  })


	list.prepend(cardElement);
})

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
modalForm.addEventListener('submit', event => {
	event.preventDefault();
	profileUserName.textContent = formNameInput.value;
	profileUserDescription.textContent = formDescriptionInput.value;

	toggleModal(modalEditProfile);
});
