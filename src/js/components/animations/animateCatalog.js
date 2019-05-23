import anime from 'animejs';

export default function animateCatalog() {
  const elements = {
    hero: document.querySelector('.hero'),
    title: document.querySelector('.hero__title'),
    breadcrumbs: document.querySelector('.hero__breadcrumbs'),
    main: document.querySelector('.main')
  };

  let allowAnimate = true;

  const getObjectValues = function(obj) {
    var res = [];
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        res.push(obj[i]);
      }
    }
    return res;
  };

  getObjectValues(elements).forEach((el) => {
    if (!el) allowAnimate = false;
  });

  if (!allowAnimate) return;

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
