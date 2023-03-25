import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const header = document.querySelector('header');
const main = document.querySelector('main');

export async function updateNav(){
    const user = sessionStorage.getItem('userData');
    if(user){
        render(userTemplate(),header);
    }
    else {
        render(guestTemplate(),header);
    }
}
const userTemplate = () => html`
<h1><a href="/">Orphelp</a></h1>
<nav>
    <a href="/">Dashboard</a>
    <div id="user">
        <a href="/myPosts">My Posts</a>
        <a href="/create">Create Post</a>
        <a href="/logout">Logout</a>
    </div>
</nav>
`

const guestTemplate = () => html`
<h1><a href="/">Orphelp</a></h1>
<nav>
    <a href="/">Dashboard</a>
    <div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
</nav>
`