export default function(){
let wrapper = document.createElement('div');
wrapper.style = `
display: flex;
position:fixed; z-index:100; width:100vw; height:100vh; overflow:hide;
justify-content: center;
align-items: center;
`;
return wrapper;
}
