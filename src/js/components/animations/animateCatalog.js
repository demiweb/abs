import anime from 'animejs';

export default function animateCatalog() {
  const hero = document.querySelector('.hero');
  const title = document.querySelector('.hero__title');
  const breadcrumbs = document.querySelector('.hero__breadcrumbs');
  const main = document.querySelector('.main');

  if(!title) return;
  if(!breadcrumbs) return;
  if(!hero) return;
  if(!main) return;

  const tl = anime.timeline({ easing: 'linear' });

  tl
    .add({
      targets: hero,
      opacity: [0, 1],
      duration: 500
    })
    .add({
      targets: title,
      translateY: ['-100%', '0%'],
      opacity: [0, 1],
      duration: 500
    })
    .add({
      targets: breadcrumbs,
      translateY: ['-100%', '0%'],
      opacity: [0, 1],
      duration: 500
    })
    .add({
      targets: main,
      opacity: [0, 1],
      duration: 500
    }, '-=1500');
};
