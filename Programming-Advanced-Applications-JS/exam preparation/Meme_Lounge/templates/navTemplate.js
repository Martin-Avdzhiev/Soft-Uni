import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { allMemes } from './allMemesTemplate.js';
const nav = document.querySelector('nav');
const main = document.querySelector('main');





export const userTemplate = (user) => html`
<div class="user">
    <a href="/allMemes">All memes</a>
    <a href="#">Create Meme</a>
    <div class="profile">
        <span>Welcome, ${user.email}</span>
        <a href="#">My Profile</a>
        <a href="/logout">Logout</a>
    </div>
</div>
`

export const guestTemplate = () => html`
<div class="guest">
    <div class="profile">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
    <a class="active" href="/">Home Page</a>
    <a href="/allMemes">All memes</a>
</div>
`


//only for guests!!!
export const welcomeTemplate = ()=> html`
<div id="welcome-container">
    <h1>Welcome To Meme Lounge</h1>
    <img src="/images/welcome-meme.jpg" alt="meme">
    <h2>Login to see our memes right away!</h2>
    <div id="button-div">
        <a href="/login" class="button">Login</a>
        <a href="/register" class="button">Register</a>
    </div>
</div>
`

