import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const main = document.querySelector('main');
const header = document.querySelector('header');
import { post } from '../api.js';

export function renderRegister() {
    render(template(), main);
}
async function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get('email');
    const password = data.get('password');
    const rePass = data.get('conf-pass');
    if (!email || !password || !rePass) {
        return alert('all must');
    }
    if(password !== rePass){
        return alert('must match')
    }

    const response = await post('/users/register',{email,password});
    sessionStorage.setItem('userData',JSON.stringify({email,password}));
    page.redirect('/');
}
const template = () => html`
<section id="registerPage">
<form @submit=${onSubmit}>
    <fieldset>
        <legend>Register</legend>

        <label for="email" class="vhide">Email</label>
        <input id="email" class="email" name="email" type="text" placeholder="Email">

        <label for="password" class="vhide">Password</label>
        <input id="password" class="password" name="password" type="password" placeholder="Password">

        <label for="conf-pass" class="vhide">Confirm Password:</label>
        <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

        <button type="submit" class="register">Register</button>

        <p class="field">
            <span>If you already have profile click <a href="#">here</a></span>
        </p>
    </fieldset>
</form>
</section>
`;