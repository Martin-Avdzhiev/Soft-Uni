import { render, html } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { del, get } from '../api.js';
import { deleteFruit } from './deleteFruit.js';
const main = document.querySelector('main');
const header = document.querySelector('header');

export async function fruitDetails(context){
    const id = context.params.id;
    const fruit = await get(`/data/fruits/${id}`);
    let guest = sessionStorage.getItem('userData');
    if(guest){
      guest = JSON.parse(guest);
        if(fruit._ownerId == guest._id){
            render(owner(fruit),main);
        }
        else{
            render(ordinary(fruit),main);
        }
    }
    else{
        render(ordinary(fruit),main);
    }
}


const ordinary = (fruit)=> html`
<section id="details">
<div id="details-wrapper">
  <img id="details-img" src="${fruit.imageUrl}" alt="example1" />
  <p id="details-title">${fruit.name}</p>
  <div id="info-wrapper">
    <div id="details-description">
      <p>${fruit.description}</p>
          <p id="nutrition">Nutrition</p>
         <p id="details-nutrition">${fruit.nutrition}</p>
    </div>
<div id="action-buttons">
</div>
  </div>
</div>
</section>
`;


const owner = (fruit)=> html`
<section id="details">
<div id="details-wrapper">
  <img id="details-img" src="${fruit.imageUrl}" alt="example1" />
  <p id="details-title">${fruit.name}</p>
  <div id="info-wrapper">
    <div id="details-description">
      <p>${fruit.description}</p>
          <p id="nutrition">Nutrition</p>
         <p id = "details-nutrition">${fruit.nutrition}</p>
    </div>
     <!--Edit and Delete are only for creator-->
<div id="action-buttons">
  <a href="/details/${fruit._id}/edit" id="edit-btn">Edit</a>
  <a href="javascript:void(0)" @click=${deleteFruit} id="delete-btn" fruit=${fruit._id}>Delete</a>
</div>
  </div>
</div>
</section>
`;

