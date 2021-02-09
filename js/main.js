const GET_RANDOM = (min, max) => {
  if (min >= 0 && max >= 0 && min < max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;  // Источник: https://habr.com/ru/post/312880/#s1_2
  }
  else { alert('Введены некорректные значения') }
}

const GET_RANDOM_FLOAT = (min, max) => {
  if (min >= 0 && max >= 0 && min < max) {
    return Math.random() * (max - min) + min;  // Источник: https://habr.com/ru/post/312880/#s1_2
  }
  else { alert('Введены некорректные значения') }
}
