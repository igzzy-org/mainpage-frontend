import Dom from "./domInteractive.js";

export default function initAnimatePortfolioGrowthItem() {
  const itemButton = new Dom('[data-item="button"]').listElements();
  const itemContainer = new Dom('[data-item="item"').listElements();
  const itemContent = new Dom('[data-item="content"]').listElements();

  itemButton.forEach((item, pos) => {
    item.addEventListener('click', event => {
      event.preventDefault();
      item.classList.toggle('active');
      itemContainer[pos].classList.toggle('active');
      itemContent[pos].classList.toggle('active');
    })
  })
}