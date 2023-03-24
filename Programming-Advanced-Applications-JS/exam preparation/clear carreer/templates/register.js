import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { updateNav } from './navigation.js';
import { post } from '../api.js';
const main = document.querySelector('main');


const template = () => html`
<section id="register">
    <div class="form">
    <h2>Register</h2>
    <form class="login-form" @submit="${onSubmit}">
        <input type="text" name="email" id="register-email" placeholder="email"/>
        <input type="password" name="password" id="register-password" placeholder="password"/>
        <input type="password" name="re-password" id="repeat-password" placeholder="repeat password"/>
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
    </form>
    </div>
</section>
`

export function renderRegister(){
    render(template(),main);
}

async function onSubmit(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get('email');
    const password = data.get('password');
    const repass = data.get('re-password');
    if(!email || !password || !repass){
        return alert('All field must be filled!');
    }
    if(password !== repass){
        return alert('Passwords must be same!');
    }
    const object = {
        "email" : email,
        "password" : password
    }
    const response = await post('/users/register',object);
    sessionStorage.setItem('userData', JSON.stringify(response));
    updateNav();
    page.redirect('/dashboard');
}