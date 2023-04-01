import { render, html } from '../node_modules/lit-html/lit-html.js';
import { get } from '../api.js';
const main = document.querySelectorAll('main')[0];

export async function getFruits() {
  const fruits = await get('/data/fruits?sortBy=_createdOn%20desc');
  if (fruits.length == 0) {
    render(html`<h2>Fruits</h2>
    <section id="dashboard">
    </section>
    <h2>No fruit info yet.</h2>`, main);
  }
  else {
    render(allFruits(fruits), main);
  }
}

const allFruits = (fruits) => html`
<h2>Fruits</h2>
<section id="dashboard">
  ${fruits.map(fruit => html`
  <div class="fruit">
  <img src="${fruit.imageUrl}" />
  <h3 class="title">${fruit.name}</h3>
  <p class="description">${fruit.description}</p>
  <a class="details-btn" href="/details/${fruit._id}">More Info</a>
</div>
  `)}
</section>
`;