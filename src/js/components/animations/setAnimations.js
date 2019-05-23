import animateCatalog from './animateCatalog';
import animateItemPage from './animateItemPage';
import { ASIDE_TRANSITION } from '../../constants';

function setAnimation(func) {
  if (window.matchMedia('(max-width: 1199px)').matches) {
    setTimeout(func, ASIDE_TRANSITION);
  } else {
    func();
  };
};

setAnimation(animateCatalog);
setAnimation(animateItemPage);
