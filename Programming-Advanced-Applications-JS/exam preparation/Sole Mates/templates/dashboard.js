import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { post, get } from '../api.js';
const header = document.querySelector('header');
const main = document.querySelector('main');


export async function renderDashboard(){
    const items = await get('/data/shoes?sortBy=_createdOn%20desc');
    if(items.length > 0){
        render(template(items),main);
    }
    else{
        render(noItemsTemplate(),main);
    }
}
const template = (items)=> html`
<section id="dashboard">
<h2>Collectibles</h2>
<ul class="card-wrapper">
  <!-- Display a li with information about every post (if any)-->
  ${items.map(item=> html`
  <li class="card">
    <img src="${item.imageUrl}" alt="travis" />
    <p>
      <strong>Brand: </strong><span class="brand">${item.brand}</span>
    </p>
    <p>
      <strong>Model: </strong
      ><span class="model">${item.model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${item.value}</span>$</p>
    <a class="details-btn" href="/details/${item._id}">Details</a>
  </li>  
  `)}

</ul>
</section>
`;

const noItemsTemplate = ()=> html`
<section id="dashboard">
<h2>Collectibles</h2>
<ul class="card-wrapper">
</ul>
<!-- Display an h2 if there are no posts -->
<h2>There are no items added yet.</h2>
</section>
`;
