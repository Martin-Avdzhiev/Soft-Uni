import { render, html } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const main = document.querySelector('main');
const header = document.querySelector('header');


export function home(){
    render(template(),main);
}

const template = ()=> html`
<!-- Home page -->
<section id="home">
  <h1>Learn more about your favorite fruits</h1>
  <img
    src="./images/pexels-pixabay-161559-dImkWBDHz-transformed (1).png"
    alt="home"
  />

</section>
`;