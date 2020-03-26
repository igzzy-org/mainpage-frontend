export default function initPortfolio() {
  const main = document.querySelector('[data-item="main"]');

  fetch('./canecas-json.json')
    .then(r => r.json())
    .then(json => {
      json.forEach(item => {
        main.appendChild(createContainer(item));
      })
    })

  function createContainer(item) {
    const container = document.createRange().createContextualFragment(`<section class="main__portfolio__item" data-item="item">
    <img class="main__portfolio__item__img" src="images/produtos/canecas/${item['Referência'].trim()}.png" alt="">
    <div class="main__portfolio__item__content" data-item="content">
      <header class="main__portfolio__item__header">
        <h2 class="main__portfolio__item__header__title">${item["Item"]}</h2>
      </header>
      <p class="main__portfolio__item__description">Caneca Comum Branca</p>
      <div class="main__portfolio__item__last-line">
        <p class="main__portfolio__item__price">${item["Valor médio do item"]}</p>
        <a class="main__portfolio__item__button" href="" data-item="button">Veja Mais</a>
      </div>
    </div>
  </section>`);
    return container;
  }
}