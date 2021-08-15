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

/*
* Функция возвращает 1 рандомный элемент массива
*/
function getRandomMasValue (mas) {
  return mas[getRandomInt(0, mas.length - 1)];
}



const TYPE_LIST = ['palace', 'flat', 'house', 'bungalow'];
const CHECK_LIST = ['12:00', '13:00', '14:00'];
const FEATURES_LIST = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];


function getRandomMas(mas) { // возвращает массив рандомных значений другого массива
  const randomMas = [];
  for (let item of mas) {
    if (getRandomInt(0, 1)) {randomMas.push(item)}
  }
  return randomMas;
}


function getPhotosList (num) { // возвращает массив из рандомного числа адресов картинок
  const result = [];
  for (let i = 0; i < num; i++ ) {
    result[i] = 'http://o0.github.io/assets/images/tokyo/hotel' + (i + 1) + '.jpg';
  }
  return result;
}

function createAuthors (num) {// возвращает массив из num объектов авторов
  const result = [];
  for (let i=0; i<num; i++) {
    const location_X = getRandomArbitrary(35.65000, 35.70000, 5);
    const location_Y = getRandomArbitrary(139.70000, 139.80000, 5);
    const author = {
      avatar: 'img/avatars/user0'+ getRandomInt(1, 5) +'.png',
      location: {
        x: location_X,
        y: location_Y,
      },
      offer: {
        title: 'Заголовок предложения',
        description: 'Описание помещения',
        price: getRandomInt(0, 100),
        rooms: getRandomInt(0,5),
        guests: getRandomInt(0,20),
        type: getRandomMasValue(TYPE_LIST),
        checkin: getRandomMasValue(CHECK_LIST),
        checkout: getRandomMasValue(CHECK_LIST),
        features: getRandomMas(FEATURES_LIST),
        photos: getPhotosList(getRandomInt(1,5)),
        address: location_X + ', ' + location_Y,
      },
    };
    window.console.log(author);
    result.push(author);
  }
  return result;
}
const AUTHORS = createAuthors(10);
window.console.log(AUTHORS);

