import { renderCard } from './popup.js'
import './form.js'
import { advertisementsList } from './data.js';

const OBJECTS_AMOUNT = 10;
advertisementsList(OBJECTS_AMOUNT);

const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.appendChild(renderCard(advertisementsList(1)[0]));
