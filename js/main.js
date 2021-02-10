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
