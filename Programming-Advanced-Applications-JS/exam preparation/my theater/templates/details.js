import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { get, post } from '../api.js';
const header = document.querySelector('header');
const main = document.querySelector('main');

export async function getDetails(context){
    const id = context.params.id;
    const details = await get(`/data/theaters/${id}`);
    const user = JSON.parse(sessionStorage.getItem('userData'));
    const likes = await get(`/data/likes?where=theaterId%3D%22${id}%22&distinct=_ownerId&count`)
    if(user){
        if(user._id == details._ownerId){
            render(ownerTemplate(details,likes),main);
        }
        else{
            const isLiked = await get(`/data/likes?where=theaterId%3D%22${id}%22%20and%20_ownerId%3D%22${user._id}%22&count`);
            render(notOwnerTemplate(details,likes,isLiked),main);
        }
    }
    else{
        render(guestTemplate(details,likes),main);
    }
}

async function like(e){
    e.preventDefault();
    const id = e.target.parentNode.parentNode.getAttribute('item');
    const response = await post('/data/likes', {"theaterId" : id});
    page.redirect(`/details/${id}`);
}

const ownerTemplate = (details,likes) => html`
<section id="detailsPage">
<div id="detailsBox">
    <div class="detailsInfo">
        <h1>Title: ${details.title}</h1>
        <div>
            <img src="${details.imageUrl}"/>
        </div>
    </div>

    <div class="details">
        <h3>Theater Description</h3>
        <p>${details.description}</p>
        <h4>Date: ${details.date}</h4>
        <h4>Author: ${details.author}</h4>
        <div class="buttons">
            <a class="btn-delete" href="/delete/${details._id}">Delete</a>
            <a class="btn-edit" href="/details/${details._id}/edit">Edit</a>
        </div>
        <p class="likes">Likes: ${likes}</p>
    </div>
</div>
</section>
`;


const notOwnerTemplate = (details,likes,isLiked) => html`
<section id="detailsPage">
<div id="detailsBox" item="${details._id}">
    <div class="detailsInfo">
        <h1>Title: ${details.title}</h1>
        <div>
            <img src="${details.imageUrl}" />
        </div>
    </div>

    <div class="details">
        <h3>Theater Description</h3>
        <p>${details.description}</p>
        <h4>Date: ${details.date}</h4>
        <h4>Author: ${details.author}</h4>
        <div class="buttons>
        ${isLiked == 0 ? html`<a class="btn-like" href="#" @click=${like}>Like</a>`: null}
        </div>
        <p class="likes">Likes: ${likes}</p>
    </div>
</div>
</section>
`;


const guestTemplate = (details,likes) => html`
<section id="detailsPage">
<div id="detailsBox">
    <div class="detailsInfo">
        <h1>Title: ${details.title}</h1>
        <div>
            <img src="${details.imageUrl}"/>
        </div>
    </div>

    <div class="details">
        <h3>Theater Description</h3>
        <p>${details.description}</p>
        <h4>Date: ${details.date}</h4>
        <h4>Author: ${details.author}</h4>
        <p class="likes">Likes: ${likes}</p>
    </div>
</div>
</section>
`;