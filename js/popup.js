import { OFFER_TYPE } from './data.js';

const cardTemplate = document.querySelector('#card').content;


const renderCard = ({author, offer}) => {
  const newCard = cardTemplate.cloneNode(true);
  newCard.querySelector('.popup__title').textContent = offer.title;
  newCard.querySelector('.popup__text--address').textContent = offer.address;
  newCard.querySelector('.popup__text--price').textContent = offer.price + ' ₽/ночь';
  newCard.querySelector('.popup__type').textContent = OFFER_TYPE[offer.type];
  newCard.querySelector('.popup__text--capacity').textContent = offer.rooms + ' комнаты для ' + offer.guests + ' гостей';
  newCard.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ', выезд до ' + offer.checkout;

  const featuresList = newCard.querySelector('.popup__features');
  featuresList.innerHTML = '';
  const features = offer.features;

  features.forEach((feature) => {
    const add = feature;
    const newElement = document.createElement('li');
    newElement.classList.add('popup__feature', 'popup__feature--' + add);
    featuresList.append(newElement);
  });

  newCard.querySelector('.popup__description').textContent = offer.description;

  const popupPhotos = newCard.querySelector('.popup__photos');
  popupPhotos.innerHTML = '';
  const photos = offer.photos;


  photos.forEach((photo) => {
    const newPhoto = document.createElement('img');
    newPhoto.className = 'popup__photo';
    newPhoto.src = photo;
    newPhoto.width = 45;
    newPhoto.height = 40;
    newPhoto.alt = 'Фотография жилья';
    popupPhotos.appendChild(newPhoto);
    return newPhoto;
  });

  newCard.querySelector('.popup__avatar').src = author.avatar;

  return newCard;
};

export { renderCard }
