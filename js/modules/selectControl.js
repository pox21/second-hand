const selectControl = ({ selectorBtn, selectorSelect, classActive, breakpoint }) => {
  const btns = document.querySelectorAll(selectorBtn);
  const selects = document.querySelectorAll(selectorSelect);

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (document.documentElement.clientWidth <= breakpoint) {
        const parentSelect = btn.closest(selectorSelect);
        parentSelect.classList.toggle(classActive);

        selects.forEach(item => {
          if (item !== parentSelect) {
            item.classList.remove(classActive);
          }
        });
      }
    })
  });
}

export default selectControl;