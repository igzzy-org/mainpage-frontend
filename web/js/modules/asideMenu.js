import Dom from "./domInteractive.js";
import outsideClick from "./outsideClick.js";

export default function initAsideMenu() {
  const mainMenu = new Dom('[data-aside="main-menu"]').element();
  const mobileMenu = new Dom('[data-aside="menu-mobile"]').element();
  const menuSandwich = new Dom('[data-aside="menu-sandwich"]').element();
  const html = document.documentElement;

  menuSandwich.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuSandwich.classList.toggle('active');
  });

  mainMenu.addEventListener('click', event => {
    event.preventDefault();
    mainMenu.classList.toggle('active');
    outsideClick(mainMenu, ['click'], () => {
      mainMenu.classList.remove('active');
    })
  })
}