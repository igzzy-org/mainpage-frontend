import Dom from "./domInteractive.js";

export default function initAsideMenu() {
  const asideButton = new Dom('[data-aside-button]').listElements();
  const aside = new Dom('[data-aside]').element();

  asideButton[0].addEventListener('click', () => {
    aside.classList.toggle('active');
    asideButton.forEach(btn => {
      btn.classList.toggle('active');
    })
  }
  )
}