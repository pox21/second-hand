import renderGoods from "./renderGoods.js";

const handlerClick = (e, callback) => {
  if (e.target.closest('a')) {
    const href = e.target.getAttribute('href');
    
    if (href[0] === '?') {
      e.preventDefault();
      history.pushState(href.substring(1), href.substring(1), location.pathname + href);
      if(callback) callback();
      renderGoods(href);
    };
    
  }
}

const interceptLink = (callback) => {
  document.body.addEventListener('click', (e) => {
    handlerClick(e, callback);
  });

  window.addEventListener('popstate', e => {
    if(e.state) {
      renderGoods('?' + e.state);
    } else {
      
      renderGoods()
    }
  });
}

export default interceptLink;