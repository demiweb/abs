import { $DOC, $BODY, $HTML, ACTIVE, NOSCROLL, ASIDE_TRANSITION } from '../constants';

class Aside {
  constructor() {
    this.$btn = $(`.${Aside.classNames.toggle}`);
    this.$menu = $(`.${Aside.classNames.menu}`);
    this.$wrap = $('.main');
  };

  init() {
    this._setAsideOnLoad();
     
    $DOC.on('click', `.${Aside.classNames.toggle}`, this._toggleAside.bind(this));
    $DOC.on('click', (e) => {
      if ($(e.target).is(this.$menu)) {
        this.closeAside();
      };
    });
  };

  closeAside() {
    this.$wrap.removeClass(Aside.classNames.hasAsideOpen);
    $HTML.removeClass(Aside.classNames.hasAsideOpen);
    this.$btn.removeClass(ACTIVE);
    $BODY.removeClass(NOSCROLL);

    setTimeout(() => {
      this.$wrap.removeClass(Aside.classNames.hasAsideOpenMobile);
    }, ASIDE_TRANSITION);
  };

  _toggleAside(e) {
    e.preventDefault();
    const $wrap = $(e.currentTarget).closest('.main');

    $(e.currentTarget).toggleClass(ACTIVE);
    $wrap.toggleClass(Aside.classNames.hasAsideOpen);
    $HTML.toggleClass(Aside.classNames.hasAsideOpen);
    if (window.matchMedia('(max-width: 1199px)').matches) {
      $BODY.toggleClass(NOSCROLL);

      setTimeout(() => {
        $wrap.toggleClass(Aside.classNames.hasAsideOpenMobile);
      }, ASIDE_TRANSITION);
    };
  };

  _setAsideOnLoad() {
    this.$btn.addClass(ACTIVE);
    this.$wrap.addClass(Aside.classNames.hasAsideOpen);
    $HTML.addClass(Aside.classNames.hasAsideOpen);
    if (window.matchMedia('(max-width: 1199px)').matches) {
      this.closeAside();
    };
  };
};

Aside.classNames = {
  toggle: 'js-aside-toggle',
  menu: 'js-aside',
  hasAsideOpen: 'has-aside-open',
  hasAsideOpenMobile: 'has-aside-open-mob'
};

export default function toggleAside() {
  const aside = new Aside();
  aside.init();
};
