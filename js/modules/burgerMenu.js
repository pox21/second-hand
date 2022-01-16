const burgerMenu = ({ selectorBtn, selectorMenu, classActive, selectorClose }) => {
  const btn = document.querySelector(selectorBtn);
  const menu = document.querySelector(selectorMenu);

  btn.addEventListener('click', () => {
    menu.classList.toggle(classActive)
  });

  menu.addEventListener('click', ({ target }) => {
    if(target.closest(selectorClose)) {
      menu.classList.remove(classActive);
    }
  });

};

export default burgerMenu;