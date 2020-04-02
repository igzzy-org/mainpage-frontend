import Dom from "./domInteractive";
import initAsideMenu from "./asideMenu";
import initPortfolio from "./portfolio";
import initAnimateGrowthItem from "./animateGrowthItem";
import ReplaceHtml from "./replaceHtml";

export default function initPageSelector() {
  function handleClick(event) {
    event.preventDefault();
    loadingAnimation();
    window.history.pushState(null, null, event.target.href);
    fetchPage(event.target.href);
  }

  function loadingAnimation() {
    const main = document.querySelector('[data-main="main"]');
    main.innerHTML = '<div class="loading"><div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>';
  }

  async function fetchPage(url) {
    const pageResponse = await fetch(url);
    const pageHtml = await pageResponse.text();
    const replaceHtml = new ReplaceHtml(pageHtml);
    replaceHtml.init();
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

  function attAsideDisplay() {
    const aside = document.querySelectorAll('aside');
    const myPage = window.location.pathname.split("/").pop().split('.')[0];
    aside_config.asideActiveWhoWeAre = document.querySelectorAll('[data-active="who-we-are"]');
    aside_config.asideActivePortfolio = document.querySelectorAll('[data-active="portfolio"]');
    aside_config.asideSumarioActive = document.querySelectorAll('[data-sumario="menu"');
    aside_config.asideMobile = aside[0];
    aside_config.asideSumario = aside[1];
    aside_config.asideMenu = aside[2];
    if (myPage != '') aside_config[myPage]();
  }

  const aside_config = {
    index: () => {
      if (!aside_config.asideMobile.classList.contains('display-none')) aside_config.asideMobile.classList.add('display-none');
      if (!aside_config.asideSumario.classList.contains('display-none')) aside_config.asideSumario.classList.add('display-none');
      if (!aside_config.asideMenu.classList.contains('display-none')) aside_config.asideMenu.classList.add('display-none');
      aside_config.asideActiveWhoWeAre.forEach(item => {
        if (item.classList.contains('active')) item.classList.remove('active');
      })
      aside_config.asideActivePortfolio.forEach(item => {
        if (item.classList.contains('active')) item.classList.remove('active');
      })
      aside_config.asideSumarioActive.forEach(item => {
        if (!item.classList.contains('display-none')) item.classList.add('display-none');
      })
    },
    portfolio: () => {
      if (aside_config.asideMobile.classList.contains('display-none')) aside_config.asideMobile.classList.remove('display-none');
      if (aside_config.asideSumario.classList.contains('display-none')) aside_config.asideSumario.classList.remove('display-none');
      if (aside_config.asideMenu.classList.contains('display-none')) aside_config.asideMenu.classList.remove('display-none');
      aside_config.asideActiveWhoWeAre.forEach(item => {
        if (item.classList.contains('active')) item.classList.remove('active');
      })
      aside_config.asideActivePortfolio.forEach(item => {
        if (!item.classList.contains('active')) item.classList.add('active');
      })
      aside_config.asideSumarioActive.forEach(item => {
        if (item.classList.contains('display-none')) item.classList.remove('display-none');
      })
    },
    "quem-somos": () => {
      if (aside_config.asideMobile.classList.contains('display-none')) aside_config.asideMobile.classList.remove('display-none');
      if (!aside_config.asideSumario.classList.contains('display-none')) aside_config.asideSumario.classList.add('display-none');
      if (aside_config.asideMenu.classList.contains('display-none')) aside_config.asideMenu.classList.remove('display-none');
      aside_config.asideActiveWhoWeAre.forEach(item => {
        if (!item.classList.contains('active')) item.classList.add('active');
      })
      aside_config.asideActivePortfolio.forEach(item => {
        if (item.classList.contains('active')) item.classList.remove('active');
      })
      aside_config.asideSumarioActive.forEach(item => {
        if (!item.classList.contains('display-none')) item.classList.add('display-none');
      })
    }
  }

  function addingEventListenerToButtons() {
    const buttons = new Dom('[data-link]').listElements();
    buttons.forEach(button => {
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

  let init = false;

  if (!init) {
    initAsideMenu();
    addingEventListenerToButtons();
    callingPortfolioHandler();
    attAsideDisplay();
    init = true;
  };
}