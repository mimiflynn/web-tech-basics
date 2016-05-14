var open = false;

var showHideElement = document.getElementById('show-hide');

var toggleButton = document.getElementById(('toggle-button');

function changeClass(element, className) {
  element.className = className;
}

function changeText(element, text) {
  element.textContent = text;
}

function betterToggleModule() {

  if (open) {

    changeClass(showHideElement, 'hide');
    changeText(toggleButton, 'Show More');
    open = false;

  } else {

    changeClass(showHideElement, 'show');
    changeText(toggleButton, 'Show Less');
    open = false;

  }
}
