import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { get, put } from '../api.js'
const main = document.querySelector('main');
const header = document.querySelector('header');

export async function renderEdit(context){
    const id = context.params.id;
    const item = await get(`/data/albums/${id}`);
    render(template(item),main);
}


async function onSubmit(e) {
    e.preventDefault();
    const id = e.target.getAttribute('item');
    const data = new FormData(e.target);
    const singer = data.get('singer');
    const album = data.get('album');
    const imageUrl = data.get('imageUrl');
    const release = data.get('release');
    const label = data.get('label');
    const sales = data.get('sales');
    if (!singer || !album || !imageUrl || !release || !label || !sales) {
        return alert('all need')
    }
    const response = await put(`/data/albums/${id}`, { singer, album, imageUrl, release, label, sales });
    page.redirect('/dashboard');
}

const template = (item) => html`
<section id="edit">
<div class="form">
  <h2>Edit Album</h2>
  <form class="edit-form" @submit=${onSubmit} item=${item._id}>
    <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${item.singer}/>
    <input type="text" name="album" id="album-album" placeholder="Album" .value=${item.album}/>
    <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=".${item.imageUrl}"/>
    <input type="text" name="release" id="album-release" placeholder="Release date" .value=${item.release}/>
    <input type="text" name="label" id="album-label" placeholder="Label" .value=${item.label}/>
    <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${item.sales}/>

    <button type="submit">post</button>
  </form>
</div>
</section>
`;