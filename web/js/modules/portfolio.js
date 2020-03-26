import readJSON from "./readJSON.js";

export default function initPortfolio() {
  function lidandoComJSON(content) {
    content.forEach(member => {
      console.log(member);
    })
  }

  function readJSON(documentName) {
    const request = new XMLHttpRequest();
    request.open("GET", documentName, true);
    request.responseType = 'json';
    request.send();
    request.onload = () => {
      const content = request.response;
      lidandoComJSON(content);
    }
  }

  readJSON("canecas-json.json");
}