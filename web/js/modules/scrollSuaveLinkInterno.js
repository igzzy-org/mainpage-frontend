export default function initScrollSuaveLinkInterno() {
  const links = document.querySelectorAll('[data-sumario="item"]');

  links.forEach(link => {
    link.addEventListener('click', scrollToDoOnClick)
  })

  function scrollToDoOnClick(event) {
    event.preventDefault();
    closeMenuMobile();
    const to = getScrollTopByHref(event.target) - 80;
    scrollToPosition(to);
  }

  function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
  }

  function scrollToPosition(to) {
    window.scroll({
      top: to,
      behavior: "smooth"
    });
  }

  function closeMenuMobile() {
    const menuMobile = document.querySelector('[data-aside="menu-mobile"');
    const mobileButton = document.querySelector('[data-aside="menu-sandwich"');

    menuMobile.classList.toggle('active');
    mobileButton.classList.toggle('active');
  }
}