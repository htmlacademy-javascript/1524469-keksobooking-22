import { advertisementsList, OFFER_TYPE } from './data.js';

const cardTemplate = document.querySelector('#card').content;

const createCard = (advertisementsListItem) => {
  const newCard = cardTemplate.cloneNode(true);
  newCard.querySelector('.popup__title').textContent = advertisementsListItem.offer.title;
  newCard.querySelector('.popup__text--address').textContent = advertisementsListItem.offer.address;
  newCard.querySelector('.popup__text--price').textContent = advertisementsListItem.offer.price + ' ₽/ночь';
  newCard.querySelector('.popup__type').textContent = OFFER_TYPE[advertisementsListItem.offer.type];
  newCard.querySelector('.popup__text--capacity').textContent = advertisementsListItem.offer.rooms + ' комнаты для ' + advertisementsListItem.offer.guests + ' гостей';
  newCard.querySelector('.popup__text--time').textContent = 'Заезд после ' + advertisementsListItem.offer.checkin + ', выезд до ' + advertisementsListItem.offer.checkout;

  const featuresList = newCard.querySelector('.popup__features');
  featuresList.innerHTML = '';
  const featuresArray = advertisementsListItem.offer.features;
  for (let i = 0; i <= featuresArray.length - 1; i++) {
    const add = featuresArray[i];
    const newElement = document.createElement('li');
    newElement.classList.add('popup__feature', 'popup__feature--' + add);
    featuresList.append(newElement);
  }

  newCard.querySelector('.popup__description').textContent = advertisementsListItem.offer.description;

  const popupPhotos = newCard.querySelector('.popup__photos');
  popupPhotos.innerHTML = '';
  const photosArray = advertisementsListItem.offer.photos;
  for (let i = 0; i <= photosArray.length - 1; i++) {
    const newPhoto = document.createElement('img');
    newPhoto.className = 'popup__photo';
    newPhoto.src = photosArray[i];
    newPhoto.width = 45;
    newPhoto.height = 40;
    newPhoto.alt = 'Фотография жилья';
    popupPhotos.appendChild(newPhoto);
  }

  newCard.querySelector('.popup__avatar').src = advertisementsListItem.author.avatar;

  return newCard;
};

const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.appendChild(createCard(advertisementsList(1)));
