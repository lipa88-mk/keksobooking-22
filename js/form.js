/**
 * «Тип жилья» — выбор опции меняет атрибуты минимального значения и плейсхолдера поля «Цена за ночь»;
 */

const typeField = document.querySelector('#type');
const priceField = document.querySelector('#price');

typeField.addEventListener('change', function () {
  switch (typeField.value) {
    case 'bungalow':
      priceField.setAttribute('placeholder', '0');
      priceField.setAttribute('min', '0');
      break;
    case 'flat':
      priceField.setAttribute('placeholder', '1000');
      priceField.setAttribute('min', '1000');
      break;
    case 'house':
      priceField.setAttribute('placeholder', '5000');
      priceField.setAttribute('min', '5000');
      break;
    case 'palace':
      priceField.setAttribute('placeholder', '10000');
      priceField.setAttribute('min', '10000');
      break;
  }
});

/**
 * «Время заезда», «Время выезда» — выбор опции одного поля автоматически изменят значение другого.
 */
const timeinField = document.querySelector('#timein');
const timeoutField = document.querySelector('#timeout');

const compare = function (value) {
  switch (value) {
    case '12:00':
      timeinField.children[0].setAttribute('selected', 'selected');
      timeinField.children[1].removeAttribute('selected');
      timeinField.children[2].removeAttribute('selected');
      timeoutField.children[0].setAttribute('selected', 'selected');
      timeoutField.children[1].removeAttribute('selected');
      timeoutField.children[2].removeAttribute('selected');
      break;
    case '13:00':
      timeinField.children[0].removeAttribute('selected');
      timeinField.children[1].setAttribute('selected', 'selected');
      timeinField.children[2].removeAttribute('selected');
      timeoutField.children[0].removeAttribute('selected');
      timeoutField.children[1].setAttribute('selected', 'selected');
      timeoutField.children[2].removeAttribute('selected');
      break;
    case '14:00':
      timeinField.children[0].removeAttribute('selected');
      timeinField.children[1].removeAttribute('selected');
      timeinField.children[2].setAttribute('selected', 'selected');
      timeoutField.children[0].removeAttribute('selected');
      timeoutField.children[1].removeAttribute('selected');
      timeoutField.children[2].setAttribute('selected', 'selected');
      break;
  }
}

timeinField.addEventListener('change', function () {
  compare(this.value);
});

timeoutField.addEventListener('change', function () {
  compare(this.value);
});
