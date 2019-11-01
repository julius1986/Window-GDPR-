(function() {
  /*constant, millesec in one day*/
  const TWENTY_FOUR_HOURS_IN_MILLESECONDS = 24 * 60 * 60 * 1000;
  /*check in local storage "Answer" and "Left time"*/
  if (localStorage.getItem('gdprDate') && localStorage.getItem('gdprAnswer')) {
    let timeLeft = Date.now() - Number(localStorage.getItem('gdprDate'));
    if (timeLeft < TWENTY_FOUR_HOURS_IN_MILLESECONDS) {
      return;
    }
    localStorage.removeItem('gdprAnswer');
    localStorage.setItem('gdprDate', Date.now());
  } else {
    localStorage.removeItem('gdprAnswer');
    localStorage.setItem('gdprDate', Date.now());
  }

  /*get main element Body*/
  let body = document.querySelector('body');
  /*container is a wrapper, very easy use for flex box*/
  let wrapper = document.createElement('div');
  wrapper.style = `
  display: flex;
  position:fixed; z-index:100; width:100vw; height:100vh; overflow:hidden;
  justify-content: center;
  align-items: center;
  `;

  /*main element, here we have two elements, Message and ButtonGroup*/
  let mainWindow = document.createElement('div');
  mainWindow.style = `
  border:1px solid black;
  position:relative;
  width:600px;
  height:300px;
  overflow:hidden;
  display: flex;
  flex-direction: column;
  `;
  /*There we will have text of Gdpr*/
  let messageContainer = document.createElement('div');
  messageContainer.style = `
  border-bottom:1px solid black;
  padding:0; margin:0;
  flex:8;
  overflow:auto;
  justify-content: center;
  align-items: center;
  display:flex;
  background-color: #D1E9B4;
  color: #0D172A;
  `;
  messageContainer.innerHTML = `
  <div style="height:100%; padding:4px;">
  Welcome to gdpr-info.eu. Here you can find the official PDF of the Regulation (EU) 2016/679 (General Data Protection Regulation) in the current version of the OJ L 119, 04.05.2016; cor. OJ L 127, 23.5.2018 as a neatly arranged website. All Articles of the GDPR are linked with suitable recitals. The European Data Protection Regulation is applicable as of May 25th, 2018 in all member states to harmonize data privacy laws across Europe. If you find the page useful, feel free to support us by sharing the project.
  Welcome to gdpr-info.eu. Here you can find the official PDF of the Regulation (EU) 2016/679 (General Data Protection Regulation) in the current version of the OJ L 119, 04.05.2016; cor. OJ L 127, 23.5.2018 as a neatly arranged website. All Articles of the GDPR are linked with suitable recitals. The European Data Protection Regulation is applicable as of May 25th, 2018 in all member states to harmonize data privacy laws across Europe. If you find the page useful, feel free to support us by sharing the project.
  Welcome to gdpr-info.eu. Here you can find the official PDF of the Regulation (EU) 2016/679 (General Data Protection Regulation) in the current version of the OJ L 119, 04.05.2016; cor. OJ L 127, 23.5.2018 as a neatly arranged website. All Articles of the GDPR are linked with suitable recitals. The European Data Protection Regulation is applicable as of May 25th, 2018 in all member states to harmonize data privacy laws across Europe. If you find the page useful, feel free to support us by sharing the project.
</div>
  `;

  /*el for buttons*/
  let buttonsGroup = document.createElement('div');
  buttonsGroup.style = `
  padding:0; margin:0;
  flex:2;
  overflow:hidden;
  display:flex;
  `;

  let buttonAccept = document.createElement('div');
  buttonAccept.style = `
  transition: all .3s;
  background-color:lightgreen;
  flex:1;
  overflow:hidden;
  justify-content: center;
  align-items: center;
  display:flex;
  `;
  buttonAccept.innerHTML = "Accept";
  buttonAccept.addEventListener('click', function(e) {
    localStorage.setItem('gdprAnswer', 'Accept');
    e.stopPropagation();
    body.removeChild(wrapper);
  });

  buttonAccept.addEventListener('mouseover', function(e) {
    this.style.color = 'white';
  });

  buttonAccept.addEventListener('mouseout', function(e) {
    this.style.color = 'black';
  });

  let buttonCancel = document.createElement('div');
  buttonCancel.style = `
  transition: all .3s;
  background-color:orchid;
  flex:1;
  overflow:hidden;
  justify-content: center;
  align-items: center;
  display:flex;
  `;
  buttonCancel.innerHTML = "Cancel";
  buttonCancel.addEventListener('click', function(e) {
    localStorage.setItem('gdprAnswer', 'Cancel');
    e.stopPropagation();
    body.removeChild(wrapper);
  });

  buttonCancel.addEventListener('mouseover', function(e) {
    this.style.color = 'white';
  });

  buttonCancel.addEventListener('mouseout', function(e) {
    this.style.color = 'black';
  });

  /*title for main window*/
  let messageTitle = document.createElement('div');
  messageTitle.innerHTML = `<h1>GDPR Title</h1>`;
  messageTitle.style = `
  width: 100%;
  text-align: center;
  border-bottom: 1px solid black;
  background-color: #457767;
  `;

  /*Here we adding all elements in DOM*/
  mainWindow.append(messageTitle);
  mainWindow.append(messageContainer);
  mainWindow.append(buttonsGroup);
  buttonsGroup.append(buttonCancel);
  buttonsGroup.append(buttonAccept);
  wrapper.append(mainWindow);
  body.append(wrapper);

})();
