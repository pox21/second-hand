import serviceGoods from "../service/serviceGoods.js";

const createdCard = ({ id, title, image, price, discountPrice }) => {
  const li = document.createElement('li');
  li.classList.add('goods__item');
  li.insertAdjacentHTML('beforeend', `
      <article class="article">
        <img class="article__img" src="${image}" alt="${title}">
        <button class="article__favorit-btn" data-id="${id}">
          <svg width="28" height="24">
            <use xlink:href="#heart" />
          </svg>
        </button>
        <div class="article__control-wrapper">
          <h3 class="article__title">${title}</h3>
          <button class="article__to-cart" data-id="${id}">В корзину</button>
          <p class="article__price">
            ${discountPrice ?  
              `<span class="article__new-price">${discountPrice} ₽</span>
              <span class="article__old-price">${price} ₽</span>
            ` : `<span class="article__new-price">${price} ₽</span>`}
          </p>
          <button class="article__descr-btn" data-id="${id}">Подробнее</button>
        </div>
      </article>
  `)
  return li;
}

const renderCards = (parent) => {
  return (data) => {
    const arr = data.map(createdCard);
    parent.append(...arr);
  }
}

const renderGoods = (query, callback) => {
  const list = document.querySelector('.goods__list');
  list.textContent = '';

  serviceGoods(renderCards(list), query, callback);
}

export default renderGoods;