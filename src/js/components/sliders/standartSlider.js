import Slider from './Slider';
import anime from 'animejs';
import setLazy from '../setLazy';

export default function animateStandartSlider(slider) {
  const mySlider = new Slider(slider);

  mySlider.GETTERS = () => {
    return {
      prev: mySlider.wrap.querySelector('.js-prev'),
      next: mySlider.wrap.querySelector('.js-next'),
      progres: mySlider.wrap.querySelector('.js-progress'),
      counterSm: mySlider.wrap.querySelector('.js-counter-sm')
    };
  };

  mySlider.setAnimation = () => {
    const slides = [].slice.call(mySlider.swiper.$el[0].querySelectorAll('.swiper-slide'));
    const previousSlide = slides[mySlider.swiper.previousIndex];
    const activeSlide = slides[mySlider.swiper.activeIndex];

    
    mySlider.setCounterSm({
      activeSlide: mySlider.swiper.activeIndex,
      slidesAmount: mySlider.swiper.slides.length,
      htmlBlock: mySlider.GETTERS().counterSm
    });
    
    // previous slide
    anime({
      easing: 'linear',
      targets: previousSlide,
      duration: 500,
      opacity: [1, 0],
      zIndex: [5, 0]
    });
    // previous slide

    // active slide
    anime({
      easing: 'linear',
      targets: activeSlide,
      duration: 500,
      opacity: [0, 1],
      zIndex: [0, 5]
    });
    // active slide
  };

  mySlider.swiperOptions = {
    loop: false,
    navigation: {
      nextEl: mySlider.GETTERS().next,
      prevEl: mySlider.GETTERS().prev
    },
    pagination: {
      el: mySlider.GETTERS().progres,
      type: 'progressbar',
    },
    touchRatio: 0,
    speed: 1000,
    watchSlidesProgress: true,
    virtualTranslate: true,
    effect: 'myCustomTransition',
    on: {
      init() {
        setLazy();
        const swiper = this;
        const slides = [].slice.call(swiper.$el[0].querySelectorAll('.swiper-slide'));
        const activeSlide = slides[swiper.activeIndex];

        activeSlide.style.zIndex = 5;
        activeSlide.style.opacity = 1;          
      },
        
      slideChange: () => {
        if (mySlider.swiper.params.effect !== 'myCustomTransition') return;
        mySlider.setAnimation();          
      }
    }
  };

  mySlider.init();
};
