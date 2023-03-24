import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { updateNav } from './navigation.js';
import { get } from '../api.js';
import { onClick } from './details.js';
const main = document.querySelector('main');

const template = (data) => html`
<section id="dashboard">
    <h2>Job Offers</h2>
    ${data.map(item => html`
    <div class="offer" owner="${item._ownerId}" id="${item._id}">;
        <img src="${item.imageUrl}"/>
        <p>
            <strong>Title: </strong><span class="title">${item.title}</span>
        </p>
        <p><strong>Salary:</strong><span class="salary">${item.salary}</span></p>
        <a class="details-btn" href="/details" @click="${onClick}">Details</a>
    </div>
    `)}
</section>
`

const noOffersTemplate = () => html`
<section id="dashboard">
    <h2>Job Offers</h2>
    <h2>No offers yet.</h2>
</section>
`

export async function getOffers(){
    const data = await get('/data/offers?sortBy=_createdOn%20desc');
    if(data.length > 0){
        render(template(data),main)
    }
    else {
        render(noOffersTemplate(),main);
    }
}

