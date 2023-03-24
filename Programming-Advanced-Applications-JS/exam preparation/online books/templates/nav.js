import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const header = document.querySelector('header');
const main = document.querySelector('main');
//sessionStorage.setItem('userData',JSON.stringify({email: "marto", pass: "123"}))
export function updateNav(){
    const user = JSON.parse(sessionStorage.getItem('userData'));
    if(user){
        render(userTemplate(user),header);
    }
    else {
        render(guestTemplate(),header);
    }
}

const guestTemplate = () => html`
<!-- Navigation -->
<nav class="navbar">
    <section class="navbar-dashboard">
        <a href="/">Dashboard</a>
        <!-- Guest users -->
        <div id="guest">
            <a class="button" href="/login">Login</a>
            <a class="button" href="/register">Register</a>
        </div>
    </section>
</nav>
`

const userTemplate = (user) => html`
<!-- Navigation -->
<nav class="navbar">
    <section class="navbar-dashboard">
        <a href="/">Dashboard</a>
        <!-- Logged-in users -->
        <div id="user">
            <span>Welcome, ${user.email}</span>
            <a class="button" href="/myBooks">My Books</a>
            <a class="button" href="/add">Add Book</a>
            <a class="button" href="/logout">Logout</a>
        </div>
    </section>
</nav>
`