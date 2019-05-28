import slick from 'slick-carousel';
import anime from 'animejs';

export default function setSliders() {
  const $sliders = $('.js-slider');

  if (!$sliders.length) return;

  $sliders.each((i, slider) => {
    const name = slider.getAttribute('data-slider');
    const $wrap = $(slider).closest('.slider__wrap');
    const $prev = $wrap.find('.js-prev');
    const $next = $wrap.find('.js-next');

    const options = {
      similar: {
        slidesToShow: 5,
        prevArrow: $prev,
        nextArrow: $next,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      },
      'about_assort': {
        slidesToShow: 1,
        prevArrow: $prev,
        nextArrow: $next,
        fade: true,
        speed: 500
      }
    };

    $(slider).slick(options[name]);

    if (name === 'about_assort') {
      $(slider).on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        const currenContent = slick.$slides[currentSlide].querySelector('.assort-slide__content');
        const nextContent = slick.$slides[nextSlide].querySelector('.assort-slide__content');

        

      });
    }
  });

};
