import Dom from "./domInteractive.js";

export default function initAsideMenu() {
  const asideButton = new Dom('[data-aside-button]').element();
  const aside = new Dom('[data-aside]').element();

  asideButton.addEventListener('click', () => {
    aside.classList.toggle('active');
    asideButton.classList.toggle('active');
  }
  )
}