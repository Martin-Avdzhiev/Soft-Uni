import { render, html } from '../node_modules/lit-html/lit-html.js';
import { get } from '../api.js';
import page from '../node_modules/page/page.mjs';

const myPublicationsTemplate = (values) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>My Furniture</h1>
        <p>This is a list of your publications.</p>
    </div>
</div>
<div class="row space-top">
${values.map(furniture => html`
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src="${furniture.img}"/>
            
            <p>Description ${furniture.description}</p>
            <footer>
                <p>Price: <span>${furniture.price} $</span></p>
            </footer>
            <div>
                <a href="#" class="btn btn-info" @click="${onClick1}" id="${furniture._id}">Details</a>
            </div>
        </div>
    </div>
</div>
`)}

</div>
`
export async function myFurnitureView(context){
    const owner = JSON.parse(sessionStorage.getItem('userData')).id;
    const data = await get('/data/catalog');
    const values = [];
    for(const value of Object.values(data)){
        if(value._ownerId == owner){
            values.push(value);
        }
    }
    render(myPublicationsTemplate(values),document.querySelector('.container'));
}

async function onClick1(e){
    e.preventDefault();
    const id = e.target.id;
    const item = await get(`/data/catalog/${id}`);
    render(furnitureTemplate(item),document.querySelector('.container'))
}

const furnitureTemplate = (furniture) => html`
<div class="row space-top">
<div class="col-md-12">
    <h1>Furniture Details</h1>
</div>
</div>
<div class="row space-top">
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src="${furniture.img.includes('http') ? furniture.img : `.${furniture.img}`}" />
        </div>
    </div>
</div>
<div class="col-md-4">
    <p>Make: <span>${furniture.make}</span></p>
    <p>Model: <span>${furniture.model}</span></p>
    <p>Year: <span>${furniture.year}</span></p>
    <p>Description: <span>${furniture.description}</span></p>
    <p>Price: <span>${furniture.price}</span></p>
    <p>Material: <span>${furniture.material}</span></p>
</div>
</div>
`