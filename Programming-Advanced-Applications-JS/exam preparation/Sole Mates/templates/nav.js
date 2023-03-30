import { get } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const header = document.querySelector('header');
const main = document.querySelector('main');


export function updateNav(context,next){
    let user = sessionStorage.getItem('userData');
    if(user){
        render(template(),header);
    }
    else{
        render(guestTemplate(),header);
    }
    next();
}
async function onClick(e){
    e.preventDefault();
    const response = await get('/users/logout');
    sessionStorage.clear();
    page.redirect('/dashboard');
}
const template = ()=> html`
<a id="logo" href="/"
><img id="logo-img" src="./images/logo.png" alt=""
/></a>

<nav>
<div>
  <a href="/dashboard">Dashboard</a>
  <a href="/search">Search</a>
</div>

<!-- Logged-in users -->
<div class="user">
  <a href="/create">Add Pair</a>
  <a href="#" @click=${onClick}>Logout</a>
</div>
</nav>
`;


const guestTemplate = ()=> html`
<a id="logo" href="/"
><img id="logo-img" src="./images/logo.png" alt=""
/></a>

<nav>
<div>
  <a href="/dashboard">Dashboard</a>
  <a href="/search">Search</a>
</div>

<!-- Guest users -->
<div class="guest">
  <a href="/login">Login</a>
  <a href="/register">Register</a>
</div>
</nav>
`;