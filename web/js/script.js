// import initAnimateScroll from "./modules/animateScroll.js";
// import initAnimateMenu from "./modules/animateMenu.js";
// import initMobileMenu from "./modules/mobileMenu.js";
import initAsideMenu from "./modules/asideMenu.js";

// initAnimateScroll();
// window.onload = initAnimateMenu;
// initMobileMenu();

const myPage = window.location.pathname.split("/").pop();
if (myPage != "index.html") initAsideMenu();

