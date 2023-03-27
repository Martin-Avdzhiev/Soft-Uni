import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const main = document.querySelector('main');
const header = document.querySelector('header');
import { del, get } from '../api.js';

export async function getDetails(context){
    const id = context.params.id;
    const item = await get(`/data/albums/${id}`);
    const user = JSON.parse(sessionStorage.getItem('userData'));
    if(user){
        if(user._id == item._ownerId){
            render(ownerTemplate(item),main);
        }
        else{
            render(notOwnerTemplate(item),main);
        }
    }
    else{
        render(notOwnerTemplate(item),main);
    }
}

async function delAlbum(e){
    e.preventDefault();
    const id = e.target.getAttribute('item');
    const sure = confirm('are y sure?');
    if(sure){
        const response = await del(`/data/albums/${id}`);
        page.redirect('/catalog');
    }

}
const ownerTemplate = (item)=> html`
<section id="detailsPage">
<div class="wrapper">
    <div class="albumCover">
        <img src="${item.imgUrl}">
    </div>
    <div class="albumInfo">
        <div class="albumText">

            <h1>Name: ${item.name}</h1>
            <h3>Artist: ${item.artist}</h3>
            <h4>Genre: ${item.genre}</h4>
            <h4>Price: ${item.price}</h4>
            <h4>Date: ${item.releaseDate}</h4>
            <p>Description: ${item.description}</p>
        </div>

        <!-- Only for registered user and creator of the album-->
        <div class="actionBtn">
            <a href="/details/${item._id}/edit" class="edit">Edit</a>
            <a href="javascript:void(0)" class="remove" @click=${delAlbum} item="${item._id}">Delete</a>
        </div>
    </div>
</div>
</section>
`;

const notOwnerTemplate = (item)=> html`
<section id="detailsPage">
<div class="wrapper">
    <div class="albumCover">
        <img src="${item.imgUrl}">
    </div>
    <div class="albumInfo">
        <div class="albumText">

            <h1>Name: ${item.name}</h1>
            <h3>Artist: ${item.artist}</h3>
            <h4>Genre: ${item.genre}</h4>
            <h4>Price: ${item.price}</h4>
            <h4>Date: ${item.releaseDate}</h4>
            <p>Description: ${item.description}</p>
        </div>

        <!-- Only for registered user and creator of the album-->
        <div class="actionBtn">
        </div>
    </div>
</div>
</section>
`;
