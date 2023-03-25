import { post } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const header = document.querySelector('header');
const main = document.querySelector('main');

async function onSubmit(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get('email');
    const password = data.get('password');
    if(!email || !password){
        return alert('all fields must be filled!');
    }
    const response = await post('/users/login', {email, password});
    sessionStorage.setItem('userData', JSON.stringify(response));
    page.redirect('/');
}



export const loginRender = () => render(loginTemplate(),main);

const loginTemplate = () =>html`
<section id="login-page" class="auth">
<form id="login" @submit=${onSubmit}>
    <h1 class="title">Login</h1>

    <article class="input-group">
        <label for="login-email">Email: </label>
        <input type="email" id="login-email" name="email">
    </article>

    <article class="input-group">
        <label for="password">Password: </label>
        <input type="password" id="password" name="password">
    </article>

    <input type="submit" class="btn submit-btn" value="Log In">
</form>
</section>
`