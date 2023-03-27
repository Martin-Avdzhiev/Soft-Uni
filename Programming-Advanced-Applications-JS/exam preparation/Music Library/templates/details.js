import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { get, del, post } from '../api.js'
const main = document.querySelector('main');
const header = document.querySelector('header');

export async function getDetails(context){
    const id = context.params.id;
    const album = await get(`/data/albums/${id}`);
    const user = JSON.parse(sessionStorage.getItem('userData'));
    const likes = await get(`/data/likes?where=albumId%3D%22${id}%22&distinct=_ownerId&count`);
    if(user){
        const isLiked = await get(`/data/likes?where=albumId%3D%22${id}%22%20and%20_ownerId%3D%22${user._id}%22&count`)
        if(user._id == album._ownerId){
            render(ownerTemplate(album,likes),main);
        }
        else{
            render(notOwnerTemplate(album,likes,isLiked),main);
        }
    }
    else {
        render(guestTemplate(album,likes),main);
    }
}

export async function deleteAlbum(e){
    e.preventDefault();
    const id = e.target.parentNode.parentNode.parentNode.getAttribute('item');
    const sure = confirm('sure?');
    if(sure){
        const response = await del(`/data/albums/${id}`);
        page.redirect('/dashboard');
    }
}

async function like(e){
    e.preventDefault;
    const id = e.target.getAttribute('item');
    const response = await post('/data/likes', {albumId : id});
    page.redirect(`/details/${id}`);
}
const ownerTemplate = (album,likes) => html`
<section id="details" item="${album._id}">
<div id="details-wrapper">
    <p id="details-title">Album Details</p>
    <div id="img-wrapper">
        <img src="${album.imageUrl}" alt="example1"/>
    </div>
    <div id="info-wrapper">
        <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
        <p>
            <strong>Album name:</strong><span id="details-album">${album.album}</span>
        </p>
        <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
        <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
        <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
    </div>
    <div id="likes">Likes: <span id="likes-count">${likes}</span></div>

    <!--Edit and Delete are only for creator-->
    <div id="action-buttons">
        <a href="/details/${album._id}/edit" id="edit-btn">Edit</a>
        <a href="/delete" id="delete-btn" @click=${deleteAlbum}>Delete</a>
    </div>
</div>
</section>
`

const notOwnerTemplate = (album,likes,isLiked) => html`
<section id = "details" >
<div id="details-wrapper">
    <p id="details-title">Album Details</p>
    <div id="img-wrapper">
        <img src="${album.imageUrl}" alt="example1"/>
    </div>
    <div id="info-wrapper">
        <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
        <p>
            <strong>Album name:</strong><span id="details-album">${album.album}</span>
        </p>
        <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
        <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
        <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
    </div>
    <div id="likes">Likes: <span id="likes-count">${likes}</span></div>

    <!--Edit and Delete are only for creator-->
    <div id="action-buttons">
    ${isLiked == 0 ? html`<a href="javascript:void(0)" id="like-btn" @click=${like} item="${album._id}">Like</a>`:null}
    </div>
</div>
</section>
`


const guestTemplate = (album,likes) => html`
<section id = "details" >
<div id="details-wrapper">
    <p id="details-title">Album Details</p>
    <div id="img-wrapper">
        <img src="${album.imageUrl}" alt="example1"/>
    </div>
    <div id="info-wrapper">
        <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
        <p>
            <strong>Album name:</strong><span id="details-album">${album.album}</span>
        </p>
        <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
        <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
        <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
    </div>
    <div id="likes">Likes: <span id="likes-count">${likes}</span></div>

    <!--Edit and Delete are only for creator-->
    <div id="action-buttons">
    </div>
</div>
</section>
`

