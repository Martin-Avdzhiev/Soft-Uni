import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { get, put } from '../api.js';
const header = document.querySelector('header');
const main = document.querySelector('main');


async function onSubmit(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const id = e.target.getAttribute('item');
    const title = data.get('title');
    const date = data.get('date');
    const author = data.get('author');
    const description = data.get('description');
    const imageUrl = data.get('imageUrl');
    if(!title || !date || !author || !description || !imageUrl){
        return alert('all fields must be filled!');
    }
    const response = await put(`/data/theaters/${id}`, {title,date,author,description,imageUrl});
    page.redirect(`/details/${id}`);
}
export async function edit(context){
    const id = context.params.id;
    const item = await get(`/data/theaters/${id}`);
    render(template(item),main);
}
const template = (item) => html`
<section id="editPage">
<form class="theater-form" @submit=${onSubmit} item="${item._id}">
    <h1>Edit Theater</h1>
    <div>
        <label for="title">Title:</label>
        <input id="title" name="title" type="text" placeholder="Theater name" .value="${item.title}">
    </div>
    <div>
        <label for="date">Date:</label>
        <input id="date" name="date" type="text" placeholder="Month Day, Year" .value="${item.date}">
    </div>
    <div>
        <label for="author">Author:</label>
        <input id="author" name="author" type="text" placeholder="Author"
            .value="${item.author}">
    </div>
    <div>
        <label for="description">Theater Description:</label>
        <textarea id="description" name="description"
            placeholder="Description">${item.description}</textarea>
    </div>
    <div>
        <label for="imageUrl">Image url:</label>
        <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url"
            .value="${item.imageUrl}">
    </div>
    <button class="btn" type="submit">Submit</button>
</form>
</section>
`;