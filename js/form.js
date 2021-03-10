const adForm = document.querySelector('.ad-form');
const checkIn = adForm.querySelector('#timein');
const checkOut = adForm.querySelector('#timeout');
const venueType = adForm.querySelector('#type');
const venuePrice = adForm.querySelector('#price');

const MinPrice =
{
  BUNGALOW: 0,
  FLAT: 1000,
  HOUSE: 5000,
  palace: 10000,
};

checkIn.addEventListener('change', () => {
  checkOut.value = checkIn.value;
});

checkOut.addEventListener('change', () => {
  checkIn.value = checkOut.value;
});

venueType.addEventListener('change', () => {
  venuePrice.placeholder = MinPrice[venueType.value.toUpperCase()];
  venuePrice.min = MinPrice[venueType.value.toUpperCase()];
})
