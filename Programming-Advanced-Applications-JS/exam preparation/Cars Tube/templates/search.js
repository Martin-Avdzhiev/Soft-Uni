import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { get, post } from '../api.js';
const main = document.querySelector('main');
const header = document.querySelector('header');



export function search(){
    render(template(),main);
}
 async function onSearch(e){
    e.preventDefault();
    const value = document.getElementById('search-input').value;
    const response = await get(`/data/cars?where=year%3D${value}`);
    if(response.length > 0){
        render(result(response),main);
    }
    else{
        render(noMatchesTemplate(),main);
    }
 }
const template = ()=> html`
<section id="search-cars">
<h1>Filter by year</h1>

<div class="container">
    <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
    <button class="button-list" @click=${onSearch}>Search</button>
</div>

<h2>Results:</h2>
<div class="listings">
</div>
</section>
`;
const result = (response)=> html`
<section id="search-cars">
<h1>Filter by year</h1>

<div class="container">
    <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
    <button class="button-list">Search</button>
</div>

<h2>Results:</h2>
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
const noMatchesTemplate = ()=> html`
<section id="search-cars">
<h1>Filter by year</h1>

<div class="container">
    <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
    <button class="button-list">Search</button>
</div>

<h2>Results:</h2>
<div class="listings">
    <!-- Display if there are no matches -->
    <p class="no-cars"> No results.</p>
</div>
</section>
`;