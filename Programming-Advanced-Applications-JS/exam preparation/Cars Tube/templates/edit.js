import { del, get, put } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const main = document.querySelector('main');
const header = document.querySelector('header');


export async function renderEdit(context){
    const id = context.params.id;
    const item = await get(`/data/cars/${id}`);
    render(template(item),main);
}

async function onSubmit(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const id = e.target.getAttribute('item');
    const brand = data.get('brand');
    const model = data.get('model');
    const description = data.get('description');
    const year = Number(data.get('year'));
    const imageUrl = data.get('imageUrl');
    const price = Number(data.get('price'));
    if(!brand || !model || !description || !year || !imageUrl || !price){
        return alert('all');
    }
    const response = put(`/data/cars/${id}`,{brand,model,description,year,imageUrl,price});
    page.redirect(`/details/${id}`);
}
const template = (item) => html`
<section id="edit-listing">
<div class="container">

    <form id="edit-form" @submit=${onSubmit} item=${item._id}>
        <h1>Edit Car Listing</h1>
        <p>Please fill in this form to edit an listing.</p>
        <hr>

        <p>Car Brand</p>
        <input type="text" placeholder="Enter Car Brand" name="brand" .value="${item.brand}">

        <p>Car Model</p>
        <input type="text" placeholder="Enter Car Model" name="model" .value="${item.model}">

        <p>Description</p>
        <input type="text" placeholder="Enter Description" name="description" .value="${item.description}">

        <p>Car Year</p>
        <input type="number" placeholder="Enter Car Year" name="year" .value="${item.year}">

        <p>Car Image</p>
        <input type="text" placeholder="Enter Car Image" name="imageUrl" .value="${item.imageUrl}">

        <p>Car Price</p>
        <input type="number" placeholder="Enter Car Price" name="price" .value="${item.price}">

        <hr>
        <input type="submit" class="registerbtn" value="Edit Listing">
    </form>
</div>
</section>
`;