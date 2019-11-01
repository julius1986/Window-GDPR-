export default function (text) {
  let message = document.createElement('div');
  message.classList.add('message');
  message.innerHTML = text;
  return message;
}
