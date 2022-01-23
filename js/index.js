import burgerMenu from "./modules/burgerMenu.js";
import searchControl from "./modules/searchControl.js";
import selectControl from "./modules/selectControl.js";
import slider from "./modules/slider.js";
import renderGoods from "./modules/renderGoods.js";
import interceptLink from "./modules/interceptLink.js";

burgerMenu({
  selectorBtn: '.nav__btn',
  selectorMenu: '.nav',
  classActive: 'nav--active',
  selectorClose: '.nav__link, .header__btn'
});

searchControl({
  selectorBtn: '.search__btn',
  selectorForm: '.search',
  classActive: 'search--active',
  selectorClose: '.search__close',
  breakpoint: 760,
});

selectControl({
  selectorBtn: '.footer-nav__subtitle',
  selectorSelect: '.footer-nav',
  classActive: 'footer-nav--active',
  breakpoint: 580,
});

const checkSlider = slider({
  selectParentSlider: '.hero',
  selectorSlider: '.hero__slider',
  selectorPagination: '.hero__slider-pagination',
  bulletClass: 'hero__slider-line',
  bulletActiveClass: 'hero__slider-line--active',
  
});

renderGoods(location.search, () => {
  document.body.style.opacity = 1;
});
interceptLink(checkSlider);

// document.addEventListener('click', e => e.preventDefault());
