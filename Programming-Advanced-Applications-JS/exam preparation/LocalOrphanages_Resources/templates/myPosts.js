import { get } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { updateNav } from './nav.js';
const header = document.querySelector('header');
const main = document.querySelector('main');


export async function renderMyPosts(context){
    const id = JSON.parse(sessionStorage.getItem('userData'))._id;
    const response = await get(`/data/posts?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`);
    if(response.length > 0){
        render(myPoststTemplate(response),main);
    }
    else {
        render(noPostsTemplate(),main);
    }
}

const noPostsTemplate = () => html`
<section id="my-posts-page">
<h1 class="title">My Posts</h1>
<h1 class="title no-posts-title">You have no posts yet!</h1>
</section>
`;

const myPoststTemplate = (response) => html`
<section id="my-posts-page">
<h1 class="title">My Posts</h1>
<div class="my-posts">
${response.map(post => html`
    <div class="post" item="${post._id}">
        <h2 class="post-title">${post.title}</h2>
        <img class="post-image" src="${post.imageUrl}" alt="Material Image">
        <div class="btn-wrapper">
            <a href="/details/${post._id}" class="details-btn btn">Details</a>
        </div>
    </div>
`)}
</div>
</section>
`;