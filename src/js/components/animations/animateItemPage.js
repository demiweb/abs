import anime from 'animejs';

export default function animateItemPage() {
  const elements = {
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
      targets: elements.main,
      opacity: [0, 1],
      duration: 500
    });
};
