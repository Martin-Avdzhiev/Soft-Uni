
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { get } from '../api.js';

const nav = document.querySelector('nav');
const main = document.querySelector('main');

export async function onClick(e) {
    e.preventDefault();
    const meme = e.target.parentNode.parentNode.parentNode;
    const currentMeme = await get(`/data/memes/${meme.id}`);
    const ownerId = currentMeme._ownerId;
    const user = JSON.parse(localStorage.getItem('userData'));
    if (user) {
        if (user && user.id == ownerId) {
            render(detailsTemplate(true,currentMeme), main);
        }
        else {
            render(detailsTemplate(false, currentMeme), main);
        }
    }
    else {
        render(detailsTemplate(false,currentMeme), main);
    }
    page.redirect('/details');
    
}

export function updateButtons(context) {

}

const detailsTemplate = (boolean,meme) => html`
<section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src="${meme.imageUrl}">
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>
            <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
            ${boolean ? html`
            <a class="button warning" href="/edit" owner="${meme._id}>Edit</a>
            <button class="button danger" owner="${meme._id}">Delete</button>`
        : null}
        </div>
    </div>
</section>
`