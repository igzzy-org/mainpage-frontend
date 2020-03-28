import Dom from "./domInteractive.js";
import initAsideMenu from "./asideMenu.js";
import initPortfolio from "./portfolio.js";
import initAnimateGrowthItem from "./animateGrowthItem.js";


export default function initPageSelector() {
  function handleClick(event) {
    event.preventDefault();
    window.history.pushState(null, null, event.target.href);
    fetchPage(event.target.href);
  }

  async function fetchPage(url) {
    const pageResponse = await fetch(url);
    const pageText = await pageResponse.text();
    replaceHtml(pageText);
  }

  function replaceHtml(pageText) {
    const newHtml = document.createElement('div');
    newHtml.innerHTML = pageText;

    replaceHtmlTitle(newHtml);
    replaceHtmlMeta(newHtml);
    replaceHtmlMain(newHtml);
    attAsideDisplay();

    addingEventListenerToButtons();
    callingPortfolioHandler();
    removerActiveFromMobileMenu();
  }

  window.addEventListener('popstate', () => {
    fetchPage(window.location.href);
  })

  function removerActiveFromMobileMenu() {
    const mobileMenu = new Dom('[data-aside="menu-mobile"]').element();
    const menuSandwich = new Dom('[data-aside="menu-sandwich"]').element();

    if (menuSandwich.classList.contains('active')) menuSandwich.classList.remove('active');
    if (mobileMenu.classList.contains('active')) mobileMenu.classList.remove('active');
  }

  function replaceHtmlTitle(newHtml) {
    const oldTitle = document.querySelector('title');
    document.title = newHtml.querySelector('title').innerText;
  }

  function replaceHtmlMeta(newHtml) {
    const oldMeta = document.querySelectorAll('[data-meta]');
    const newMeta = newHtml.querySelectorAll('[data-meta');
    oldMeta.forEach((meta, pos) => {
      meta.replaceWith(newMeta[pos]);
    })
  }

  function attAsideDisplay() {
    const aside = document.querySelectorAll('aside');
    const myPage = window.location.pathname.split("/").pop().split('.')[0];
    aside_config.asideMobile = aside[0];
    aside_config.asideSumario = aside[1];
    aside_config.asideMenu = aside[2];
    aside_config[myPage]();
  }

  const aside_config = {
    index: () => {
      if (!aside_config.asideMobile.classList.contains('display-none')) aside_config.asideMobile.classList.add('display-none');
      if (!aside_config.asideSumario.classList.contains('display-none')) aside_config.asideSumario.classList.add('display-none');
      if (!aside_config.asideMenu.classList.contains('display-none')) aside_config.asideMenu.classList.add('display-none');
    },
    portfolio: () => {
      if (aside_config.asideMobile.classList.contains('display-none')) aside_config.asideMobile.classList.remove('display-none');
      if (aside_config.asideSumario.classList.contains('display-none')) aside_config.asideSumario.classList.remove('display-none');
      if (aside_config.asideMenu.classList.contains('display-none')) aside_config.asideMenu.classList.remove('display-none');
    },
    "quem-somos": () => {
      if (aside_config.asideMobile.classList.contains('display-none')) aside_config.asideMobile.classList.remove('display-none');
      if (!aside_config.asideSumario.classList.contains('display-none')) aside_config.asideSumario.classList.add('display-none');
      if (aside_config.asideMenu.classList.contains('display-none')) aside_config.asideMenu.classList.remove('display-none');
    }
  }

  function replaceHtmlMain(newHtml) {
    const oldMain = document.querySelector('[data-main="main"]');
    const newMain = newHtml.querySelector('[data-main="main"]');
    oldMain.innerHTML = newMain.innerHTML;
    oldMain.classList = newMain.classList;
  }

  function addingEventListenerToButtons() {
    const buttons = new Dom('[data-link]').listElements();
    buttons.forEach(button => {
      // console.log("Adicionando event Listener");
      button.addEventListener('click', handleClick);
    })
  }

  function callingPortfolioHandler() {
    const myPage = window.location.pathname.split("/").pop();
    if (myPage === "portfolio.html") {
      initPortfolio();
      window.onload = initAnimateGrowthItem;
    }
  }

  let flag = false;

  if (!flag) {
    initAsideMenu();
    addingEventListenerToButtons();
    callingPortfolioHandler();
    attAsideDisplay();
    flag = true
  };


}