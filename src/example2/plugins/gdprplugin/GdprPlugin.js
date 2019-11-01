import buttonsGroupInit from './components/buttonsGroup';
import mainWindowInit from './components/mainWindow';
import buttonInit from './components/button';
import messageContainerInit from './components/messageContainer';
import wrapperInit from './components/wrapper';
import mainWindowTitleInit from './components/mainWindowTitle';
export default function(){
  let body = document.querySelector('body');
  let wrapper = wrapperInit();
  let mainWindow = mainWindowInit();
  let mainWindowTitle = mainWindowTitleInit();
  let messageContainer = messageContainerInit();
  let buttonsGroup = buttonsGroupInit();
  let boxGdprButtonAccept = buttonInit('Accept', 'Accept', body, wrapper);
  let boxGdprButtonCancel = buttonInit('Cancel', 'Cancel', body, wrapper);
  boxGdprButtonAccept.style.backgroundColor = '#4b70dd';
  boxGdprButtonAccept.style.color = 'white';
  boxGdprButtonCancel.style.backgroundColor = '#6474e0';
  boxGdprButtonCancel.style.color = 'white';

  wrapper.append(mainWindow);
  mainWindow.append(mainWindowTitle);
  mainWindow.append(messageContainer);
  mainWindow.append(buttonsGroup);
  buttonsGroup.append(boxGdprButtonCancel);
  buttonsGroup.append(boxGdprButtonAccept);
  body.append(wrapper);
}
