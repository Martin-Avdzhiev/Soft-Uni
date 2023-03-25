import { get, post } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { updateNav } from './nav.js';
const header = document.querySelector('header');
const main = document.querySelector('main');

async function onSubmit(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const title = data.get('title');
    const description = data.get('description');
    const imageUrl = data.get('imageUrl');
    const address = data.get('address');
    const phone = data.get('phone');
    if(!title || !description || !imageUrl || !address || !phone){
        return alert('all fields')
    }
    const object = {
        title,
        description,
        imageUrl,
        address,
        phone
    }
    const response = await post('/data/posts', object);
    page.redirect('/');
}
export const renderCreate = () => render(createTemplate(),main);
const createTemplate = ()=> html`
<section id="create-page" class="auth">
<form id="create" @submit=${onSubmit}>
    <h1 class="title">Create Post</h1>

    <article class="input-group">
        <label for="title">Post Title</label>
        <input type="title" name="title" id="title">
    </article>

    <article class="input-group">
        <label for="description">Description of the needs </label>
        <input type="text" name="description" id="description">
    </article>

    <article class="input-group">
        <label for="imageUrl"> Needed materials image </label>
        <input type="text" name="imageUrl" id="imageUrl">
    </article>

    <article class="input-group">
        <label for="address">Address of the orphanage</label>
        <input type="text" name="address" id="address">
    </article>

    <article class="input-group">
        <label for="phone">Phone number of orphanage employee</label>
        <input type="text" name="phone" id="phone">
    </article>

    <input type="submit" class="btn submit" value="Create Post">
</form>
</section>
`