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

timeinField.addEventListener('change', function () {
  timeoutField.value = this.value;
});

timeoutField.addEventListener('change', function () {
  timeinField.value = this.value;
});


/**
 * Адрес: ручное редактирование поля запрещено.
 */

const addressField = document.querySelector('#address');
addressField.setAttribute('readonly', 'readonly');

/**
 * Заголовок объявления: Минимальная длина — 30 символов;
 * Валидация во время ввода
 */

const titleElement = document.querySelector('#title');
const MIN_TITLE_LENGTH = 30;

titleElement.addEventListener('input', () => {
  const valueLength = titleElement.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    titleElement.setCustomValidity('Еще '+  (MIN_TITLE_LENGTH - valueLength) +' символов');
  } else {
    titleElement.setCustomValidity('');
  }
  titleElement.reportValidity();
});

/**
 * Поле «Количество комнат» синхронизировано с полем «Количество мест» таким образом,
 * что при выборе количества комнат вводятся ограничения на допустимые варианты выбора
 * количества гостей:
1 комната — 1 «для 1 гостя»;
2 комнаты — 2 «для 2 гостей» или «для 1 гостя»;
3 комнаты — 3 «для 3 гостей», «для 2 гостей» или «для 1 гостя»;
100 комнат — 0 «не для гостей».
 */

const roomsNumberField = document.querySelector('#room_number'); // число комнат
const capacityField = document.querySelector('#capacity'); // число гостей
const forOneGuestOption = capacityField.querySelector('option[value = "1"]');
const forTwoGuestOption = capacityField.querySelector('option[value = "2"]');
const forThreeGuestOption = capacityField.querySelector('option[value = "3"]');
const forZeroGuestOption = capacityField.querySelector('option[value = "0"]');

roomsNumberField.addEventListener('change', () => {
  switch (roomsNumberField.value) {
    case '1':
      forOneGuestOption.removeAttribute('disabled');
      forTwoGuestOption.setAttribute('disabled', 'disabled');
      forThreeGuestOption.setAttribute('disabled', 'disabled');
      forZeroGuestOption.setAttribute('disabled', 'disabled');
      capacityField.value = '1';
      break;
    case '2':
      forOneGuestOption.removeAttribute('disabled');
      forTwoGuestOption.removeAttribute('disabled');
      forThreeGuestOption.setAttribute('disabled', 'disabled');
      forZeroGuestOption.setAttribute('disabled', 'disabled');
      capacityField.value = '1';
      break;
    case '3':
      forOneGuestOption.removeAttribute('disabled');
      forTwoGuestOption.removeAttribute('disabled');
      forThreeGuestOption.removeAttribute('disabled');
      forZeroGuestOption.setAttribute('disabled', 'disabled');
      capacityField.value = '1';
      break;
    case '100':
      forOneGuestOption.setAttribute('disabled', 'disabled');
      forTwoGuestOption.setAttribute('disabled', 'disabled');
      forThreeGuestOption.setAttribute('disabled', 'disabled');
      forZeroGuestOption.removeAttribute('disabled');
      capacityField.value = '0';
      break;
  }
});


/**
 * В форме подачи объявления показывается
 * превью аватарки пользователя и фотографии помещения
 * при изменении значений соответствующих полей.
 */

// const avatarField = document.querySelector('#avatar');
// const avatarPreviewImg = document.querySelector('.ad-form-header__preview img');

// avatarField.addEventListener('input', () => {
//   avatarPreviewImg.setAttribute('src', avatarField.value);
// });
