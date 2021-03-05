const adForm = document.querySelector('.ad-form');
const checkIn = adForm.querySelector('#timein');
const checkOut = adForm.querySelector('#timeout');
const venueType = adForm.querySelector('#type');
const venuePrice = adForm.querySelector('#price');

const MIN_PRICE =
{
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
};

checkIn.addEventListener('change', () => {
  checkIn.value = checkOut.value;
});

checkOut.addEventListener('change', () => {
  checkOut.value = checkIn.Value;
});

venueType.addEventListener('change', () => {
  venuePrice.placeholder = MIN_PRICE[venueType.value];
  venuePrice.min = MIN_PRICE[venueType.value];
})
