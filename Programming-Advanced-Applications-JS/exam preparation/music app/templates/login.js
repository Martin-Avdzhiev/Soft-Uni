import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const main = document.querySelector('main');
const header = document.querySelector('header');
import { post } from '../api.js';

export function renderLogin() {
    render(template(), main);
}
async function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get('email');
    const password = data.get('password');
    if (!email || !password) {
        return alert('all must');
    }
    const response = await post('/users/login',{email,password});
    sessionStorage.setItem('userData',JSON.stringify(response));
    page.redirect('/');
}
const template = () => html`
<section id="loginPage">
<form @submit=${onSubmit}>
    <fieldset>
        <legend>Login</legend>

        <label for="email" class="vhide">Email</label>
        <input id="email" class="email" name="email" type="text" placeholder="Email">

        <label for="password" class="vhide">Password</label>
        <input id="password" class="password" name="password" type="password" placeholder="Password">

        <button type="submit" class="login">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
    </fieldset>
</form>
</section>
`;
