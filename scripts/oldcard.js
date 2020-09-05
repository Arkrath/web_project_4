//// Modules


class Card {
  constructor(data, cardTemplateSelector) {
    this._text = data.text;
    this._link = data.link;
    this._cardTemplate = document.querySelector(cardTemplateSelector).content.querySelector('.gallery__card');
  }

  _addEventListeners() {
    const cardLikeButton = this._card.querySelector('.gallery__card-heart');
    const cardDeleteButton = this._card.querySelector('.gallery__card-delete');
    const cardImage = this._card.querySelector('.gallery__card-image');

    cardLikeButton.addEventListener('click', () => {
      cardLikeToggle(cardLikeButton);
    });

    cardDeleteButton.addEventListener('click', (event) => {
      cardDeleteHandler(event);
    });

    cardImage.addEventListener('click', () => {
      const modalImage = modalExpandImage.querySelector('.modal__image');
      const modalCaption = modalExpandImage.querySelector('.modal__caption');

      modalImage.alt = this._text;
      modalImage.src = this._link;
      modalCaption.textContent = this._text = data.text;
      toggleModal(this._card);
    });

  }


  createCard() {
    this._card = this._cardTemplate.cloneNode(true);
    const cardImage = this._card.querySelector('.gallery__card-image');


    const cardTitle = this._card.querySelector('.gallery__card-title');

    cardTitle.textContent = this._text;
    cardImage.style.backgroundImage = `url(${this._link})`;

    this._addEventListeners();

    return this._card;

  }
}

