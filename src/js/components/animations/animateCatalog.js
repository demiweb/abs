import anime from 'animejs';
import PageAnimator from './PageAnimator';

export default function animateCatalog() {
  const page = document.querySelector('.catalog-page');
  if (!page) return;

  const elements = {
    hero: document.querySelector('.hero'),
    title: document.querySelector('.hero__title'),
    breadcrumbs: document.querySelector('.hero__breadcrumbs'),
    main: document.querySelector('.main')
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
      })
      .add({
        targets: elements.breadcrumbs,
        translateY: ['-100%', '0%'],
        opacity: [0, 1],
        duration: 500
      })
      .add({
        targets: elements.main,
        opacity: [0, 1],
        duration: 500
      }, '-=1500');
  };
  pageAnimator.init();
};
