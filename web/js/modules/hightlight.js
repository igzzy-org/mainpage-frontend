export default function initHighlight(data, ref) {
  const main = document.querySelector('[data-highlight="main"]');
  const container = main.querySelector('[data-highlight="container"]');
  createContainer();
  const button = main.querySelector('[data-highlight="button"]');

  main.addEventListener('click', handleButton);

  function handleButton(event) {
    event.preventDefault();
    if (event.target == main || event.target == button || event.target.classList.contains('click-close')) main.classList.remove('active');
  }

  const gallery = new Gallery();
  gallery.init();

  function createContainer() {
    const referencia = ref[0];
    const grupo = ref[1];
    const subgrupo = ref[2];
    const especificidade = ref[3];
    const item = data[grupo][subgrupo][especificidade][referencia];

    const div = document.createElement('div');

    const sum = document.createRange().createContextualFragment(`
      <div class="portfolio-highlight__container__button" data-highlight="button"><div class="click-close"></div><div class="click-close"></div></div>
      <div class="portfolio-highlight__gallery" data-gallery="gallery">
        <div class="portfolio-highlight__gallery__list">
          <img data-gallery="list" src="images/produtos/canecas/${item['Referência'].trim()}-1x.webp" alt="">
          <img data-gallery="list" src="images/produtos/canecas/CAN0002-1x.webp" alt="">
          <img data-gallery="list" src="images/produtos/canecas/CAN0003-1x.webp" alt="">
          <img data-gallery="list" src="images/produtos/canecas/CAN0004-1x.webp" alt="">
          <img data-gallery="list" src="images/produtos/canecas/CAN0005-1x.webp" alt="">
        </div>
        <div class="portfolio-highlight__gallery__main">
          <img data-gallery="main" src="images/produtos/canecas/${item['Referência'].trim()}-1x.webp" alt="">
        </div>
      </div>
      <div class="portfolio-highlight__content">
        <header class="portfolio-highlight__content__header">
          <h2 class="portfolio-highlight__content__header__title">${item['Item']}</h2>
        </header>
        <p class="portfolio-highlight__content__description">Caneca Comum Branca</p>
        <p class="portfolio-highlight__content__price">${item['Valor de Venda']}</p>
      </div>`);

    div.appendChild(sum);

    container.innerHTML = div.innerHTML;
  }
}

class Gallery {
  constructor() {
    this.gallery = document.querySelector('[data-gallery="gallery"]');
    this.galleryList = document.querySelectorAll('[data-gallery="list"]');
    this.galleryMain = document.querySelector('[data-gallery="main"]');
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage({ currentTarget }) {
    this.galleryMain.src = currentTarget.src;
  }

  addChangeEvent() {
    this.galleryList.forEach(img => {
      img.addEventListener('click', this.changeImage);
      img.addEventListener('mouseover', this.changeImage);
    })
  }

  init() {
    if (this.gallery) {
      this.addChangeEvent();
    }
  }
}


