//  Definitions
const modalForm = document.querySelector('.form');
//const modalDisplay = document.querySelector('.modal');
const profileUserName = document.querySelector('.profile__user-name');
const profileUserDescription = document.querySelector('.profile__user-description');
const formNameInput = document.querySelector('.form__input_type_name');
const formDescriptionInput = document.querySelector('.form__input_type_description');
const editProfileButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.modal__close-button');


//  Functions
// -- Toggles the class modal_open to have modal appear/disappear
//function toggleModal() {
  //modalDisplay.classList.toggle('modal_open');
//}

function toggleModal() {
  let modalDisplay = document.querySelector('.modal');
  if (modalDisplay.style.display === "none") {
    modalDisplay.style.display = "flex";
  } else {
    modalDisplay.style.display = "none";
  }
}

// -- Opens modal window by clicking on edit button then runs
//     the display toggle to display window.
editProfileButton.addEventListener('click', toggleModal);

// -- Closes modal window by clicking on close button then runs
//     the display toggle
closeButton.addEventListener('click', toggleModal);

// -- Returns current name value from main page into modal inputs if closed before submit.
closeButton.addEventListener('click', () => {
formNameInput.value = profileUserName.textContent;
formDescriptionInput.value = profileUserDescription.textContent;
});

// -- Saves the edits made in Edit Profile modal when clicking Save button.
modalForm.addEventListener('submit', stopRefresh => {
  stopRefresh.preventDefault();
  profileUserName.textContent = formNameInput.value;
  profileUserDescription.textContent = formDescriptionInput.value;

  toggleModal();
});

