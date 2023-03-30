import { get } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const main = document.querySelector('main');
const header = document.querySelector('header');




export async function getItems(){
    const items = await get('/data/cars?sortBy=_createdOn%20desc');
    if(items.length> 0){
        render(template(items),main);
    }
    else{
        render(noItemsTemplate(items),main);
    }
}
const template = (items)=> html`
<section id="car-listings">
<h1>Car Listings</h1>
<div class="listings">

    <!-- Display all records -->
    ${items.map(item => html`
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

const noItemsTemplate = ()=> html`
<section id="car-listings">
<h1>Car Listings</h1>
<div class="listings">
    <!-- Display if there are no records -->
    <p class="no-cars">No cars in database.</p>
</div>
</section>
`;