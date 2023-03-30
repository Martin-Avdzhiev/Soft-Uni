import { del, get } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const main = document.querySelector('main');
const header = document.querySelector('header');

async function onClick(e){
    e.preventDefault();
    const id = e.target.getAttribute('item');
    const sure = confirm('are y sure?');
    if(sure){
        const response = await del(`/data/cars/${id}`);
        page.redirect('/all');
    }
}
export async function getDetails(context){
    const id = context.params.id;
    const item = await get(`/data/cars/${id}`);
    let user = sessionStorage.getItem('userData');
    if(user){
        user = JSON.parse(user);
        if(user._id == item._ownerId){
            render(ownerTemplate(item),main);
        }
        else{
            render(notOwnerTemplate(item),main);
        }
    }
    else{
        render(notOwnerTemplate(item),main);
    }
}
const ownerTemplate = (item)=> html`
<section id="listing-details">
<h1>Details</h1>
<div class="details-info">
    <img src="${item.imageUrl}">
    <hr>
    <ul class="listing-props">
        <li><span>Brand:</span>${item.brand}</li>
        <li><span>Model:</span>${item.model}</li>
        <li><span>Year:</span>${item.year}</li>
        <li><span>Price:</span>${item.price}$</li>
    </ul>

    <p class="description-para">${item.description}</p>

    <div class="listings-buttons">
        <a href="/details/${item._id}/edit" class="button-list">Edit</a>
        <a href="#" class="button-list" @click=${onClick} item="${item._id}">Delete</a>
    </div>
</div>
</section>
`;

const notOwnerTemplate = (item)=> html`
<section id="listing-details">
<h1>Details</h1>
<div class="details-info">
    <img src="${item.imageUrl}">
    <hr>
    <ul class="listing-props">
        <li><span>Brand:</span>${item.brand}</li>
        <li><span>Model:</span>${item.model}</li>
        <li><span>Year:</span>${item.year}</li>
        <li><span>Price:</span>${item.price}$</li>
    </ul>

    <p class="description-para">${item.description}</p>

    <div class="listings-buttons">
    </div>
</div>
</section>
`;

