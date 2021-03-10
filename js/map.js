/* global L:readonly */

import { advertisements } from './data.js';
import { renderCard } from './popup.js';

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const address = document.querySelector('#address');

adForm.classList.add('ad-form--disabled');
adForm.querySelectorAll('fieldset').forEach((element) => {
  element.disabled = true;
});
mapFilters.classList.add('map__filters--disabled');
mapFilters.querySelectorAll('fieldset, select').forEach((element) => {
  element.disabled = true;
});

const map = L.map('map-canvas');
map.addEventListener('load', () => {
  adForm.classList.remove('ad-form--disabled');
  adForm.querySelectorAll('fieldset').forEach((element) => {
    element.disabled = false
  });
  mapFilters.classList.remove('map__filters--disabled');
  mapFilters.querySelectorAll('fieldset, select').forEach((element) => {
    element.disabled = false;
  });
});
map.setView({ lat: 35.6895, lng: 139.69171 }, 12);

const layer = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
);
layer.addTo(map);

const mainIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainMarker = L.marker(
  {
    lat: 35.6895,
    lng: 139.69171,
  },
  {
    draggable: true,
    icon: mainIcon,
  },
);
mainMarker.addTo(map);

address.value = '35.6895, 139.69171';

mainMarker.addEventListener('moveend', (evt) => {
  const location = evt.target.getLatLng();
  address.value = location.lat.toFixed(5) + ',' + location.lng.toFixed(5);
});

const adIcon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

advertisements(10).forEach((advertisement) => {
  const adMarker = L.marker({
    lat: advertisement.location.x,
    lng: advertisement.location.y,
  },
  {
    icon: adIcon,
  },
  );
  adMarker.addTo(map);
  adMarker.bindPopup(renderCard(advertisement));
});
