import Rellax from 'rellax';

class TitleParallax {
  constructor(title) {
    this.title = title;
    this.MAX_TRANSLATE = 10;
    this.MIN_TRANSLATE = 0;
    this.OFFSET = 800;
  };

  init() {
    this._setTitle();
    this._animateTitle();
  };

  moveTitle(e) {
    const topOffset = document.querySelector('.header')
      ? document.querySelector('.header').offsetHeight - this.OFFSET : this.OFFSET;
    const viewportOffset = this.title.getBoundingClientRect();
    const percentage = this.MAX_TRANSLATE - ((window.innerHeight - topOffset) / viewportOffset.y);

    if (percentage > this.MIN_TRANSLATE && percentage <= this.MAX_TRANSLATE) {
      this.title.style.transform = `translate(${percentage}% ,0)`;
    } else {
      this.title.style.transform = 'translate(0 ,0)';
      return;
    };    
  };

  animate(entries) {    
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        window.addEventListener('scroll', this.moveTitleBinded);
      } else {
        window.removeEventListener('scroll', this.moveTitleBinded);
      };
    });
  };

  _animateTitle() {
    this.moveTitleBinded = this.moveTitle.bind(this);

    const observer = new IntersectionObserver(this.animate.bind(this));
    observer.observe(this.title);
  };

  _setTitle() {
    this.title.style.transform = `translate(${this.MAX_TRANSLATE}%, 0)`;
  };
};

export default function setParallax() {  
  // rellax paralax init
  const rellax = new Rellax('.js-parallax', {
    speed: -1,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });

  // parallax for titles
  const titles = [].slice.call(document.querySelectorAll('.js-parallax-title'));

  titles.forEach((title) => {
    const titleParallax = new TitleParallax(title);
    titleParallax.init();
  });

  // // parallax for vertical text
  // function animateVerticalText() {
  //   const textBlocks = [].slice.call(document.querySelectorAll('.js-parallax-vertical-text'));
  //   const observer = new IntersectionObserver(animate);
  //   observer.observe(text);
  // }
};
