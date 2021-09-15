import {activePageState} from './page-state.js';

const map = L.map('map-canvas')
  .on('load', () => {
    // console.log('Карта инициализирована');
    activePageState();
  })
  .setView({
    lat: 35.67963,
    lng: 139.77379,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


// marker

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
  // console.log(evt.target.getLatLng());
  const x = evt.target.getLatLng().lat.toFixed(5);
  const y = evt.target.getLatLng().lng.toFixed(5);
  console.log(x, y);
});

// mainPinMarker.remove();
