import { get } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { updateNav } from './nav.js';
const header = document.querySelector('header');
const main = document.querySelector('main');

export async function dashboardRender(){
    updateNav();
    const posts = await get('/data/posts?sortBy=_createdOn%20desc');
    if(posts.length > 0){
        render(dashboardTemplate(posts),main);
    }
    else {
        render(noPostsTemplate(),main);
    }
}

const dashboardTemplate = (posts)=>html`
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>
    <div class="all-posts">
    ${posts.map(post => html`
    <div class="post" id="${post._id}">
            <h2 class="post-title">${post.title}</h2>
            <img class="post-image" src="${post.imageUrl}">
            <div class="btn-wrapper">
                <a href="/details/${post._id}" class="details-btn btn">Details</a>
            </div>
    </div>
    `)}
    </div>
</section>
`;



const noPostsTemplate = () => html`
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>
    <h1 class="title no-posts-title">No posts yet!</h1>
</section>
`