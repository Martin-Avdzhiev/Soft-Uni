import { post } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const main = document.querySelector('main');
const header = document.querySelector('header');


async function onSubmit(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const brand = data.get('brand');
    const model = data.get('model');
    const description = data.get('description');
    const year = Number(data.get('year'));
    const imageUrl = data.get('imageUrl');
    const price = Number(data.get('price'));
    if(!brand || !model || !description || !year || !imageUrl || !price){
        return alert('all');
    }
    const response = post('/data/cars',{brand,model,description,year,imageUrl,price});
    page.redirect('/all');
}
export function renderCreate(){
    render(template(),main);
}
const template = ()=> html`
<section id="create-listing">
<div class="container">
    <form id="create-form" @submit=${onSubmit}>
        <h1>Create Car Listing</h1>
        <p>Please fill in this form to create an listing.</p>
        <hr>

        <p>Car Brand</p>
        <input type="text" placeholder="Enter Car Brand" name="brand">

        <p>Car Model</p>
        <input type="text" placeholder="Enter Car Model" name="model">

        <p>Description</p>
        <input type="text" placeholder="Enter Description" name="description">

        <p>Car Year</p>
        <input type="number" placeholder="Enter Car Year" name="year">

        <p>Car Image</p>
        <input type="text" placeholder="Enter Car Image" name="imageUrl">

        <p>Car Price</p>
        <input type="number" placeholder="Enter Car Price" name="price">

        <hr>
        <input type="submit" class="registerbtn" value="Create Listing">
    </form>
</div>
</section>
`;