let body = document.querySelector('body');

let examples = [
  {description: `This code was created without webpack, we use elements and style, you can just add script in html page.`, link: createLink('example without Webpack', 'example1')},
  {description: `In this case we separate elements on components, but we don't use css files`, link:createLink('separate first example to Webpack module', 'example2')},
  {description: `In this example we use css(classes), we use components. This example more beautiful if compare with other.`, link:createLink('Best project after refactoring of code', 'example3')},
  {description: `Less use styles. Very small code in one file.`, link:createLink('very tiny', 'example4')},
];

createList(body, examples);



function createLink(text, url){
  let link = document.createElement('a');
  link.href = url;
  link.innerHTML = text;
  return link;
}

function createList(parentEl, listOfObj) {
  let readyList = listOfObj.map(function(obj){
    return `
    <div>
    <p>${obj.description}</p>
    <a href="${obj.link}">${obj.link.text}</a>
    </div>`
  });
  readyList.forEach(function (el) {
    parentEl.innerHTML += el;
    parentEl.innerHTML += '<hr>';
  });

}
