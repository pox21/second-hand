const searchControl = ({ selectorBtn, selectorForm, classActive, selectorClose, breakpoint }) => {
  const btn = document.querySelector(selectorBtn);
  const form = document.querySelector(selectorForm);
  const close = document.querySelector(selectorClose);

  const acitvateForm = () => {
    form.classList.add(classActive);
    btn.removeEventListener('click', acitvateForm);
    btn.type = 'submit';
  }

  const deacitvateForm = () => {
    form.classList.remove(classActive);
    btn.addEventListener('click', acitvateForm);
    btn.type = 'button';
  }

  if (document.documentElement.clientWidth > breakpoint) {
    btn.addEventListener('click', acitvateForm);
    close.addEventListener('click', deacitvateForm);
  } else {
    btn.type = 'submit';
  }
  
};

export default searchControl;