import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { post, get } from '../api.js';
const header = document.querySelector('header');
const main = document.querySelector('main');

export function renderCreate() {
    render(template(), main);
}

async function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const brand = data.get('brand');
    const model = data.get('model');
    const imageUrl = data.get('imageUrl');
    const release = data.get('release');
    const designer = data.get('designer');
    const value = data.get('value');
    if (!brand || !model || !imageUrl || !release || !designer || !value) {
        return alert('all');
    }
    const response = await post('/data/shoes', { brand, model, imageUrl, release, designer, value });
    page.redirect('/dashboard');
}

const template = () => html`
<section id="create">
<div class="form">
  <h2>Add item</h2>
  <form class="create-form" @submit=${onSubmit}>
    <input
      type="text"
      name="brand"
      id="shoe-brand"
      placeholder="Brand"
    />
    <input
      type="text"
      name="model"
      id="shoe-model"
      placeholder="Model"
    />
    <input
      type="text"
      name="imageUrl"
      id="shoe-img"
      placeholder="Image url"
    />
    <input
      type="text"
      name="release"
      id="shoe-release"
      placeholder="Release date"
    />
    <input
      type="text"
      name="designer"
      id="shoe-designer"
      placeholder="Designer"
    />
    <input
      type="text"
      name="value"
      id="shoe-value"
      placeholder="Value"
    />

    <button type="submit">post</button>
  </form>
</div>
</section>
`;