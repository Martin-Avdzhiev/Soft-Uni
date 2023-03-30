import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { post, get, del } from '../api.js';
const header = document.querySelector('header');
const main = document.querySelector('main');

export async function getDetails(context) {
    const id = context.params.id;
    const item = await get(`/data/shoes/${id}`);
    let user = sessionStorage.getItem('userData');
    if (user) {
        user = JSON.parse(user);
        if (user._id == item._ownerId) {
            render(template(item), main);
        }
        else {
            render(notOwnerTemplate(item), main);
        }
    }
    else {
        render(notOwnerTemplate(item), main);
    }
}

async function onClick(e) {
    e.preventDefault();
    const id = e.target.getAttribute('item');
    const sure = confirm('are u sure');
    if(sure){
        const response = await del(`/data/shoes/${id}`);
        page.redirect('/dashboard');
    }
}
const template = (item) => html`
<section id="details">
<div id="details-wrapper">
  <p id="details-title">Shoe Details</p>
  <div id="img-wrapper">
    <img src="${item.imageUrl}" alt="example1" />
  </div>
  <div id="info-wrapper">
    <p>Brand: <span id="details-brand">${item.brand}</span></p>
    <p>
      Model: <span id="details-model">${item.model}</span>
    </p>
    <p>Release date: <span id="details-release">${item.release}</span></p>
    <p>Designer: <span id="details-designer">${item.designer}</span></p>
    <p>Value: <span id="details-value">${item.value}</span></p>
  </div>

  <!--Edit and Delete are only for creator-->
  <div id="action-buttons">
    <a href="/details/${item._id}/edit" id="edit-btn">Edit</a>
    <a href="#" id="delete-btn" @click=${onClick} item=${item._id}>Delete</a>
  </div>
</div>
</section>
`;

const notOwnerTemplate = (item) => html`
<section id="details">
<div id="details-wrapper">
  <p id="details-title">Shoe Details</p>
  <div id="img-wrapper">
    <img src="${item.imageUrl}" alt="example1" />
  </div>
  <div id="info-wrapper">
    <p>Brand: <span id="details-brand">${item.brand}</span></p>
    <p>
      Model: <span id="details-model">${item.model}</span>
    </p>
    <p>Release date: <span id="details-release">${item.release}</span></p>
    <p>Designer: <span id="details-designer">${item.designer}</span></p>
    <p>Value: <span id="details-value">${item.value}</span></p>
  </div>
  </div>
</div>
</section>
`;