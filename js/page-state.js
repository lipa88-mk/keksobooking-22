/**
 *  1.1. Неактивное состояние.
 * */

/**
 * Форма заполнения информации об объявлении .ad-form содержит класс ad-form--disabled;
 */
document.querySelector('.ad-form').classList.add('ad-form--disabled');


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

document.querySelector('.map__filters').classList.add('map__filters--disabled');
// селекты
const mapFormSelects = document.querySelectorAll('.map__filters select');
mapFormSelects.forEach(fieldset => {
  fieldset.setAttribute('disabled', 'disabled');
});
// филдсет с инпутами
document.querySelector('.map__features').setAttribute('disabled', 'disabled');
