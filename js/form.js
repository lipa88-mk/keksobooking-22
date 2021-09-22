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
 * В форме подачи объявления показывается
 * превью аватарки пользователя и фотографии помещения
 * при изменении значений соответствующих полей.
 */

// const avatarField = document.querySelector('#avatar');
// const avatarPreviewImg = document.querySelector('.ad-form-header__preview img');

// avatarField.addEventListener('input', () => {
//   avatarPreviewImg.setAttribute('src', avatarField.value);
// });
