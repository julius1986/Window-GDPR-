  export default function (buttonText, result, bodyEl, containerEl, listOfClasses) {
  let button = document.createElement('div');
  listOfClasses.forEach(function (el) {
    button.classList.add(el);
  });
  button.innerHTML = buttonText; // ${buttonText}
  button.addEventListener('click', function(e) {
    localStorage.setItem('gdprAnswer', result);
    e.stopPropagation();
    bodyEl.removeChild(containerEl);
  });
  return button;

  }
