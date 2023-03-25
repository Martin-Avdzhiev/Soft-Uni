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
    const repeatPassword = data.get('repeatPassword');
    if(!email || !password || !repeatPassword){
        return alert('all fields must be filled!');
    }
    if(repeatPassword != password){
        return alert('passwords dont match');
    }
    const response = await post('/users/register', {email, password});
    sessionStorage.setItem('userData', JSON.stringify(response));
    page.redirect('/');
}



export const registerRender = () => render(registerTemplate(),main);

const registerTemplate = () =>html`
<section id="register-page" class="auth">
<form id="register" @submit=${onSubmit}>
    <h1 class="title">Register</h1>

    <article class="input-group">
        <label for="register-email">Email: </label>
        <input type="email" id="register-email" name="email">
    </article>

    <article class="input-group">
        <label for="register-password">Password: </label>
        <input type="password" id="register-password" name="password">
    </article>

    <article class="input-group">
        <label for="repeat-password">Repeat Password: </label>
        <input type="password" id="repeat-password" name="repeatPassword">
    </article>

    <input type="submit" class="btn submit-btn" value="Register">
</form>
</section>
`