import { del, get, post, put } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const header = document.querySelector('header');
const main = document.querySelector('main');

export async function editPost(context){
    const id = context.params.id;
    const item = await get(`/data/posts/${id}`);
    render(editTemplate(item),main);
}
async function onSubmit(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const id = e.target.getAttribute('item');
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
    const response = await put(`/data/posts/${id}`,object);
    page.redirect(`/details/${id}`);
}
const editTemplate = (item) => html`
<section id="edit-page" class="auth">
<form id="edit" @submit="${onSubmit}" item="${item._id}">
    <h1 class="title">Edit Post</h1>

    <article class="input-group">
        <label for="title">Post Title</label>
        <input type="title" name="title" id="title" .value="${item.title}">
    </article>

    <article class="input-group">
        <label for="description">Description of the needs </label>
        <input type="text" name="description" id="description" .value="${item.description}">
    </article>

    <article class="input-group">
        <label for="imageUrl"> Needed materials image </label>
        <input type="text" name="imageUrl" id="imageUrl" .value="${item.imageUrl}">
    </article>

    <article class="input-group">
        <label for="address">Address of the orphanage</label>
        <input type="text" name="address" id="address" .value="${item.address}">
    </article>

    <article class="input-group">
        <label for="phone">Phone number of orphanage employee</label>
        <input type="text" name="phone" id="phone" .value="${item.phone}">
    </article>

    <input type="submit" class="btn submit" value="Edit Post">
</form>
</section>
`;