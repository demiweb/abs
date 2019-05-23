import animateCatalog from './animateCatalog';
import { ASIDE_TRANSITION } from '../../constants';

if (window.matchMedia('(max-width: 1199px)').matches) {
  setTimeout(animateCatalog, ASIDE_TRANSITION);
} else {
  animateCatalog();
};


