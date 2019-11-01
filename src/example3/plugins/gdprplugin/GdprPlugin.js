import {GDPR_TEXT} from './components/constants'
import wrapperInit from './components/wrapper';
import mainWindowInit from './components/mainWindow';
import buttonsGroupInit from './components/buttonsGroup';
import buttonInit from './components/button';
import messageContainerInit from './components/messageContainer';
import messageDivInit from './components/message';
import messageTitleInit from './components/messageTitle';

export default function(){
  let body = document.querySelector('body');
  let wrapperForGdprWindow = wrapperInit();
  let boxGdpr = mainWindowInit();
  let message = messageDivInit(GDPR_TEXT);
  let messageTitle = messageTitleInit("GDPR consent");
  let messageContainer = messageContainerInit(message, messageTitle);
  let buttonsGroup = buttonsGroupInit();
  let buttonAccept = buttonInit('Accept', 'Accept', body, wrapperForGdprWindow, ['btn', 'btn-accept']);
  let buttonCancel = buttonInit('Cancel', 'Cancel', body, wrapperForGdprWindow, ['btn', 'btn-cancel']);
  wrapperForGdprWindow.append(boxGdpr);
  boxGdpr.append(messageContainer);
  boxGdpr.append(buttonsGroup);
  buttonsGroup.append(buttonCancel);
  buttonsGroup.append(buttonAccept);
  body.append(wrapperForGdprWindow);
}
