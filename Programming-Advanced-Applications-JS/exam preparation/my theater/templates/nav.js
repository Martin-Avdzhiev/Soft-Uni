import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

const header = document.querySelector('header');
const main = document.querySelector('main');

export async function updateNav(context,next){
    const user = sessionStorage.getItem('userData');
    if(user){
        render(userNavTemplate(),header);
    }
    else{
        render(guestNavTemplate(),header);
    }
    next();
}

const userNavTemplate = ()=> html`
<nav>
<a href="/">Theater</a>
<ul>
    <!--Only users-->
    <li><a href="/profile">Profile</a></li>
    <li><a href="/create">Create Event</a></li>
    <li><a href="/logout">Logout</a></li>
</ul>
</nav>
`;

const guestNavTemplate = () => html`
<nav>
<a href="/">Theater</a>
<ul>
    <!--Only guest-->
    <li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>
</ul>
</nav>
`;