/**
 * Возвращает случайное целое число из заданного диапазона
 * @param {number} min - минимальное значение диапазона
 * @param {number} max - максимальное значение диапазона
 * @returns {number} - полученное целое число
 */
const getRandom = (min, max) => {
  if (min >= 0 && max >= 0 && min < max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;  // Источник: https://habr.com/ru/post/312880/#s1_2
  }
  else { alert('Введены некорректные значения') }
}

const getRandomFloat = (min, max) => {
  if (min >= 0 && max >= 0 && min < max) {
    return (Math.random() * (max - min) + min).toFixed(5);  // Источник: https://habr.com/ru/post/312880/#s1_2
  }
  else { alert('Введены некорректные значения') }
}

const TYPE = ['place', 'flat', 'house', 'bungalow'];
const TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const createAuthor = () => {
  return {
    avatar: 'img/avatars/user' + 0 + getRandom(1, 8) + '.png',
  };
};

const createOffer = (location) => {
  return {
    title: 'Жилье для вас',
    address: location.x + ', ' + location.y,
    price: getRandom(1, 100000),
    type: TYPE[getRandom(0, TYPE.length - 1)],
    rooms: getRandom(1, 10),
    guests: getRandom(1, 20),
    checkin: TIME[getRandom(0, TIME.length - 1)],
    checkout: TIME[getRandom(0, TIME.length - 1)],
    features: FEATURES[getRandom(0, FEATURES.length - 1)],
    description: 'Уютное жилье с прекрасным расположением',
    photos: PHOTOS[getRandom(0, PHOTOS.length - 1)],
  };
};

const createLocation = () => {
  return {
    x: getRandomFloat(35.65000, 35.70000),
    y: getRandomFloat(139.70000, 139.80000),
  };
};

const createAdvertisement = () => {
  const location = createLocation();
  return {
    author: createAuthor(),
    offer: createOffer(location),
    location: createLocation(),
  }
}

const advertisementsList = new Array(10).fill(null).map(() => createAdvertisement());
