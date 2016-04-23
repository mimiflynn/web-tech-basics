var open = false;
var showHideElement = document.getElementById('showHide');

function changeClass(className, element) {
  element.className = className;
}

function toggleModule() {
  console.log('clicked!');
  if (open) {
    changeClass('hide', showHideElement);
    open = false;
  } else {
    changeClass('show', showHideElement);
    open = true;
  }
}
