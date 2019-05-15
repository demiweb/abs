import setTouchClassName from './components/setTouchClassName';
import setLazy from './components/setLazy';
import toggleMenu from './components/toggleMenu';
import animateHome from './components/animateHome';
import showSubMenu from './components/showSubMenu';
import setFullpage from './components/fullpage/setFullpage';

$(function() {
  setTouchClassName();
  setLazy();
  toggleMenu();
  showSubMenu();
  setFullpage();
  // animateHome();
});
