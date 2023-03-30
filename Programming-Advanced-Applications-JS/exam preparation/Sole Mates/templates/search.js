import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { post, get } from '../api.js';
const header = document.querySelector('header');
const main = document.querySelector('main');

export function renderSearch(){
    render(template(),main);
}

async function search(e){
    e.preventDefault();
    const value = document.getElementById('#search-input').value;
    const response = await get(`/data/shoes?where=brand%20LIKE%20%22${value}%22`);
    const user = sessionStorage.getItem('userData');
    if(response.length > 0){
        if(user){
            render(results(response,true),main);
        }
        else{
            render(results(response,false),main);
        }

    }
    else{
        render(noResults(),main);
    }
}

const template = ()=> html`
<section id="search">
<h2>Search by Brand</h2>

<form class="search-wrapper cf">
  <input
    id="#search-input"
    type="text"
    name="search"
    placeholder="Search here..."
    required
  />
  <button type="submit" @click=${search}>Search</button>
</form>

<h3>Results:</h3>
</div>
</section>
`;

const results = (response,boolean)=> html`
<section id="search">
<h2>Search by Brand</h2>

<form class="search-wrapper cf">
  <input
    id="#search-input"
    type="text"
    name="search"
    placeholder="Search here..."
    required
  />
  <button type="submit" @click=${search}>Search</button>
</form>

<h3>Results:</h3>

<div id="search-container">
  <ul class="card-wrapper">
    <!-- Display a li with information about every post (if any)-->
    ${response.map(item=> html`
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
    ${boolean ? html`<a class="details-btn" href="/details/${item._id}">Details</a>`: null}
  </li>
    `)}
  </ul>
</div>
</section>
`;

const noResults = () => html`
<section id="search">
<h2>Search by Brand</h2>
<form class="search-wrapper cf">
  <input
    id="#search-input"
    type="text"
    name="search"
    placeholder="Search here..."
    required
  />
  <button type="submit" @click=${search}>Search</button>
</form>

<h3>Results:</h3>

<div id="search-container">
  <!-- Display an h2 if there are no posts -->
  <h2>There are no results found.</h2>
</div>
</section>
`;