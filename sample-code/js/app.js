var open = false;

var showHideElement = document.getElementById('show-hide');

function changeClass(element, className) {
  element.className = className;
}

function toggleModule() {
  console.log('clicked!');

  if (open) {

    changeClass(showHideElement, 'hide');
    open = false;

  } else {

    changeClass(showHideElement, 'show');
    open = true;

  }
}

