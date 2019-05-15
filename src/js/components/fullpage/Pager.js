import Animator from './Animator';
import { ACTIVE } from '../../constants';
import anime from 'animejs';

export default class Pager {
  constructor(wrap) {
    this.$wrap = $(wrap);
    this.$sections = this.$wrap.children();
    this.$pagination = $('.js-fullpage-nav');
    this.activeSection = 0;
    this.nextSection = 0;
    this.delay = 2400;
    this.allowScroll = false;
    this.$nextBtns = this.$sections.find('.js-fullpage-next');
  };

  init() {
    if (!this.$sections.length) return;
    this._initFirstSection();    

    this._createPagination();
    this._paginateOnScroll();
    this._paginateOnClick();
  };

  paginate(e) {
    if (!this.allowScroll) return;
    let direction;

    
    if (e.type === 'wheel') {
      e = e.originalEvent;
      direction = e.deltaY > 0 ? 1 : -1;
      this.nextSection = this.activeSection + direction;           
    };
    if (e.type === 'click') {
      const index = parseInt(e.currentTarget.getAttribute('data-index'));
      if (typeof index !== 'number') return;

      e.preventDefault();
      this.nextSection = index;

      direction = this.nextSection > this.activeSection ? 1 : -1;      
    };

    if (this.nextSection >= this.$sections.length || this.nextSection < 0 || this.nextSection === this.activeSection) return;

    this.allowScroll = false;

    this.$buttons.removeClass(ACTIVE);
    $(this.$buttons[this.nextSection]).addClass(ACTIVE);   

    this.animator = new Animator({
      direction,
      $sections: this.$sections,
      from: this.activeSection,
      to: this.nextSection
    });
  
    this.animator.animate();
  
    this.activeSection = this.nextSection;
    setTimeout(() => {
      this.allowScroll = true;
    }, this.delay);
  };

  _createPagination() {
    if (!this.$pagination.length) return;

    this.$pagination.append('<ul></ul>');
    for (let i = 0; i < this.$sections.length; i++) {
      const $list = this.$pagination.find('ul');
      if (i === 0) {
        $list.append(`<li><a href="#" class="${ACTIVE}" data-index="${i}">${i + 1}</a></li>`);
      } else {
        $list.append(`<li><a href="#" data-index="${i}">${i + 1}</a></li>`);
      };      
    };
    this.$buttons = this.$pagination.find('a');
  };

  _paginateOnScroll() {
    $(window).on('wheel', this.paginate.bind(this));
  };

  _paginateOnClick() {
    if (this.$buttons.length > 0) {
      this.$buttons.on('click', this.paginate.bind(this));
    };
    if (this.$nextBtns.length > 0) {
      this.$nextBtns.on('click', this.paginate.bind(this));
    }
    
    
  };

  _initFirstSection() {
    const section = this.$sections[0];
    const $elseSections = this.$sections.not(section);
    const btn = section.querySelector('.btn');
    const line = section.querySelector('.line-sm');
    const title = section.querySelector('.h2');
    const subttl = section.querySelector('.h2-subttl');
    const scroll = section.querySelector('.scroll-down');
    const copy = section.querySelector('.copy');

    $(section).addClass(ACTIVE);
    $('.out').css({
      backgroundImage: 'none'
    });

    this.tl = anime.timeline({ easing: 'linear' });

    this.tl
      .add({
        targets: title,
        opacity: [0, 1],
        duration: 400,
      })
      .add({
        targets: subttl,
        translateY: ['-100%', '0%'],
        duration: 600,
      })
      .add({
        targets: line,
        translateY: ['-100%', '0%'],
        duration: 600,
      }, '-=500')
      .add({
        targets: btn,
        translateY: ['-100%', '0%'],
        duration: 600,
      }, '-=500')
      .add({
        targets: scroll,
        opacity: [0, 1],
        duration: 600,
      }, '-=300')
      .add({
        targets: copy,
        opacity: [0, 1],
        duration: 600,
      }, '-=300');

    this.tl.finished.then(() => {
      this.allowScroll = true;
    });
  };
};
