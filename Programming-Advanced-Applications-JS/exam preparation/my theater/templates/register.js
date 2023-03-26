import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { post } from '../api.js';
const header = document.querySelector('header');
const main = document.querySelector('main');

export function renderRegister(){
    render(template(),main);
}

async function onSubmit(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get('email');
    const password = data.get('password');
    const repeatPassword = data.get('repeatPassword');
    if(!email || !password || !repeatPassword){
        return alert('all fields must be filled!');
    }
    if(password != repeatPassword){
        return alert('passwords must be the same!');
    }
    const response = await post('/users/register', {email, password});
    sessionStorage.setItem('userData', JSON.stringify(response));
    page.redirect('/');
}

const template = ()=> html`
<section id="registerPage">
<form class="registerForm" @submit=${onSubmit}>
    <h2>Register</h2>
    <div class="on-dark">
        <label for="email">Email:</label>
        <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
    </div>

    <div class="on-dark">
        <label for="password">Password:</label>
        <input id="password" name="password" type="password" placeholder="********" value="">
    </div>

    <div class="on-dark">
        <label for="repeatPassword">Repeat Password:</label>
        <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
    </div>

    <button class="btn" type="submit">Register</button>

    <p class="field">
        <span>If you have profile click <a href="/login">here</a></span>
    </p>
</form>
</section>
`;