import anime from 'animejs';
import PageAnimator from './PageAnimator';

export default function animateNewsPage() {
  const page = document.querySelector('.contacts-page');
  if (!page) return;
  const elements = {
    hero: document.querySelector('.hero'),
    title: document.querySelector('.hero__title')
  };

  const pageAnimator = new PageAnimator(elements);
  pageAnimator.animate = (elements) => {
    const tl = anime.timeline({ easing: 'linear' });

    tl    
      .add({
        targets: elements.hero,
        opacity: [0, 1],
        duration: 500
      })
      .add({
        targets: elements.title,
        translateY: ['-100%', '0%'],
        opacity: [0, 1],
        duration: 500
      });
  };

  pageAnimator.init();
};
