import { get } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { updateNav } from './nav.js';
const header = document.querySelector('header');
const main = document.querySelector('main');

export async function dashboard() {
    updateNav();
    const data = await get('/data/books?sortBy=_createdOn%20desc');
    if(data.length > 0){
        render(dashboardTemplate(data), main);
    }
    else {
        render(noBooksTemplate(),main);
    }
}
const dashboardTemplate = (data) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
<ul class="other-books-list">
${data.map(item => html` 
    <li class="otherBooks" id="${item._id}" owner="${item._ownerId}">
        <h3>${item.title}</h3>
        <p>${item.type}</p>
        <p class="img"><img src="${item.imageUrl}"></p>
        <a class="button" href="/details/${item._id}" @click=${onClick}>Details</a>
    </li>`
    )}
</ul>
</section>
`

function onClick(e) {
    e.preventDefault();
    const id = e.target.parentNode.id;
    page.redirect(`/details/${id}`);
}


const noBooksTemplate = ()=> html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <p class="no-books">No books in database!</p>
</section>
`