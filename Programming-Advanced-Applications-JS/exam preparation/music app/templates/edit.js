import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const main = document.querySelector('main');
const header = document.querySelector('header');
import {put, get } from '../api.js';


export async function renderEdit(context){
    const id = context.params.id;
    const item = await get(`/data/albums/${id}`);

    render(template(item),main);
}
async function onSubmit(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const id = e.target.getAttribute('item');
    const name = data.get('name');
    const imgUrl = data.get('imgUrl');
    const price = data.get('price');
    const releaseDate = data.get('releaseDate');
    const artist = data.get('artist');
    const genre = data.get('genre');
    const description = data.get('description');
    if (!name || !imgUrl || !price || !releaseDate || !artist || !genre || !description){
        return alert('must all')
    }
    const response = await put(`/data/albums/${id}`,{
        name,
        imgUrl,
        price,
        releaseDate,
        artist,
        genre,
        description
      }
      )
      page.redirect(`/details/${id}`);
}
const template = (item)=> html`
<section class="editPage">
<form @submit=${onSubmit} item=${item._id}> 
    <fieldset>
        <legend>Edit Album</legend>

        <div class="container">
            <label for="name" class="vhide">Album name</label>
            <input id="name" name="name" class="name" type="text" .value="${item.name}">

            <label for="imgUrl" class="vhide">Image Url</label>
            <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" .value="${item.imgUrl}">

            <label for="price" class="vhide">Price</label>
            <input id="price" name="price" class="price" type="text" .value="${item.price}">

            <label for="releaseDate" class="vhide">Release date</label>
            <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" .value="${item.releaseDate}">

            <label for="artist" class="vhide">Artist</label>
            <input id="artist" name="artist" class="artist" type="text" .value="${item.artist}">

            <label for="genre" class="vhide">Genre</label>
            <input id="genre" name="genre" class="genre" type="text" .value="${item.genre}">

            <label for="description" class="vhide">Description</label>
            <textarea name="description" class="description" rows="10"
                cols="10">${item.description}</textarea>

            <button class="edit-album" type="submit">Edit Album</button>
        </div>
    </fieldset>
</form>
</section>
`;