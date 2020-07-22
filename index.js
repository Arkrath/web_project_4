//  Definitions
let modalForm = document.querySelector('.form');
let modalOverlay = document.querySelector('.modal__overlay');
let profileUserName = document.querySelector('.profile__user-name');
let profileUserDescription = document.querySelector('.profile__user-description');
let formNameInput = document.querySelector('.form__input_type_name');
let formDescriptionInput = document.querySelector('.form__input_type_description');
let editProfileButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.modal__close-icon');



//  Functions
// -- Toggles the class modal_open to have modal appear/disappear
function toggleModal() {
  modalOverlay.classList.toggle('modal_open');
}
// -- Opens modal window by clicking on edit button then runs
//     the display toggle to display window.
editProfileButton.addEventListener('click', toggleModal);

// -- Closes modal window by clicking on close button then runs
//      the display toggle
closeButton.addEventListener('click', toggleModal);

// -- Returns current name value from main page into modal inputs if closed before submit.
closeButton.addEventListener('click', function(){
formNameInput.value = profileUserName.textContent;
formDescriptionInput.value = profileUserDescription.textContent;
});

// -- Saves the edits made in Edit Profile modal clicking Save button.
modalForm.addEventListener('submit', function(stopRefresh) {
  stopRefresh.preventDefault();
  profileUserName.textContent = formNameInput.value;
  profileUserDescription.textContent = formDescriptionInput.value;

  toggleModal();
});

