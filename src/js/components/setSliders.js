import Swiper from 'swiper';
import setLazy from './setLazy';

export default function setSliders() {
  const $sliders = $('.js-slider');

  if (!$sliders.length) return;

  $sliders.each((i, slider) => {
    const name = slider.getAttribute('data-slider');
    const $wrap = $(slider).closest('.slider__wrap');
    const prev = $wrap.find('.js-prev')[0];
    const next = $wrap.find('.js-next')[0];

    const options = {
      similar: {
        slidesPerView: 5,
        loop: true,
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
        breakpoints: {
          576: {
            slidesPerView: 1
          },
          992: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3
          },
          1400: {
            slidesPerView: 4
          }
        },
        on: {
          init: setLazy
        }
      },
      // 'about_assort': {
      //   loop: true,
      //   navigation: {
      //     nextEl: next,
      //     prevEl: prev,
      //   },
      //   // pagination: {
      //   //   el: '.js-progress',
      //   //   type: 'progressbar',
      //   // },
      // }
    };

    const swiper = new Swiper(slider, options[name]);

    
  });

};
