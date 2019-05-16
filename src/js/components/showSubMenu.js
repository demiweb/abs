import { ACTIVE, FOCUS, $DOC, $WIN } from '../constants';
import { debounce } from 'throttle-debounce';

class SubMenu {
  constructor(btn) {
    this.btn = btn;
    this.$btn = $('.' + btn);
    this.$header = $('.' + btn).closest('.header');
    this.subnav= 'header__subnav';
    this.$subnav = this.$header.find('.' + this.subnav);
  };

  init() {
    if (!this.$subnav.length) return;
    this._toggle();
  };

  show(e) {
    this.$btn.addClass(SubMenu.classNames.IS_HOVERED);
    this.$subnav.addClass(ACTIVE);
    console.log('show');
  };

  hide(e) {
    this.$btn.removeClass(SubMenu.classNames.IS_HOVERED);
    this.$subnav.removeClass(ACTIVE);
  };

  toggle(e) {
    e.preventDefault();
    if (this.$btn.hasClass(FOCUS)) {
      this.$btn.removeClass(FOCUS);
      this.$subnav.removeClass(ACTIVE);
      this.$subnav.slideUp();
    } else {
      this.$btn.addClass(FOCUS);
      this.$subnav.addClass(ACTIVE);
      this.$subnav.slideDown();
    };    
  };

  _toggle() {   

    if (window.matchMedia('(min-width: 1200px)').matches) {
      this.$subnav.css({
        display: ''
      });

      this.showBinded = this.show.bind(this);
      this.hideBinded = this.hide.bind(this);
      $DOC.off('click', '.'+this.btn, this.toggleBinded);

      $DOC.on('mouseenter', '.'+this.btn, this.showBinded);
      $DOC.on('mouseleave', '.'+this.btn, this.hideBinded);

      $DOC.on('mouseenter', '.'+this.subnav, this.showBinded);
      $DOC.on('mouseleave', '.'+this.subnav, this.hideBinded);
    } else {
      this.toggleBinded = this.toggle.bind(this);
      $DOC.off('mouseenter', '.'+this.btn, this.showBinded);
      $DOC.off('mouseleave', '.'+this.btn, this.hideBinded);

      $DOC.off('mouseenter', '.'+this.subnav, this.showBinded);
      $DOC.off('mouseleave', '.'+this.subnav, this.hideBinded);

      $DOC.on('click', '.'+this.btn, this.toggleBinded);
    }; 
  };
};

SubMenu.classNames = {
  IS_HOVERED: 'is-hovered'
};

export default function showSubMenu() {
  function toggleMenu() {
    const submenu = new SubMenu('js-hover');
    submenu.init();
  };
  toggleMenu();

  const toggleMenuDebounced = debounce(66, toggleMenu);

  $WIN.on('resize', toggleMenuDebounced);  
};
