import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { get, post } from '../api.js'
const main = document.querySelector('main');
const header = document.querySelector('header');

export function renderLogin(){
    render(template(),main);
}
const template = () => html`
<section id="login">
<div class="form">
  <h2>Login</h2>
  <form class="login-form" @submit=${onSubmit}>
    <input type="text" name="email" id="email" placeholder="email" />
    <input type="password" name="password" id="password" placeholder="password" />
    <button type="submit">login</button>
    <p class="message">
      Not registered? <a href="/register">Create an account</a>
    </p>
  </form>
</div>
</section>
`;

async function onSubmit(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get('email');
    const password = data.get('password');
    if(!email || !password){
        return alert('all need')
    }
    const response = await post('/users/login', {email, password});
    sessionStorage.setItem('userData', JSON.stringify(response));
    page.redirect('/dashboard');
}