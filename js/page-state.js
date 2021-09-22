/**
 *  1.1. Неактивное состояние.
 * */

/**
 * Форма заполнения информации об объявлении .ad-form содержит класс ad-form--disabled;
 */
const adForm = document.querySelector('.ad-form');
adForm.classList.add('ad-form--disabled');


/**
* Все интерактивные элементы формы .ad-form должны быть заблокированы с помощью атрибута disabled,
* добавленного на них или на их родительские блоки fieldset;
*/
const adFormFieldsets = document.querySelectorAll('.ad-form fieldset');
adFormFieldsets.forEach(fieldset => {
  fieldset.setAttribute('disabled', 'disabled');
});


/**
* Форма с фильтрами .map__filters заблокирована так же, как и форма .ad-form —
* на форму добавлен специальный класс, а на её интерактивные элементы атрибуты disabled;
*/

const mapFilters = document.querySelector('.map__filters');
mapFilters.classList.add('map__filters--disabled');
// селекты
const mapFormSelects = document.querySelectorAll('.map__filters select');
mapFormSelects.forEach(fieldset => {
  fieldset.setAttribute('disabled', 'disabled');
});
// филдсет с инпутами
const mapFeatures = document.querySelector('.map__features');
mapFeatures.setAttribute('disabled', 'disabled');


/**
 *  1.2. Активное состояние.
 * */

const activePageState = () => {
  // форма
  adForm.classList.remove('ad-form--disabled');
  adFormFieldsets.forEach(fieldset => {
    fieldset.removeAttribute('disabled');
  });
  // фильтры
  mapFilters.classList.remove('map__filters--disabled');
  mapFormSelects.forEach(fieldset => {
    fieldset.removeAttribute('disabled');
  });
  mapFeatures.removeAttribute('disabled');
};

export {activePageState};
