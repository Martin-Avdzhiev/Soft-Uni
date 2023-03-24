import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { get, post } from '../api.js';
import { deleteItem } from './delete.js';
import { editItem } from './edit.js';
import { endpoints } from './applications.js';
const main = document.querySelector('main');

export async function onClick(e){
    e
    e.preventDefault();
    const item = e.target.parentNode;
    const owner = item.getAttribute('owner');
    const id = item.id;
    const user = JSON.parse(sessionStorage.getItem('userData'));
    const response = await get(`/data/offers/${id}`);
    const applications = await get(endpoints.byOfferId(id));
    if(user){
        if(user._id == owner){
            render(ownerTemplate(response,applications),main);
        }
        else {
            const isApply = await get(endpoints.byOfferIdAndUserId(id,user._id));
            
            render(notOwnerTemplate(response, isApply,applications),main);
        }
    }
    else {
   
        render(guestsTemplate(response,applications),main);
    }
    page.redirect(`/details/${id}`);
}

 async function apply(e){
    e.preventDefault();
     const id = e.target.parentNode.parentNode.getAttribute('current-id');
     const object = {
      offerId: id
     }
     const applyResponse = await post(endpoints.applications,object);
     page.redirect(`/dashboard`);
}

 export const ownerTemplate = (item,applications) => html`
        <section id="details">
          <div id="details-wrapper" current-id="${item._id}">
            <img id="details-img" src="${item.imageUrl}"/>

            <p id="details-title">${item.title}</p>

            <p id="details-category">Category: <span id="categories">${item.category}</span></p>

            <p id="details-salary">Salary: <span id="salary-number">${item.salary}</span></p>

            <div id="info-wrapper">
              <div id="details-description">
                <h4>Description</h4>
                <span>${item.description}</span>
              </div>
              <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${item.requirements}</span>
              </div>
            </div>
            <p>Applications: <strong id="applications">${applications}</strong></p>

            <!--Edit and Delete are only for creator-->

            <div id="action-buttons">
              <a href="/edit" id="edit-btn" @click=${editItem}>Edit</a>
              <a href="/delete" id="delete-btn" @click=${deleteItem}>Delete</a>
            </div>
          </div>
        </section>
`

export const notOwnerTemplate = (item,isApply,applications)=> html`
        <section id="details">
          <div id="details-wrapper" current-id="${item._id}">
            <img id="details-img" src="${item.imageUrl}"/>

            <p id="details-title">${item.title}</p>

            <p id="details-category">Category: <span id="categories">${item.category}</span></p>

            <p id="details-salary">Salary: <span id="salary-number">${item.salary}</span></p>

            <div id="info-wrapper">
              <div id="details-description">
                <h4>Description</h4>
                <span>${item.description}</span>
              </div>
              <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${item.requirements}</span>
              </div>
            </div>
            <p>Applications: <strong id="applications">${applications}</strong></p>

            <!--Edit and Delete are only for creator-->

            <div id="action-buttons">
            ${isApply == 0? html`<a href="#" id="apply-btn" @click="${apply}">Apply</a>`: null}
            </div>
          </div>
        </section>
`

export const guestsTemplate = (item,applications)=> html`
<section id="details">
          <div id="details-wrapper" current-id="${item._id}">
            <img id="details-img" src="${item.imageUrl}"/>

            <p id="details-title">${item.title}</p>

            <p id="details-category">Category: <span id="categories">${item.category}</span></p>

            <p id="details-salary">Salary: <span id="salary-number">${item.salary}</span></p>

            <div id="info-wrapper">
              <div id="details-description">
                <h4>Description</h4>
                <span>${item.description}</span>
              </div>
              <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${item.requirements}</span>
              </div>
            </div>
            <p>Applications: <strong id="applications">${applications}</strong></p>

            <!--Edit and Delete are only for creator-->

            <div id="action-buttons">
            </div>
          </div>
        </section>
`
