import {createAuthor} from './author-data.js';

// создание 1 мокового объявления
const mockAuthor = createAuthor();

// создание карточки объявления
const card = document.querySelector('#card').content.querySelector('.popup').cloneNode(true);

// найти родителя для размещения карточки
// const container = document.querySelector('#map-canvas');

const avatar = card.querySelector('.popup__avatar');
if (mockAuthor.avatar) {avatar.setAttribute('src', mockAuthor.avatar);}
else {avatar.classList.add('hidden');}

const title = card.querySelector('.popup__title');
if (mockAuthor.offer.title) {title.textContent = mockAuthor.offer.title;}
else {title.classList.add('hidden');}

const address = card.querySelector('.popup__text--address');
if (mockAuthor.offer.address) {address.textContent = mockAuthor.offer.address;}
else {address.classList.add('hidden');}

const price = card.querySelector('.popup__text--price');
if (mockAuthor.offer.price) {price.textContent = `${mockAuthor.offer.price} ₽/ночь`;}
else {price.classList.add('hidden');}

const capacity = card.querySelector('.popup__text--capacity');
if (mockAuthor.offer.rooms || mockAuthor.offer.guests) {capacity.textContent = `${mockAuthor.offer.rooms} комнаты для ${mockAuthor.offer.guests} гостей`;}
else {capacity.classList.add('hidden');}

const time = card.querySelector('.popup__text--time');
if (mockAuthor.offer.checkin || mockAuthor.offer.checkout) {time.textContent = `${mockAuthor.offer.checkin}, выезд до ${mockAuthor.offer.checkout}`;}
else {time.classList.add('hidden');}

const description = card.querySelector('.popup__description');
if (mockAuthor.offer.description) {description.textContent = mockAuthor.offer.description;}
else {description.classList.add('hidden');}

const type = card.querySelector('.popup__type');
if (mockAuthor.offer.type) {
  switch (mockAuthor.offer.type) {
    case 'flat':
      type.textContent = 'Квартира';
      break;
    case 'bungalow':
      type.textContent = 'Бунгало ';
      break;
    case 'house':
      type.textContent = 'Дом';
      break;
    case 'palace':
      type.textContent = 'Дворец';
      break;
    default:
      type.textContent = 'Квартира';
  }
} else {type.classList.add('hidden');}

const features = card.querySelector('.popup__features');
const featuresList = mockAuthor.offer.features;
if (featuresList) {
  for (let featureItem of featuresList)  {
    const listItem = document.createElement('li');
    listItem.classList.add('popup__feature');
    listItem.classList.add(`popup__feature--${featureItem}`);
    features.append(listItem);
  }
} else {features.classList.add('hidden');}


const photos = card.querySelector('.popup__photos');
const photo = card.querySelector('.popup__photo').cloneNode(true);
photos.removeChild(photos.children[0]);

const photosList = mockAuthor.offer.photos;
if (photosList) {
  for (let photoItem of photosList)  {
    const newPhoto = photo.cloneNode(true);
    newPhoto.setAttribute('src', photoItem);
    photos.append(newPhoto);
  }
} else {photos.classList.add('hidden');}

// container.append(card);
