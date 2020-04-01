/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./web/js/modules/animateGrowthItem.js":
/*!*********************************************!*\
  !*** ./web/js/modules/animateGrowthItem.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initAnimatePortfolioGrowthItem; });\n/* harmony import */ var _domInteractive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domInteractive.js */ \"./web/js/modules/domInteractive.js\");\n\n\nfunction initAnimatePortfolioGrowthItem() {\n  const itemButton = Object(_domInteractive_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('[data-item=\"button\"]').listElements();\n  const itemContainer = Object(_domInteractive_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('[data-item=\"item\"').listElements();\n  const itemContent = Object(_domInteractive_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('[data-item=\"content\"]').listElements();\n\n\n  itemButton.forEach((item, pos) => {\n    item.addEventListener('click', event => {\n      event.preventDefault();\n      item.classList.toggle('active');\n      itemContainer[pos].classList.toggle('active');\n      itemContent[pos].classList.toggle('active');\n    })\n  })\n}\n\n//# sourceURL=webpack:///./web/js/modules/animateGrowthItem.js?");

/***/ }),

/***/ "./web/js/modules/asideMenu.js":
/*!*************************************!*\
  !*** ./web/js/modules/asideMenu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initAsideMenu; });\n/* harmony import */ var _domInteractive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domInteractive.js */ \"./web/js/modules/domInteractive.js\");\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outsideClick.js */ \"./web/js/modules/outsideClick.js\");\n\n\n\nfunction initAsideMenu() {\n  const mobileMenu = new _domInteractive_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-aside=\"menu-mobile\"]').element();\n  const menuSandwich = new _domInteractive_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-aside=\"menu-sandwich\"]').element();\n  const menuSumario = new _domInteractive_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-aside=\"sumario\"]').element();\n  const mainMenu = new _domInteractive_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-aside=\"main-menu\"]').element();\n  const linksExternos = new _domInteractive_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-externo]').listElements();\n\n  menuSandwich.addEventListener('click', () => {\n    mobileMenu.classList.toggle('active');\n    menuSandwich.classList.toggle('active');\n  });\n\n  // mainMenu.addEventListener('click', event => {\n  //   event.preventDefault();\n  //   mainMenu.classList.toggle('active');\n  //   outsideClick(mainMenu, ['click'], () => {\n  //     mainMenu.classList.remove('active');\n  //   })\n  // })\n\n  // menuSumario.addEventListener('click', event => {\n  //   event.preventDefault();\n  //   menuSumario.classList.toggle('active');\n  //   outsideClick(menuSumario, ['click'], () => {\n  //     menuSumario.classList.remove('active');\n  //   })\n  // })\n\n  linksExternos.forEach(link => {\n    link.addEventListener('click', event => {\n      event.preventDefault();\n      window.open(event.target.href);\n    });\n  })\n\n}\n\n//# sourceURL=webpack:///./web/js/modules/asideMenu.js?");

/***/ }),

/***/ "./web/js/modules/domInteractive.js":
/*!******************************************!*\
  !*** ./web/js/modules/domInteractive.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dom; });\nfunction Dom(selector) {\n    this.selector = selector;\n    this.element = () => {\n        return document.querySelector(this.selector);\n    }\n    this.listElements = (selector = this.selector) => {\n        return document.querySelectorAll(selector);\n    }\n    this.active = () => {\n        this.element().classList.add('active');\n    }\n    this.activeAll = () => {\n        this.listElements().forEach((item) => {\n            item.classList.add('active');\n        })\n    }\n    this.disable = () => {\n        this.element().classList.remove('active');\n    }\n    this.disableAll = () => {\n        this.listElements().forEach((item) => {\n            item.classList.remove('active');\n        })\n    }\n}\n\n//# sourceURL=webpack:///./web/js/modules/domInteractive.js?");

/***/ }),

/***/ "./web/js/modules/gallery.js":
/*!***********************************!*\
  !*** ./web/js/modules/gallery.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gallery; });\nclass Gallery {\n  constructor() {\n    this.gallery = document.querySelector('[data-gallery=\"gallery\"]');\n    this.galleryList = document.querySelectorAll('[data-gallery=\"list\"]');\n    this.galleryMain = document.querySelector('[data-gallery=\"main\"]');\n    this.changeImage = this.changeImage.bind(this);\n  }\n\n  changeImage({ currentTarget }) {\n    this.galleryMain.src = currentTarget.src;\n  }\n\n  addChangeEvent() {\n    this.galleryList.forEach((img) => {\n      img.addEventListener('click', this.changeImage);\n      img.addEventListener('mouseover', this.changeImage);\n    })\n  }\n\n  init() {\n    if (this.gallery) {\n      this.addChangeEvent();\n    }\n  }\n}\n\n//# sourceURL=webpack:///./web/js/modules/gallery.js?");

/***/ }),

