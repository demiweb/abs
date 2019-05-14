import { ACTIVE } from '../constants';

export default function showSubMenu() {
  const $btn = $('.js-hover');

  if(!$btn.length) return;

  const $header = $btn.closest('.header');
  const $subnav = $header.find('.header__subnav');

  $btn.on('mouseenter', (e) => {
    $subnav.addClass(ACTIVE);
  });

  $btn.on('mouseleave', (e) => {
    $subnav.removeClass(ACTIVE);
  });

  $subnav.on('mouseenter', (e) => {
    $subnav.addClass(ACTIVE);
  });

  $subnav.on('mouseleave', (e) => {
    $subnav.removeClass(ACTIVE);
  });
};
