import { html, render } from "./node_modules/lit-html/lit-html.js";

document.getElementById('btnLoadTowns').addEventListener('click', onClick);
const root = document.getElementById('root');
const input = document.querySelector('#towns');
const inputData = (input) => input.value.trim().split(', ');
const clear = (input) => input.value = '';
function onClick(e){
    e.preventDefault();
    const data = inputData(input);
    renderring(data);
    clear(input);
}
const template = (data) => 
 html `
    <ul>
    ${data.map(item => html`<li>${item}</li>`)};
    </ul>
    `;


const renderring = (data) => render(template(data), root);