/***/ "./web/js/modules/hightlight.js":
/*!**************************************!*\
  !*** ./web/js/modules/hightlight.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initHighlight; });\n/* harmony import */ var _gallery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery.js */ \"./web/js/modules/gallery.js\");\n\n\nfunction initHighlight(data, ref) {\n  const main = document.querySelector('[data-highlight=\"main\"]');\n  const container = main.querySelector('[data-highlight=\"container\"]');\n\n  function createContainer() {\n    const [referencia, grupo, subgrupo, especificidade] = ref;\n    const item = data[grupo][subgrupo][especificidade][referencia];\n\n    const div = document.createElement('div');\n\n    const sum = document.createRange().createContextualFragment(`\n      <div class=\"portfolio-highlight__container__button\" data-highlight=\"button\"><div class=\"click-close\"></div><div class=\"click-close\"></div></div>\n      <div class=\"portfolio-highlight__gallery\" data-gallery=\"gallery\">\n        <div class=\"portfolio-highlight__gallery__list\">\n          <img data-gallery=\"list\" src=\"images/produtos/canecas/${item['Referência'].trim()}/${item['Referência'].trim()}-1x.webp\" alt=\"${item.Item}\">\n          <img data-gallery=\"list\" src=\"images/produtos/canecas/${item['Referência'].trim()}/${item['Referência'].trim()}-1x-1.webp\" alt=\"\">\n          <img data-gallery=\"list\" src=\"images/produtos/canecas/${item['Referência'].trim()}/${item['Referência'].trim()}-1x-2.webp\" alt=\"\">\n          <img data-gallery=\"list\" src=\"images/produtos/canecas/${item['Referência'].trim()}/${item['Referência'].trim()}-1x-3.webp\" alt=\"\">\n          <img data-gallery=\"list\" src=\"images/produtos/canecas/${item['Referência'].trim()}/${item['Referência'].trim()}-1x-4.webp\" alt=\"\">\n        </div>\n        <div class=\"portfolio-highlight__gallery__main\">\n          <img data-gallery=\"main\" src=\"images/produtos/canecas/${item['Referência'].trim()}/${item['Referência'].trim()}-1x.webp\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"portfolio-highlight__content\">\n        <header class=\"portfolio-highlight__content__header\">\n          <h2 class=\"portfolio-highlight__content__header__title\">${item.Item}</h2>\n        </header>\n        <p class=\"portfolio-highlight__content__description\">Caneca Comum Branca</p>\n        <p class=\"portfolio-highlight__content__price\">${item['Valor de Venda']}</p>\n      </div>`);\n\n    div.appendChild(sum);\n\n    container.innerHTML = div.innerHTML;\n  }\n\n  createContainer();\n  const button = main.querySelector('[data-highlight=\"button\"]');\n\n  function handleButton(event) {\n    event.preventDefault();\n    if (event.target === main || event.target === button || event.target.classList.contains('click-close')) main.classList.remove('active');\n  }\n\n  main.addEventListener('click', handleButton);\n\n  const gallery = new _gallery_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  gallery.init();\n}\n\n\n//# sourceURL=webpack:///./web/js/modules/hightlight.js?");

/***/ }),

/***/ "./web/js/modules/outsideClick.js":
/*!****************************************!*\
  !*** ./web/js/modules/outsideClick.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return outsideClick; });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = 'data-outside';\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach(userEvent => {\n      html.addEventListener(userEvent, handleOutsideClick);\n    })\n    element.setAttribute(outside, '');\n  }\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach(userEvent => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      })\n      callback();\n    }\n  }\n}\n\n//# sourceURL=webpack:///./web/js/modules/outsideClick.js?");

/***/ }),

