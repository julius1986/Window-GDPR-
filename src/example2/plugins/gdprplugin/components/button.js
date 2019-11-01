  export default function (buttonText, result, bodyEl, containerEl) {
  let button = document.createElement('div');
  button.style = `
  flex:1;
  overflow:hidden;
  justify-content: center;
  align-items: center;
  display:flex;
  margin:1px;
  `;
  button.innerHTML = "<div>"+buttonText+"</div>";
  button.addEventListener('click', function(e) {
    localStorage.setItem('gdprAnswer', result);
    e.stopPropagation();
    bodyEl.removeChild(containerEl);
  });
  return button;

  }
