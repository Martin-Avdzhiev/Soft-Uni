import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { post, get, del, put } from '../api.js';
const header = document.querySelector('header');
const main = document.querySelector('main');


export async function renderEdit(context){
    const id = context.params.id;
    const item = await get(`/data/shoes/${id}`);
    render(template(item),main);
}
async function onSubmit(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const id = e.target.getAttribute('item');
    const brand = data.get('brand');
    const model = data.get('model');
    const imageUrl = data.get('imageUrl');
    const release = data.get('release');
    const designer = data.get('designer');
    const value = data.get('value');
    if (!brand || !model || !imageUrl || !release || !designer || !value) {
        return alert('all');
    }
    const response = await put(`/data/shoes/${id}`, { brand, model, imageUrl, release, designer, value });
    page.redirect(`/details/${id}`);
}
const template = (item)=> html`
<section id="edit">
<div class="form">
  <h2>Edit item</h2>
  <form class="edit-form" @submit=${onSubmit} item=${item._id}>
    <input
      type="text"
      name="brand"
      id="shoe-brand"
      placeholder="Brand"
      .value=${item.brand}
    />
    <input
      type="text"
      name="model"
      id="shoe-model"
      placeholder="Model"
      .value=${item.model}
    />
    <input
      type="text"
      name="imageUrl"
      id="shoe-img"
      placeholder="Image url"
      .value=${item.imageUrl}
    />
    <input
      type="text"
      name="release"
      id="shoe-release"
      placeholder="Release date"
      .value=${item.release}
    />
    <input
      type="text"
      name="designer"
      id="shoe-designer"
      placeholder="Designer"
      .value=${item.designer}
    />
    <input
      type="text"
      name="value"
      id="shoe-value"
      placeholder="Value"
      .value=${item.value}
    />

    <button type="submit">post</button>
  </form>
</div>
</section>
`;