/*
* Функция, возвращающая целое случайное целое число .
* из переданного диапазона включительно
* https://developer.mozilla.org/ru/docs/orphaned/Web/JavaScript/Reference/Global_Objects/Math/random
*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
getRandomInt(1, 10);
/*
* Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
*  имя_функции(от, до, количество_знаков_после_запятой);
*/
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
getRandomArbitrary(1,3);
