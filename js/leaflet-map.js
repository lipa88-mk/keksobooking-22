import {activePageState} from './page-state.js';
import {AUTHORS} from './author-data.js';
const LAT_TOKIO = 35.67963;
const LNG_TOKIO = 139.77379;

const map = L.map('map-canvas')
  .on('load', () => { // при загрузке карты страинца активна
    activePageState();
    document.querySelector('#address').value = `${LAT_TOKIO}, ${LNG_TOKIO}`;
  })
  .setView({
    lat: LAT_TOKIO,
    lng: LNG_TOKIO,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


// marker
//  главный перемещаемый маркер
const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});


const mainPinMarker = L.marker(
  {
    lat: 35.67963,
    lng: 139.77379,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const x = evt.target.getLatLng().lat.toFixed(5);
  const y = evt.target.getLatLng().lng.toFixed(5);
  document.querySelector('#address').value = `${x}, ${y}`;
});

// mainPinMarker.remove();


// маркеры объявлений
const cardPinIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
// забрали объявления
const cards = AUTHORS;

// наполнение попапа card данными объявления mockAuthor
const createCustomPopup = (mockAuthor) => {
  const card = document.querySelector('#card').content.querySelector('.popup').cloneNode(true);

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
  return card;
};


// для каждого объявления создали метку
cards.forEach((card) => {
  const lat = card.location.x;
  const lng = card.location.y;

  // сощдали амркер объявления
  const marker = L.marker({
    lat,
    lng,
  },
  {
    icon: cardPinIcon,
  });

  // добавили маркер на карту, добавили при клике вызов генерации попапа
  marker.addTo(map).bindPopup(
    createCustomPopup(card),
    {
      keepInView: true,
    },
  );
});