/***/ "./web/js/modules/pageSelector.js":
/*!****************************************!*\
  !*** ./web/js/modules/pageSelector.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initPageSelector; });\n/* harmony import */ var _domInteractive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domInteractive */ \"./web/js/modules/domInteractive.js\");\n/* harmony import */ var _asideMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asideMenu */ \"./web/js/modules/asideMenu.js\");\n/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio */ \"./web/js/modules/portfolio.js\");\n/* harmony import */ var _animateGrowthItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animateGrowthItem */ \"./web/js/modules/animateGrowthItem.js\");\n\n\n\n\n\nfunction initPageSelector() {\n  function handleClick(event) {\n    event.preventDefault();\n    loadingAnimation();\n    window.history.pushState(null, null, event.target.href);\n    fetchPage(event.target.href);\n  }\n\n  function loadingAnimation() {\n    const main = document.querySelector('[data-main=\"main\"]');\n    main.innerHTML = '<div class=\"loading\"><div class=\"lds-default\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>';\n  }\n\n  async function fetchPage(url) {\n    const pageResponse = await fetch(url);\n    const pageText = await pageResponse.text();\n    replaceHtml(pageText);\n  }\n\n  function replaceHtml(pageText) {\n    const newHtml = document.createElement('div');\n    newHtml.innerHTML = pageText;\n\n    replaceHtmlTitle(newHtml);\n    replaceHtmlMeta(newHtml);\n    replaceHtmlMain(newHtml);\n    attAsideDisplay();\n\n    addingEventListenerToButtons();\n    callingPortfolioHandler();\n    removerActiveFromMobileMenu();\n  }\n\n  window.addEventListener('popstate', () => {\n    fetchPage(window.location.href);\n  })\n\n  function removerActiveFromMobileMenu() {\n    const mobileMenu = new _domInteractive__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-aside=\"menu-mobile\"]').element();\n    const menuSandwich = new _domInteractive__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-aside=\"menu-sandwich\"]').element();\n\n    if (menuSandwich.classList.contains('active')) menuSandwich.classList.remove('active');\n    if (mobileMenu.classList.contains('active')) mobileMenu.classList.remove('active');\n  }\n\n  function replaceHtmlTitle(newHtml) {\n    const oldTitle = document.querySelector('title');\n    document.title = newHtml.querySelector('title').innerText;\n  }\n\n  function replaceHtmlMeta(newHtml) {\n    const oldMeta = document.querySelectorAll('[data-meta]');\n    const newMeta = newHtml.querySelectorAll('[data-meta');\n    oldMeta.forEach((meta, pos) => {\n      meta.replaceWith(newMeta[pos]);\n    })\n  }\n\n  function replaceHtmlMain(newHtml) {\n    const oldMain = document.querySelector('[data-main=\"main\"]');\n    const newMain = newHtml.querySelector('[data-main=\"main\"]');\n    oldMain.innerHTML = newMain.innerHTML;\n    oldMain.classList = newMain.classList;\n  }\n\n  function attAsideDisplay() {\n    const aside = document.querySelectorAll('aside');\n    const myPage = window.location.pathname.split(\"/\").pop().split('.')[0];\n    aside_config.asideActiveWhoWeAre = document.querySelectorAll('[data-active=\"who-we-are\"]');\n    aside_config.asideActivePortfolio = document.querySelectorAll('[data-active=\"portfolio\"]');\n    aside_config.asideSumarioActive = document.querySelectorAll('[data-sumario=\"menu\"');\n    aside_config.asideMobile = aside[0];\n    aside_config.asideSumario = aside[1];\n    aside_config.asideMenu = aside[2];\n    if (myPage != '') aside_config[myPage]();\n  }\n\n  const aside_config = {\n    index: () => {\n      if (!aside_config.asideMobile.classList.contains('display-none')) aside_config.asideMobile.classList.add('display-none');\n      if (!aside_config.asideSumario.classList.contains('display-none')) aside_config.asideSumario.classList.add('display-none');\n      if (!aside_config.asideMenu.classList.contains('display-none')) aside_config.asideMenu.classList.add('display-none');\n      aside_config.asideActiveWhoWeAre.forEach(item => {\n        if (item.classList.contains('active')) item.classList.remove('active');\n      })\n      aside_config.asideActivePortfolio.forEach(item => {\n        if (item.classList.contains('active')) item.classList.remove('active');\n      })\n      aside_config.asideSumarioActive.forEach(item => {\n        if (!item.classList.contains('display-none')) item.classList.add('display-none');\n      })\n    },\n    portfolio: () => {\n      if (aside_config.asideMobile.classList.contains('display-none')) aside_config.asideMobile.classList.remove('display-none');\n      if (aside_config.asideSumario.classList.contains('display-none')) aside_config.asideSumario.classList.remove('display-none');\n      if (aside_config.asideMenu.classList.contains('display-none')) aside_config.asideMenu.classList.remove('display-none');\n      aside_config.asideActiveWhoWeAre.forEach(item => {\n        if (item.classList.contains('active')) item.classList.remove('active');\n      })\n      aside_config.asideActivePortfolio.forEach(item => {\n        if (!item.classList.contains('active')) item.classList.add('active');\n      })\n      aside_config.asideSumarioActive.forEach(item => {\n        if (item.classList.contains('display-none')) item.classList.remove('display-none');\n      })\n    },\n    \"quem-somos\": () => {\n      if (aside_config.asideMobile.classList.contains('display-none')) aside_config.asideMobile.classList.remove('display-none');\n      if (!aside_config.asideSumario.classList.contains('display-none')) aside_config.asideSumario.classList.add('display-none');\n      if (aside_config.asideMenu.classList.contains('display-none')) aside_config.asideMenu.classList.remove('display-none');\n      aside_config.asideActiveWhoWeAre.forEach(item => {\n        if (!item.classList.contains('active')) item.classList.add('active');\n      })\n      aside_config.asideActivePortfolio.forEach(item => {\n        if (item.classList.contains('active')) item.classList.remove('active');\n      })\n      aside_config.asideSumarioActive.forEach(item => {\n        if (!item.classList.contains('display-none')) item.classList.add('display-none');\n      })\n    }\n  }\n\n  function addingEventListenerToButtons() {\n    const buttons = new _domInteractive__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-link]').listElements();\n    buttons.forEach(button => {\n      button.addEventListener('click', handleClick);\n    })\n\n  }\n\n  function callingPortfolioHandler() {\n    const myPage = window.location.pathname.split(\"/\").pop();\n    if (myPage === \"portfolio.html\") {\n      Object(_portfolio__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n      window.onload = _animateGrowthItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n    }\n  }\n\n  let init = false;\n\n  if (!init) {\n    Object(_asideMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    addingEventListenerToButtons();\n    callingPortfolioHandler();\n    attAsideDisplay();\n    init = true;\n  };\n}\n\n//# sourceURL=webpack:///./web/js/modules/pageSelector.js?");

