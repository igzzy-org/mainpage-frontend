export default function addEventListenerToButtons(selector, callback) {
  if (selector != undefined) {
    const buttons = document.querySelectorAll(selector);
    buttons.forEach((button) => {
      callback(button);
    })
  }
}