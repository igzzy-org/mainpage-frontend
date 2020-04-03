import AsideMenu from "./asideMenu";
import Portfolio from "./portfolio";
import ReplaceHTML from "./replaceHTML";
import loadingAnimation from "./loading_animation";
import addEventListenerToButtons from "./buttons";
import Buttons from "./buttons";

export default function initPageSelector() {
  function callingPortfolioHandler() {
    const myPage = window.location.pathname.split("/").pop();
    if (myPage === "portfolio.html") {
      const portfolio = new Portfolio();
      portfolio.createPortfolio();
    }
  }

  async function fetchPage(url) {
    const pageResponse = await fetch(url);
    const pageHtml = await pageResponse.text();
    const replaceHTML = new ReplaceHTML(pageHtml);
    replaceHTML.init();
    asideMenu.attAsideDisplay();

    callingPortfolioHandler();
  }

  function handleClick(event) {
    event.preventDefault();
    loadingAnimation();
    window.history.pushState(null, null, event.target.href);
    fetchPage(event.target.href);
  }

  window.addEventListener('popstate', () => {
    fetchPage(window.location.href);
  })

  const asideMenu = new AsideMenu();
  asideMenu.init();
  const buttons = new Buttons('[data-link]');
  buttons.addEventListenerToButtons((button) => {
    button.addEventListener('click', handleClick);
  });
  callingPortfolioHandler();
}