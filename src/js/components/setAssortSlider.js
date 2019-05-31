import Swiper from 'swiper';
import getObjectValues from'../lib/getObjectValues';
import anime from 'animejs';
import setLazy from './setLazy';

class AssortSlider {
  constructor(slider) {
    this.slider = slider;
    this.currentTransitionSpeed = 0;
    this.tl = anime.timeline({ easing: 'linear' });
    this.init();
  };

  get prev() {
    return this.slider.parentNode.querySelector('.js-prev');
  };

  get next() {
    return this.slider.parentNode.querySelector('.js-next');
  };

  animateSlide(slide) {
    // this.tl
    //   .add({
    //     targets: sli
    //   })
  };



  setAnimation() {
    const slides = [].slice.call(this.swiper.$el[0].querySelectorAll('.swiper-slide'));
    const previousSlide = slides[this.swiper.previousIndex];
    const activeSlide = slides[this.swiper.activeIndex];



    this.tl
      .add({
        targets: previousSlide,
        duration: 500,
        opacity: [1, 0],
        translateY: [0, -30]
      })
      .add({
        targets: activeSlide,
        duration: 500,
        opacity: [0, 1],
        translateY: [-30, 0]
      }, 1);

    // this.animateSlide(previousSlide);
    // this.animateSlide(activeSlide);
  };

  init() {
    const that = this;

    this.swiper = new Swiper(this.slider, {
      // -----unrelated settings start -----
      // loop: true,
      navigation: {        
        nextEl: this.next,
        prevEl: this.prev
      },
      // // -----unrelated settings end -----
      speed: 1000,
      watchSlidesProgress: true,
      virtualTranslate: true,
      effect: 'myCustomTransition',
      on: {
        init: setLazy,
        setTranslate() {
          const swiper = this;
          const slides = [].slice.call(swiper.$el[0].querySelectorAll('.swiper-slide'));
          slides.map((slide, index) => {
            const offset = slide.swiperSlideOffset;
            let x = -offset;
            if (!swiper.params.virtualTranslate) x -= swiper.translate;
            let y = 0;
            if (!swiper.isHorizontal()) {
              y = x;
              x = 0;
            }
            anime.set(slide, {
              translateY: y,
              translateX: x,
              opacity: 0
            });
          });
          
        },
        
        slideChange: () => {
          if (this.swiper.params.effect !== 'myCustomTransition') return;
          this.setAnimation();
          
        }
      }
    });
  };
};

export default function setAssortSlider() {
  const slider = document.querySelector('.js-slider-assort');

  if (!slider) return;

  const assortslider = new AssortSlider(slider);
}
