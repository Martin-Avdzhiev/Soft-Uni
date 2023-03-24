import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { updateNav } from './navigation.js';
import { post } from '../api.js';
const main = document.querySelector('main');

const template = () => html`
    <div class="form">
        <h2>Login</h2>
        <form class="login-form" @submit="${onSumbit}">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password"/>
            <button type="submit">login</button>
            <p class="message">
            Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
    </div>
</section>
`
export function renderLogin(){
    render(template(),main);
}

async function onSumbit(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get('email');
    const password = data.get('password');
    if(!email || !password){
        return alert('all fields must be filled!');
    }
    const object = {
        "email" : email,
        "password" : password
    }
    const response = await post('/users/login',object);
    sessionStorage.setItem('userData', JSON.stringify(response));
    updateNav();
    page.redirect('/dashboard');
}