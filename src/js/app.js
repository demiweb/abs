import 'promise-polyfill/src/polyfill';

import setTouchClassName from './components/setTouchClassName';
import setLazy from './components/setLazy';
import toggleMenu from './components/toggleMenu';
import showSubMenu from './components/showSubMenu';
import setFullpage from './components/fullpage/setFullpage';
import setMobileHeight from './components/setMobileHeight';
import toggleAside from './components/toggleAside';
import setAccordion from './components/setAccordion';
import './components/animations/setAnimations';
import animateOnScroll from './components/animateOnScroll';

$(function() {
  setTouchClassName();
  setLazy();
  toggleMenu();
  showSubMenu();
  setFullpage();
  setMobileHeight();
  toggleAside();
  setAccordion();
  animateOnScroll();
});
