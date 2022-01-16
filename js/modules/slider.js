import Swiper from './swiper-bundle.esm.browser.min.js';

const slider = ({ selectorSlider, selectorPagination: el, bulletClass, bulletActiveClass }) => {
  new Swiper(selectorSlider, {
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
}

export default slider;