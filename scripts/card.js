import toggleModal from './utils.js';


export default class Card {
  constructor(data, cardTemplateSelector){
    this._text = data.text
    this._link = data.link
    this._cardTemplate = document.querySelector(cardTemplateSelector).content.querySelector('.gallery__card');
  }
  _cardLikeToggle(){
    cardLikeButton.classList.toggle('gallery__card-heart_active');
  }
  _cardDeleteHandler(){
    this._cardElement.remove();
  }

  _addEventListeners(){
    const cardLikeButton = this._cardElement.querySelector('.gallery__card-heart');
    const cardDeleteButton = this._cardElement.querySelector('.gallery__card-delete');
    const cardImage = this._cardElement.querySelector('.gallery__card-image');

    cardLikeButton.addEventListener('click', () => {
    this._cardLikeToggle(cardLikeButton);
    });

    cardDeleteButton.addEventListener('click', (event) => {
    this._cardDeleteHandler(event);
    });

    cardImage.addEventListener('click', () => {
      const modalImage = modalExpandImage.querySelector('.modal__image');
      const modalCaption = modalExpandImage.querySelector('.modal__caption');

      modalImage.alt = this._text;
      modalImage.src = this._link;
      modalCaption.textContent = this._text;
      toggleModal(modalExpandImage);
    });

  }

   createCard() {
    this._cardElement = this._cardTemplate .cloneNode(true);
    const cardImage = this._cardElement.querySelector('.gallery__card-image');
    const cardTitle = this._cardElement.querySelector('.gallery__card-title');


    cardTitle.textContent = this._text;
    cardImage.style.backgroundImage = `url(${this._link})`;

    this._addEventListeners();




    return this._cardElement;

  }

}


