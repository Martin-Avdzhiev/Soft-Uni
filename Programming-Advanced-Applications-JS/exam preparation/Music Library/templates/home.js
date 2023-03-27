import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { get } from '../api.js'
const main = document.querySelector('main');
const header = document.querySelector('header');


export function renderHome(){
    render(template(),main);
}


const template = ()=> html`
<section id="home">
    <img src="./images/landing.png" alt="home" />
    <h2 id="landing-text"><span>Add your favourite albums</span> <strong>||</strong> <span>Discover new ones right
            here!</span></h2>
</section>
`