export default function (){
let mainWindow = document.createElement('div');
mainWindow.style = `
position:relative;
width:600px;
height:300px;
overflow:hidden;
display: flex;
flex-direction: column;
border: 1px solid black;
`;
return mainWindow;
}
