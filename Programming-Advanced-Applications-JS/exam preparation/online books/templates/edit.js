import { del, get, post, put } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { updateNav } from './nav.js';
const header = document.querySelector('header');
const main = document.querySelector('main');



export async function editBook(context){
    const id = context.params.id;
    const book = await get(`/data/books/${id}`)
    console.log(book)
    updateNav();
    render(template(book),main)
}

async function onSubmit(e){
    e.preventDefault();
    const id = e.target.parentNode.getAttribute('item');
    const data = new FormData(e.target);
    const title = data.get('title');
    const imageUrl = data.get('imageUrl');
    const description = data.get('description');
    const type = data.get('type');
    if(!title || !imageUrl || !description || !type){
        return alert('all fields must be field!');
    }
    const response = await put(`/data/books/${id}`, {title, description, imageUrl, type});
    page.redirect(`/details/${id}`);
}

const template = (book) => html`
<section id="edit-page" class="edit" item=${book._id}>
<form id="edit-form" action="#" method="" @submit=${onSubmit}>
    <fieldset>
        <legend>Edit my Book</legend>
        <p class="field">
            <label for="title">Title</label>
            <span class="input">
                <input type="text" name="title" id="title" .value="${book.title}">
            </span>
        </p>
        <p class="field">
            <label for="description">Description</label>
            <span class="input">
                <textarea name="description"
                    id="description">${book.description}</textarea>
            </span>
        </p>
        <p class="field">
            <label for="image">Image</label>
            <span class="input">
                <input type="text" name="imageUrl" id="image" .value="${book.imageUrl}">
            </span>
        </p>
        <p class="field">
            <label for="type">Type</label>
            <span class="input">
                <select id="type" name="type" .value="${book.type}">
                    <option value="Fiction" selected>Fiction</option>
                    <option value="Romance">Romance</option>
                    <option value="Mistery">Mistery</option>
                    <option value="Classic">Clasic</option>
                    <option value="Other">Other</option>
                </select>
            </span>
        </p>
        <input class="button submit" type="submit" value="Save">
    </fieldset>
</form>
</section>
`