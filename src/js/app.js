import 'promise-polyfill/src/polyfill';
import 'intersection-observer';

import setTouchClassName from './components/setTouchClassName';
import setLazy from './components/setLazy';
import toggleMenu from './components/toggleMenu';
import showSubMenu from './components/showSubMenu';
import setFullpage from './components/fullpage/setFullpage';
import setMobileHeight from './components/setMobileHeight';
import toggleAside from './components/toggleAside';
import setAccordion from './components/setAccordion';
import setAnimations from './components/animations/setAnimations';
import animateOnScroll from './components/animateOnScroll';
import setMainColor from './components/setMainColor';
import setSliders from './components/setSliders';
import setSelects from './components/setSelects';
import setAnimatedSliders from './components/sliders/setAnimatedSliders';
import setParallax from './components/setParallax';
import setGallery from './components/setGallery';

$(function() {
  setTouchClassName();
  setLazy();
  toggleMenu();
  showSubMenu();
  setFullpage();
  setMobileHeight();
  toggleAside();
  setAccordion();
  setAnimations();
  animateOnScroll();
  setMainColor();
  setSliders();
  setSelects();
  setAnimatedSliders();
  setParallax();
  setGallery();
});
