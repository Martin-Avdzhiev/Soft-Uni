import { del, get, put } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const main = document.querySelector('main');
const header = document.querySelector('header');


export async function getMyListings(){
    let user = sessionStorage.getItem('userData');
    if(user){
        user = JSON.parse(user);
        const response = await get(`/data/cars?where=_ownerId%3D%22${user._id}%22&sortBy=_createdOn%20desc`);
        if(response.length > 0){
            render(template(response),main);
        }
        else{
            render(noItemsTemplate(),main);
        }
    }
    else{
        render(noItemsTemplate(),main);
    }
    
}
const template = (response)=> html`
<section id="my-listings">
<h1>My car listings</h1>
<div class="listings">

    <!-- Display all records -->
    ${response.map(item => html`
    <div class="listing">
        <div class="preview">
            <img src="${item.imageUrl}">
        </div>
        <h2>${item.brand} ${item.model}</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: ${item.year}</h3>
                <h3>Price: ${item.price} $</h3>
            </div>
            <div class="data-buttons">
                <a href="/details/${item._id}" class="button-carDetails">Details</a>
            </div>
        </div>
    </div>
    `)}
</div>
</section>
`;

const noItemsTemplate = () => html`
<section id="my-listings">
<h1>My car listings</h1>
<div class="listings">
    <!-- Display if there are no records -->
    <p class="no-cars"> You haven't listed any cars yet.</p>
</div>
</section>
`;