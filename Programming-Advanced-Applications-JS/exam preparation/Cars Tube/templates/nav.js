import { get } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const main = document.querySelector('main');
const header = document.querySelector('header');


async function logout(e){
    e.preventDefault();
    const response = await get('/users/logout');
    sessionStorage.clear();
    page.redirect('/')
}
export function navUpdate(context,next){
    const user = sessionStorage.getItem('userData');
    if(user){
        render(template(JSON.parse(user)),header);
    }
    else{
        render(noUserTemplate(),header);
    }
    next();
}
const template = (user) => html`
<nav>
<a class="active" href="/">Home</a>
<a href="/all">All Listings</a>
<a href="/year">By Year</a>
<!-- Logged users -->
<div id="profile">
    <a>Welcome ${user.username}</a>
    <a href="/listings">My Listings</a>
    <a href="/create">Create Listing</a>
    <a href="#" @click=${logout}>Logout</a>
</div>
</nav>
`;

const noUserTemplate = () => html`
<nav>
<a class="active" href="/">Home</a>
<a href="/all">All Listings</a>
<a href="/year">By Year</a>
<!-- Guest users -->
<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>
</nav>
`