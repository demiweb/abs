import slick from 'slick-carousel';

export default function setSliders() {
  const $sliders = $('.js-slider');

  if (!$sliders.length) return;

  $sliders.each((i, slider) => {
    const name = slider.getAttribute('data-slider');
    console.log(name);
    const $wrap = $(slider).closest('.slider__wrap');
    const $prev = $wrap.find('.js-prev');
    const $next = $wrap.find('.js-next');

    const options = {
      similar: {
        slidesToShow: 5,
        prevArrow: $prev,
        nextArrow: $next
      }
    };

    $(slider).slick(options[name]);
  });

};
