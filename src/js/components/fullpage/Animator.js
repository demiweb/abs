import anime  from 'animejs';
import { ACTIVE } from '../../constants';

export default class Animator {
  constructor({ direction, $sections, from, to }) {
    this.direction = direction;
    this.$sections = $sections;
    this.from = from;
    this.to = to;
    this.current = $sections[from];
    this.target = $sections[to];
  };

  getCurrentElements() {
    const elements = {
      btn: this.current.querySelector('.btn'),
      line: this.current.querySelector('.line-sm'),
      title: this.current.querySelector('.h2'),
      subttl: this.current.querySelector('.h2-subttl'),
      scroll: this.current.querySelector('.scroll-down'),
      copy: this.current.querySelector('.copy')
    };
    return elements;
  };

  getTargetElements() {
    const elements = {
      btn: this.target.querySelector('.btn'),
      line: this.target.querySelector('.line-sm'),
      title: this.target.querySelector('.h2'),
      subttl: this.target.querySelector('.h2-subttl'),
      scroll: this.target.querySelector('.scroll-down'),
      copy: this.target.querySelector('.copy')
    };
    return elements;
  };
      
  animateSections() {
    this.tl      
      .add({
        targets: this.getCurrentElements().copy,
        opacity: [1, 0],
        duration: 600,
      })
      .add({
        targets: this.getCurrentElements().scroll,
        opacity: [1, 0],
        duration: 600,
      }, '-=450')
      .add({
        targets: this.getCurrentElements().btn,
        translateY: ['0%', '-100%'],
        duration: 600,
      }, '-=500')
      .add({
        targets: this.getCurrentElements().line,
        translateY: ['0%', '-100%'],
        duration: 600,
      }, '-=500')
      .add({
        targets: this.getCurrentElements().subttl,
        translateY: ['0%', '-100%'],
        duration: 600,
      }, '-=500')
      .add({
        targets: this.getCurrentElements().title,
        opacity: [1, 0],
        duration: 400,
      }, '-=300')

      .add({
        targets: this.current,
        opacity: [1, 0],
        zIndex: [1, 0],
        duration: 500
      })

      .add({
        targets: this.target,
        opacity: [0, 1],
        zIndex: [0, 1],
        duration: 300
      }, '-=500')

      .add({
        targets: this.getTargetElements().title,
        opacity: [0, 1],
        duration: 400,
      })
      .add({
        targets: this.getTargetElements().subttl,
        translateY: ['-100%', '0%'],
        duration: 600,
      }, '-=500')
      .add({
        targets: this.getTargetElements().line,
        translateY: ['-100%', '0%'],
        duration: 600,
      }, '-=500')
      .add({
        targets: this.getTargetElements().btn,
        translateY: ['-100%', '0%'],
        duration: 600,
      }, '-=500')
      .add({
        targets: this.getTargetElements().scroll,
        opacity: [0, 1],
        duration: 600,
      }, '-=450')
      .add({
        targets: this.getTargetElements().copy,
        opacity: [0, 1],
        duration: 600,
      });     
  };

  animate() {
    this.tl = anime.timeline({
      easing: 'linear'
    });

    this.tl.finished.then(() => {
      $(this.current).removeClass(ACTIVE);
      $(this.target).addClass(ACTIVE);
    });

    this.animateSections();
  };
};
