import anime from 'animejs';

export default function animateHome() {
  const lines = [].slice.call(document.querySelectorAll('.line'));
  const letters = [].slice.call(document.querySelectorAll('.letters span'));

  const tl = anime.timeline({
    easing: 'linear'
  });

  tl
    .add({
      targets: lines,
      translateY: ['-100%', '0%'],
      duration: 1000,
      delay: anime.stagger(300)
    })
    .add({
      targets: letters,
      translateX: ['-100%', '-40%'],
      opacity: [0, 1],
      duration: 500
    });
  // .add({
  //   targets: descr,
  //   opacity: [0, 1],
  //   duration: 500
  // })
  // .add({
  //   targets: block,
  //   opacity: [0, 1],
  //   translateY: [-30, 0],
  //   duration: 500
  // })
  // .add({
  //   targets: scroll,      
  //   opacity: [0, 1],
  //   translateY: [-30, 0],
  //   duration: 500
  // })
  // .add({
  //   targets: copy,      
  //   opacity: [0, 1],
  //   translateX: [30, 0],
  //   duration: 500
  // });
};
