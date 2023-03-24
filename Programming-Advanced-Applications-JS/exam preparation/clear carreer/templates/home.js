import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { updateNav } from './navigation.js';
const main = document.querySelector('main');

const homeTemplate = () => html`
<section id="home">
    <img src="../images/pngkey.com-hunting-png-6697165-removebg-preview.png" alt="home"/>
    <h2>Searching for a job?</h2>
    <h3>The right place for a new career start!</h3>
</section>
`
export const renderHome = () => {
    render(homeTemplate(),main);
    updateNav();
}
