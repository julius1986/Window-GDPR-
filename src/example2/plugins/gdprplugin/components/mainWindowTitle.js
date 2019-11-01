export default function () {
  let mainWindowTitle = document.createElement('div');
  mainWindowTitle.innerHTML = `<h1>GDPR Title</h1>`;
  mainWindowTitle.style= `
  width: 100%;
  text-align: center;
  border-bottom: 1px solid black;
  background-color: #226ad3;
  color:white;
  `;
  return mainWindowTitle;
}
