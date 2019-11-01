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
  let bodyEl = document.querySelector('body');
  /*container is a wrapper, very easy use for flex box*/
  let wrapper = document.createElement('div');
  wrapper.style = `
  display: flex;
  position:fixed; z-index:100; width:100vw; height:100vh;
  justify-content: center;
  align-items: center;
  `;

  /*main element, here we have two elements, Message and ButtonGroup*/
  let mainWindow = document.createElement('div');
  mainWindow.style = `
  position:relative;
  width:600px;
  height:300px;
  overflow:hidden;
  display: flex;
  flex-direction: column;
  border:1px solid black;
  `;
  /*title for main window*/
  let mainWindowTitle = document.createElement('div');
  mainWindowTitle.innerHTML = `GDPR Title`;
  mainWindowTitle.style= `
  border-bottom: 1px solid black;
  `;

  /*There we will have text of Gdpr*/
  let boxGdprMessageEl = document.createElement('div');
  boxGdprMessageEl.style = `
  border-bottom:1px solid black;
  flex:8;
  overflow:auto;
  display:flex;
  `;
  boxGdprMessageEl.innerHTML = `
  <div style="height:100%;">
  Welcome to gdpr-info.eu. Here you can find the official PDF of the Regulation (EU) 2016/679 (General Data Protection Regulation) in the current version of the OJ L 119, 04.05.2016; cor. OJ L 127, 23.5.2018 as a neatly arranged website. All Articles of the GDPR are linked with suitable recitals. The European Data Protection Regulation is applicable as of May 25th, 2018 in all member states to harmonize data privacy laws across Europe. If you find the page useful, feel free to support us by sharing the project.
  Welcome to gdpr-info.eu. Here you can find the official PDF of the Regulation (EU) 2016/679 (General Data Protection Regulation) in the current version of the OJ L 119, 04.05.2016; cor. OJ L 127, 23.5.2018 as a neatly arranged website. All Articles of the GDPR are linked with suitable recitals. The European Data Protection Regulation is applicable as of May 25th, 2018 in all member states to harmonize data privacy laws across Europe. If you find the page useful, feel free to support us by sharing the project.
  Welcome to gdpr-info.eu. Here you can find the official PDF of the Regulation (EU) 2016/679 (General Data Protection Regulation) in the current version of the OJ L 119, 04.05.2016; cor. OJ L 127, 23.5.2018 as a neatly arranged website. All Articles of the GDPR are linked with suitable recitals. The European Data Protection Regulation is applicable as of May 25th, 2018 in all member states to harmonize data privacy laws across Europe. If you find the page useful, feel free to support us by sharing the project.
</div>
  `;

  /*el for buttons*/
  let boxGdprButtonGroupEl = document.createElement('div');

  let boxGdprElButtonAccept = document.createElement('div');
  boxGdprElButtonAccept.style = `
  border:1px solid red;
  margin:1px 0;
  `;
  boxGdprElButtonAccept.innerHTML = "<div>Accept</div>";
  boxGdprElButtonAccept.addEventListener('click', function(e) {
    localStorage.setItem('gdprAnswer', 'Accept');
    e.stopPropagation();
    bodyEl.removeChild(wrapper);
  });

  let boxGdprElButtonCancel = document.createElement('div');
  boxGdprElButtonCancel.style = `
  border:1px solid red;
  margin:1px 0;
  `;
  boxGdprElButtonCancel.innerHTML = "<div>Cancel</div>";
  boxGdprElButtonCancel.addEventListener('click', function(e) {
    localStorage.setItem('gdprAnswer', 'Cancel');
    e.stopPropagation();
    bodyEl.removeChild(wrapper);
  });

  /*Here we adding all elements in DOM*/
  mainWindow.append(mainWindowTitle);
  mainWindow.append(boxGdprMessageEl);
  mainWindow.append(boxGdprButtonGroupEl);
  boxGdprButtonGroupEl.append(boxGdprElButtonAccept);
  boxGdprButtonGroupEl.append(boxGdprElButtonCancel);
  wrapper.append(mainWindow);
  bodyEl.append(wrapper);

})();
