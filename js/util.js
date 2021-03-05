/**
 * Возвращает случайное целое число из заданного диапазона
 * @param {number} min - минимальное значение диапазона
 * @param {number} max - максимальное значение диапазона
 * @returns {number} - полученное целое число
 */
const getRandomInt = (min, max) => {
  if (min >= 0 && max >= 0 && min < max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;  // Источник: https://habr.com/ru/post/312880/#s1_2
  }
  else { alert('Введены некорректные значения') }
}

/**
 * Возвращает случайное число из заданного диапазона c плавающей точкой
 * @param {number} min - минимальное значение диапазона
 * @param {number} max - максимальное значение диапазона
 * @param {number} decimal - число знаков после точки
 * @returns {number} - полученное число
 */
const getRandomFloat = (min, max, decimal) => {
  if (min >= 0 && max >= 0 && min < max) {
    return (Math.random() * (max - min) + min).toFixed(decimal);  // Источник: https://habr.com/ru/post/312880/#s1_2
  }
  else { alert('Введены некорректные значения') }
}

/**
 * Создаёт новый случайный массив из исходного
 * @param {Array} array — исходный массив
 * @return {Array} — случайный массив
 */
const createRandomArray = (array) => {
  const maxLength = getRandomInt(0, array.length - 1);
  return array.slice(maxLength);
}
export { getRandomInt, getRandomFloat, createRandomArray }
