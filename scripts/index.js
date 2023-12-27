// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
const cardTemplate = document.querySelector('#card-template').content;
const cardContainer = document.querySelector('.places__list');

function createCard(name, link, deleteCard) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = name;

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.setAttribute('src', link);
    cardImage.setAttribute('alt', name);

    const buttonDelete = cardElement.querySelector('.card__delete-button');
    buttonDelete.addEventListener('click', ()=> deleteCard(cardElement));

    return cardElement;
}

function deleteCard(cardElement) {
   cardElement.remove();
}


function initializeCards(cards) {
    cards.forEach(item => {
        const cardElement = createCard(item.name, item.link, deleteCard);
        cardContainer.append(cardElement)
    })
}

initializeCards(initialCards);
