import Swiper from './swiper-bundle.esm.browser.min.js';

const slider = ({ selectorSlider, selectorPagination: el, bulletClass, bulletActiveClass, selectParentSlider }) => {
  const swiper = new Swiper(selectorSlider, {
    init: false,
    autoplay: true,
    loop: true,
    effect: 'fade',
    coverflowEffect: {
      rotate: 50,
    },
    pagination: {
      el,
      type: 'bullets',
      bulletClass,
      bulletActiveClass,
      clickable: true
    },
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });
        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        })
      }
    }
  });

  const checkSlider = () => {
    const href = location.href;
    if (href.includes('?')) {
      swiper.disable();
      document.querySelector(selectParentSlider)?.remove();
    } else {
      swiper.init()
    }
  }
  checkSlider();
  return checkSlider;
}

export default slider;