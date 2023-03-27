import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const main = document.querySelector('main');
const header = document.querySelector('header');
import { post } from '../api.js';

export function renderHome(){
    render(template(),main);
}
const template = () => html`
<section id="welcomePage">
<div id="welcome-message">
    <h1>Welcome to</h1>
    <h1>My Music Application!</h1>
</div>

<div class="music-img">
    <img src="./images/musicIcons.webp">
</div>
</section>
`;