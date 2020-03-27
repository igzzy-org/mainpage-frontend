import Dom from "./domInteractive.js";


export default function initPageSelector() {
  const buttons = new Dom('[data-link]').listElements();

  function handleClick(event) {
    event.preventDefault();
    console.log(event)
    fetchPage(event.target.href);
    window.history.pushState(null, null, event.target.href);
  }

  async function fetchPage(url) {
    const pageResponse = await fetch(url);
    const pageText = await pageResponse.text();
    replaceHtml(pageText);
  }

  function replaceHtml(pageText) {
    const newHtml = document.createElement('div');
    newHtml.innerHTML = pageText;

    const oldMain = document.querySelector('[data-main="main"]');
    const newMain = newHtml.querySelector('[data-main="main"]');
    oldMain.innerHTML = newMain.innerHTML;
    oldMain.classList = newMain.classList;

    const oldAside = document.querySelector('[data-aside="main"]');
    const newAside = newHtml.querySelectorAll('aside');
    newAside.forEach(aside => {
      oldAside.appendChild(aside);
    })

    const oldTitle = document.querySelector('title');
    document.title = newHtml.querySelector('title').innerText;

    const oldMeta = document.querySelectorAll('[data-meta]');
    const newMeta = newHtml.querySelectorAll('[data-meta');
    oldMeta.forEach((meta, pos) => {
      meta.replaceWith(newMeta[pos]);
    })
  }

  window.addEventListener('popstate', () => {
    fetchPage(window.location.href);
  })

  buttons.forEach(button => {
    button.addEventListener('click', handleClick);
  })

  const myPage = window.location.pathname.split("/").pop();

  if (myPage === "index.html") fetchPage('home.html');
}