import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { get } from '../api.js';
import { onClick } from './detailsTemplate.js';

const nav = document.querySelector('nav');
const main = document.querySelector('main');

export async function allMemes(){
    const data = await get('/data/memes?sortBy=_createdOn%20desc');

    if(data.length == 0 || !data){
        render(noMemes(),main);
        }
        else {
            render(memes(data),main);
        }   
}
const noMemes = () => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
        <p class="no-memes">No memes in database.</p>
    </div>
</section>
`
const memes = (data) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
        <!-- Display : All memes in database ( If any ) -->
        ${data.map(meme => html`
        <div class="meme" owner="${meme._ownerId}" id="${meme._id}">
            <div class="card">
                <div class="info">
                    <p class="meme-title">${meme.title}</p>
                    <img class="meme-image" alt="meme-img" src="${meme.imageUrl}">
                </div>
                <div id="data-buttons">
                    <a class="button" href="/details" @click="${onClick}">Details</a>
                </div>
            </div>
        </div>
        `)}
    </div>
</section>
`
