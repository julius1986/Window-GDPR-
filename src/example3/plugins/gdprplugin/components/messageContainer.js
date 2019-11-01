export default function(messageDiv, messageTitleDiv){
let messageContainer = document.createElement('div');
messageContainer.classList.add('message-container');
messageContainer.append(messageTitleDiv);
messageContainer.append(messageDiv);
return messageContainer;
}
