import Swiper from 'swiper';

export default class Slider {
  constructor(slider) {
    this.slider = slider;
    this.wrap = slider.parentNode;
  };

  makeSlideNumber(nmb) {
    nmb = nmb + 1;
    let str = nmb.toString();
    if (str.length === 1) {
      str = `0${str}`;
    };
    return str;
  };

  setCounter({ activeSlide, htmlBlock }) {
    htmlBlock.innerText = this.makeSlideNumber(activeSlide);
  };

  setCounterSm({ activeSlide, slidesAmount, htmlBlock }) {
    const current = htmlBlock.querySelector('.slider-counter-sm__current');
    const all = htmlBlock.querySelector('.slider-counter-sm__all');

    current.innerText = this.makeSlideNumber(activeSlide);

    let slidesAmountDecr = slidesAmount - 1;
    all.innerText = this.makeSlideNumber(slidesAmountDecr);
  };

  init() {
    this.swiper = new Swiper(this.slider, this.swiperOptions);
  };
};
