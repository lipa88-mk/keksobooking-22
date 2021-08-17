/*
* Функция, возвращающая целое случайное целое число
* из переданного диапазона включительно
*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
* Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
*  имя_функции(от, до, количество_знаков_после_запятой);
*/
function getRandomArbitrary(min, max, length) {
  return Number((Math.random() * (max - min) + min).toFixed(length));
}

export {getRandomInt, getRandomArbitrary};
