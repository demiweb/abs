import Select from 'select-custom';

export default function setSelects() {
  const $selects = $('.js-select');

  if(!$selects.length) return;

  $selects.each((i, selectEl) => {
    const name = selectEl.getAttribute('data-type');

    const options = {
      default: {

      }
    };

    const select = new Select(selectEl, options[name]);
    select.init();
  });
};
