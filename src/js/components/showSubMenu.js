import { ACTIVE, $DOC } from '../constants';
import isTouch from '../lib/detectTouch';

class SubMenu {
  constructor(btn) {
    this.btn = btn;
    this.$header = $('.' + btn).closest('.header');
    this.subnav= 'header__subnav';
    this.$subnav = this.$header.find('.' + this.subnav);
  };

  init() {
    if (!this.$subnav.length) return;
    this._toggle();
  };

  show(e) {
    this.$subnav.addClass(ACTIVE);
  };

  hide(e) {
    this.$subnav.removeClass(ACTIVE);
  };

  toggle(e) {
    e.preventDefault();
    this.$subnav.toggleClass(ACTIVE);
    this.$subnav.slideToggle();
  };

  _toggle() {
    if (!isTouch()) {
      $DOC.on('mouseenter', '.'+this.btn, this.show.bind(this));
      $DOC.on('mouseleave', '.'+this.btn, this.hide.bind(this));

      $DOC.on('mouseenter', '.'+this.subnav, this.show.bind(this));
      $DOC.on('mouseleave', '.'+this.subnav, this.hide.bind(this));
    } else {
      $DOC.on('click', '.'+this.btn, this.toggle.bind(this));
    }; 
  };
};

export default function showSubMenu() {
  const submenu = new SubMenu('js-hover');
  submenu.init();
};
