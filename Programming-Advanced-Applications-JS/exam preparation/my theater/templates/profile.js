import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { get, post } from '../api.js';
const header = document.querySelector('header');
const main = document.querySelector('main');

export async function renderMyItems(){
    const id = JSON.parse(sessionStorage.getItem('userData'))._id;
    const email = JSON.parse(sessionStorage.getItem('userData')).email;
    const items = await get(`/data/theaters?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`);
    if(items.length == 0){
        render(noItemsTemplate(email),main);
    }
    else{
        render(template(items,email),main);
    }
}
const template = (items,email) => html`
<section id="profilePage">
<div class="userInfo">
    <div class="avatar">
        <img src="./images/profilePic.png">
    </div>
    <h2>${email}</h2>
</div>
<div class="board">
    <!--If there are event-->
    ${items.map(item=> html`
    <div class="eventBoard">
        <div class="event-info">
            <img src="${item.imageUrl}">
            <h2>${item.title}</h2>
            <h6>${item.date}</h6>
            <a href="/details/${item._id}" class="details-button">Details</a>
        </div>
    </div>
    `)}
</div>
</section>
`;

const noItemsTemplate = (email) => html`
<section id="profilePage">
<div class="userInfo">
    <div class="avatar">
        <img src="./images/profilePic.png">
    </div>
    <h2>${email}</h2>
</div>
<div class="board">
<div class="no-events">
        <p>This user has no events yet!</p>
    </div>
</div>
</section>
`;