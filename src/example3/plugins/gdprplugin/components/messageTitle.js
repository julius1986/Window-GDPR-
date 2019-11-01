export default function (titleText) {
  let messageTitle = document.createElement('div');
  messageTitle.innerHTML = `<h1>${titleText}</h1>`;
  messageTitle.classList.add('message-title');
  return messageTitle;
}
