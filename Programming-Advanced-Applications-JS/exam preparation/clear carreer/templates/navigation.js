import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { renderHome } from './home.js';
const header = document.querySelector('header');

const guestTemplate = () => html`
<a id="logo" href="/">
    <img id="logo-img" src="../images/logo.jpg" alt=""/>
</a>
<nav>
<div>
  <a href="/dashboard">Dashboard</a>
</div>
<div class="guest">
  <a href="/login">Login</a>
  <a href="/register">Register</a>
</div>
</nav>
`

const userTemplate = () => html `
<a id="logo" href="/">
    <img id="logo-img" src="../images/logo.jpg" alt=""/>
</a>
<nav>
<div>
    <a href="/dashboard">Dashboard</a>
</div>
<div class="user">
    <a href="/create">Create Offer</a>
    <a href="/logout">Logout</a>
</div>
</nav>
`

export async function updateNav(){
    const user = sessionStorage.getItem('userData');
    if(user){
        render(userTemplate(),header);
    }
    else {
        render(guestTemplate(),header);
    }
}

