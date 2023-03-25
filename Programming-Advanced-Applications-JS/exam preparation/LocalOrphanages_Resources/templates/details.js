import { del, get, post } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const header = document.querySelector('header');
const main = document.querySelector('main');


export async function getDetails(context){
    const id = context.params.id;
    const item = await get(`/data/posts/${id}`);
    const user = JSON.parse(sessionStorage.getItem('userData'));
    const postDonations = await get(`/data/donations?where=postId%3D%22${id}%22&distinct=_ownerId&count`);
    if(user){
        const isDonated = await get(`/data/donations?where=postId%3D%22${id}%22%20and%20_ownerId%3D%22${user._id}%22&count`)
        if(user._id == item._ownerId){
            render(ownerTemplate(item, postDonations),main); // TO DO DONATE
        }
        else {
            render(notOwnerTemplate(item,postDonations,isDonated),main); // TO DO DONATE
        }
    }
    else {
        render(guestTemplate(item,postDonations),main); // TO DO DONATE
    }
}

async function donate(e){
    e.preventDefault();
    const id = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('item');
    const response = await post('/data/donations', {postId: id});
    page.redirect(`/details/${id}`);
}

async function delPost(e){
    e.preventDefault();
    const id = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('item');
    const sure = confirm('are you sure?');
    if(sure){
        const response = await del(`/data/posts/${id}`);
        page.redirect('/');
    }
    
}

const ownerTemplate = (item, number) => html`
<section id="details-page" item="${item._id}">
<h1 class="title">Post Details</h1>

<div id="container">
    <div id="details">
        <div class="image-wrapper">
            <img src="${item.imageUrl}" class="post-image">
        </div>
        <div class="info">
            <h2 class="title post-title">${item.title}</h2>
            <p class="post-description">Description: ${item.description}</p>
            <p class="post-address">Address: ${item.address}</p>
            <p class="post-number">Phone number: ${item.phone}</p>
            <p class="donate-Item">Donate Materials: ${number}</p>

            <!--Edit and Delete are only for creator-->
            <div class="btns">
                <a href="/details/${item._id}/edit" class="edit-btn btn">Edit</a>
                <a href="#" class="delete-btn btn" @click="${delPost}">Delete</a>
            </div>

        </div>
    </div>
</div>
</section>

`;

const notOwnerTemplate = (item,donations,isDonated) => html`
<section id="details-page" item="${item._id}">
<h1 class="title">Post Details</h1>

<div id="container">
    <div id="details">
        <div class="image-wrapper">
            <img src="${item.imageUrl}" alt="Material Image" class="post-image">
        </div>
        <div class="info">
            <h2 class="title post-title">${item.title}</h2>
            <p class="post-description">Description: ${item.description}</p>
            <p class="post-address">Address: ${item.address}</p>
            <p class="post-number">Phone number: ${item.phone}</p>
            <p class="donate-Item">Donate Materials: ${donations}</p>
            <div class="btns">
                <!--Bonus - Only for logged-in users ( not authors )-->
                ${isDonated == 0 ? html`<a href="#" class="donate-btn btn" @click="${donate}">Donate</a>` :null}
            </div>

        </div>
    </div>
</div>
</section>

`;

const guestTemplate = (item,postDonations) => html`
<section id="details-page" item="${item._id}">
<h1 class="title">Post Details</h1>

<div id="container">
    <div id="details">
        <div class="image-wrapper">
            <img src="${item.imageUrl}" alt="Material Image" class="post-image">
        </div>
        <div class="info">
            <h2 class="title post-title">${item.title}</h2>
            <p class="post-description">Description: ${item.description}</p>
            <p class="post-address">Address: ${item.address}</p>
            <p class="post-number">Phone number: ${item.phone}</p>
            <p class="donate-Item">Donate Materials: ${postDonations}</p>
        </div>
    </div>
</div>
</section>
`;