/***/ }),

/***/ "./web/js/modules/portfolio.js":
/*!*************************************!*\
  !*** ./web/js/modules/portfolio.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initPortfolio; });\n/* harmony import */ var _scrollSuaveLinkInterno_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollSuaveLinkInterno.js */ \"./web/js/modules/scrollSuaveLinkInterno.js\");\n/* harmony import */ var _hightlight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hightlight.js */ \"./web/js/modules/hightlight.js\");\n\n\n\nfunction initPortfolio() {\n  const main = document.querySelector('[data-item=\"main\"]');\n\n  loadingAnimation();\n  fetch('./canecas-json.json')\n    .then(r => r.json())\n    .then(json => {\n      organizeJson(json);\n      console.log(data);\n      main.innerHTML = createElement().innerHTML;\n      createSumario();\n      Object(_scrollSuaveLinkInterno_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      addEventToButtons();\n    })\n\n  function addEventToButtons() {\n    const buttons = document.querySelectorAll('[data-item=\"button\"');\n    buttons.forEach(button => {\n      button.addEventListener('click', handleButton);\n    })\n  }\n\n  function handleButton(event) {\n    event.preventDefault();\n    const highlight = document.querySelector('[data-highlight=\"main\"]');\n    if (!highlight.classList.contains('active')) highlight.classList.add('active');\n    const ref = event.target.dataset.button.split(',');\n    Object(_hightlight_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data, ref);\n  }\n\n  function organizeJson(json) {\n    json.forEach(item => {\n      data[item.Grupo][item.Subgrupo][item.Especificidade][item['Referência'].trim()] = item;\n    })\n  }\n\n  function createSumario() {\n    const sumarioDiv = document.querySelectorAll('[data-sumario=\"menu\"]');\n    const sum = document.createElement('div');\n    sum.appendChild(createSumario_nivelOne());\n    sumarioDiv.forEach(item => {\n      item.innerHTML = sum.innerHTML;\n    })\n    return sumarioDiv;\n  }\n\n  function createSumario_nivelOne() {\n    const ul = document.createElement('ul');\n    sumario.elemens.forEach((item, pos) => {\n      const li = document.createElement('li');\n      li.appendChild(item[0]);\n      li.appendChild(createSumario_nivelTwo(pos));\n      ul.appendChild(li);\n    })\n    return ul;\n  }\n\n  function createSumario_nivelTwo(pos) {\n    const ul = document.createElement('ul');\n    sumario.elemens[pos].forEach((item, pos_two) => {\n      if (pos_two != 0) {\n        const li = document.createElement('li');\n        li.appendChild(item[0]);\n        li.appendChild(createSumario_nivelThree(pos, pos_two));\n        ul.appendChild(li);\n      }\n    })\n    return ul;\n  }\n\n  function createSumario_nivelThree(pos, pos_two) {\n    const ul = document.createElement('ul');\n    sumario.elemens[pos][pos_two].forEach((item, pos_three) => {\n      if (pos_three != 0) {\n        const li = document.createElement('li');\n        li.appendChild(item);\n        ul.appendChild(li);\n      }\n    })\n    return ul;\n  }\n\n  const data = {\n    'Canecas comuns': {\n      'Cilíndricas': {\n        'Cor sólida': {},\n        'Tarja branca': {},\n        'Tarja fluorescente': {},\n        'Interior colorido': {},\n        'Interior e alça colorida': {},\n        'Interior temático': {},\n        'Glitter': {},\n        'Cromada': {},\n        'Metalizada': {},\n        'Alça coração': {},\n        'Alça coração com interior e alça colorida': {},\n        'Dupla com alça borboleta': {},\n        'Dupla com alça coração': {}\n      },\n      'Cônicas': {\n        'Cor sólida': {},\n        'Interior e alça colorida': {}\n      }\n    },\n    'Canecas especiais': {\n      'Mágicas': {\n        'Cor sólida': {},\n        'Interior e alça colorida': {},\n        'Alça coração': {}\n      },\n      'Com colher': {\n        'Interior colorido': {},\n        'Interior e alça colorida': {}\n      },\n      'Objeto na alça': {\n        '': {}\n      },\n      'Emoji': {\n        '': {}\n      },\n      'Tampa e base de silicone': {\n        '': {}\n      },\n      'Lousa com giz': {\n        '': {}\n      },\n      'Xícaras de café': {\n        '': {}\n      }\n    },\n    'Canecas de materiais diferentes': {\n      'Aço inox': {\n        '': {}\n      },\n      'Alumínio': {\n        '': {}\n      },\n      'Vidro': {\n        '': {}\n      }\n    }\n  }\n\n  const sumario = {\n    nivel_one: -1,\n    nivel_two: 0,\n    elemens: []\n  }\n\n  function createElement() {\n    const div = document.createElement('div');\n    for (const group in data) {\n      sumario.nivel_one += 1;\n      sumario.nivel_two = 0;\n      div.appendChild(createTitle(group));\n      for (const subgroup in data[group]) {\n        sumario.nivel_two += 1;\n        div.appendChild(createSubtitle(subgroup));\n        for (const esp in data[group][subgroup]) {\n          if (esp != '') div.appendChild(createEsptitle(esp));\n          const listObj = data[group][subgroup][esp];\n          Object.keys(listObj).forEach(item => {\n            div.appendChild(createItem(listObj[item]))\n          })\n        }\n      }\n    }\n    return div;\n  }\n\n  function createTitle(title) {\n    const sum = document.createRange().createContextualFragment(`<a href=\"${'#' + title.replace(/ /g, \"\")}\" class=\"sumario__nivel-1\" data-sumario=\"item\">${title}</a>`)\n    sumario.elemens.push([sum]);\n    const itemTitle = document.createRange().createContextualFragment(`\n      <header class=\"main__portfolio__header\">\n        <h1 id=\"${title.replace(/ /g, \"\")}\"class=\"main__portfolio__header__title\"> ${title}</h1>\n      </header>\n    `)\n    return itemTitle;\n  }\n\n  function createSubtitle(subtitle) {\n    const sum = document.createRange().createContextualFragment(`<a href=\"${'#' + subtitle.replace(/ /g, \"\") + sumario.nivel_one}\" class=\"sumario__nivel-2\" data-sumario=\"item\">${subtitle}</a>`)\n    sumario.elemens[sumario.nivel_one].push([sum]);\n    const itemSubtitle = document.createRange().createContextualFragment(`\n      <header class=\"main__portfolio__header\">\n        <h2 id=\"${subtitle.replace(/ /g, \"\") + sumario.nivel_one}\" class=\"main__portfolio__header__subtitle\"> ${subtitle}</h2>\n      </header>\n    `)\n    return itemSubtitle;\n  }\n\n  function createEsptitle(esptitle) {\n    const sum = document.createRange().createContextualFragment(`<a href=\"${'#' + esptitle.replace(/ /g, \"\") + sumario.nivel_two}\" class=\"sumario__nivel-3\" data-sumario=\"item\">${esptitle}</a>`)\n    sumario.elemens[sumario.nivel_one][sumario.nivel_two].push(sum);\n    const itemEsptitle = document.createRange().createContextualFragment(`\n      <header class=\"main__portfolio__header\">\n        <h3 id=\"${esptitle.replace(/ /g, \"\") + sumario.nivel_two}\" class=\"main__portfolio__header__esptitle\"> ${esptitle}</h3>\n      </header>\n    `)\n    return itemEsptitle;\n  }\n\n  function createItem(item) {\n    const itemContainer = document.createRange().createContextualFragment(`<section class=\"main__portfolio__item\" data-item=\"item\">\n      <img class=\"main__portfolio__item__img\" src=\"images/produtos/canecas/${item['Referência'].trim()}/${item['Referência'].trim()}-1x.webp\" alt=\"${item['Item']}\">\n      <div class=\"main__portfolio__item__content\" data-item=\"content\">\n        <header class=\"main__portfolio__item__header\">\n          <h2 class=\"main__portfolio__item__header__title\">${item[\"Item\"]}</h2>\n        </header>\n        <p class=\"main__portfolio__item__description\">Caneca Comum Branca</p>\n        <div class=\"main__portfolio__item__last-line\">\n          <p class=\"main__portfolio__item__price\">${item[\"Valor de Venda\"]}</p>\n          <a class=\"main__portfolio__item__button\" data-item-button href=\"\" data-item=\"button\" data-button=\"${item['Referência'].trim()},${item.Grupo},${item.Subgrupo},${item.Especificidade}\">Veja Mais</a>\n        </div>\n      </div>\n    </section>`);\n    return itemContainer;\n  }\n\n  function loadingAnimation() {\n    const main = document.querySelector('[data-item=\"main\"]');\n    main.innerHTML = '<div class=\"loading\"><div class=\"lds-default\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>';\n  }\n}\n\n//# sourceURL=webpack:///./web/js/modules/portfolio.js?");

