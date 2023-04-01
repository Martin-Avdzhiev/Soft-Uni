import { render, html } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { post } from '../api.js';
const main = document.querySelector('main');
const header = document.querySelector('header');

export function createFruit() {
  render(template(), main);
}
async function create(event) {
  event.preventDefault();
  const fields = new FormData(event.target);
  const name = fields.get('name');
  const imageUrl = fields.get('imageUrl');
  const description = fields.get('description');
  const nutrition = fields.get('nutrition');
  if (name == "" || imageUrl == "" || description == "" || nutrition == "") {
    return alert('all fields must be field!');
  }
  const postFruit = await post('/data/fruits', { name, imageUrl, description, nutrition });
  page.redirect('/fruits');
}
const template = () => html`
<section id="create">
<div class="form">
  <h2>Add Fruit</h2>
  <form class="create-form" @submit=${create}>
    <input type="text" name="name" id="name" placeholder="Fruit Name"/>
    <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image"/>
    <textarea id="fruit-description" name="description" placeholder="Description" rows="10" cols="50"></textarea>
  <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50"></textarea>
  <button type="submit">Add Fruit</button>
  </form>
</div>
</section>
`;