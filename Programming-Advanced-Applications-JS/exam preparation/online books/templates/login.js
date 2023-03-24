import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { post } from '../api.js';
import { updateNav } from './nav.js';
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
    const response = await post('/users/login', {email , password});
    sessionStorage.setItem('userData', JSON.stringify(response));

    page.redirect('/');
    updateNav();
}
///users/login
export const renderLogin = () =>{
    render(loginTemplate(),main);
    updateNav();
}
const loginTemplate = () => html`
<section id="login-page" class="login">
<form id="login-form" action="" method="" @submit=${onSubmit}>
    <fieldset>
        <legend>Login Form</legend>
        <p class="field">
            <label for="email">Email</label>
            <span class="input">
                <input type="text" name="email" id="email" placeholder="Email">
            </span>
        </p>
        <p class="field">
            <label for="password">Password</label>
            <span class="input">
                <input type="password" name="password" id="password" placeholder="Password">
            </span>
        </p>
        <input class="button submit" type="submit" value="Login">
    </fieldset>
</form>
</section>
`