/***/ }),

/***/ "./web/js/modules/scrollSuaveLinkInterno.js":
/*!**************************************************!*\
  !*** ./web/js/modules/scrollSuaveLinkInterno.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initScrollSuaveLinkInterno; });\nfunction initScrollSuaveLinkInterno() {\n  const links = document.querySelectorAll('[data-sumario=\"item\"]');\n\n  links.forEach(link => {\n    link.addEventListener('click', scrollToDoOnClick)\n  })\n\n  function scrollToDoOnClick(event) {\n    event.preventDefault();\n    closeMenuMobile();\n    const to = getScrollTopByHref(event.target) - 80;\n    scrollToPosition(to);\n  }\n\n  function getScrollTopByHref(element) {\n    const id = element.getAttribute('href');\n    return document.querySelector(id).offsetTop;\n  }\n\n  function scrollToPosition(to) {\n    window.scroll({\n      top: to,\n      behavior: \"smooth\"\n    });\n  }\n\n  function closeMenuMobile() {\n    const menuMobile = document.querySelector('[data-aside=\"menu-mobile\"');\n    const mobileButton = document.querySelector('[data-aside=\"menu-sandwich\"');\n\n    menuMobile.classList.toggle('active');\n    mobileButton.classList.toggle('active');\n  }\n}\n\n//# sourceURL=webpack:///./web/js/modules/scrollSuaveLinkInterno.js?");

/***/ }),

/***/ "./web/js/script.js":
/*!**************************!*\
  !*** ./web/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_pageSelector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pageSelector.js */ \"./web/js/modules/pageSelector.js\");\n// import initAnimateScroll from \"./modules/animateScroll.js\";\n// import initAnimateMenu from \"./modules/animateMenu.js\";\n// import initMobileMenu from \"./modules/mobileMenu.js\";\n\n\n// initAnimateScroll();\n// window.onload = initAnimateMenu;\n// initMobileMenu();\n\nwindow.onload = _modules_pageSelector_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\n//# sourceURL=webpack:///./web/js/script.js?");

/***/ })

/******/ });