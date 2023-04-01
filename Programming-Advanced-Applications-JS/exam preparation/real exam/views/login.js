
import { post } from '../api.js';
import { render, html } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

const main = document.querySelectorAll('main')[0];


export function loginPage(){
    render(html`<section id="login">
    <div class="form">
      <h2>Login</h2>
      <form class="login-form" @submit="${submit}">
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit">login</button>
        <p class="message">
          Not registered? <a href="/register">Create an account</a>
        </p>
      </form>
    </div>
    </section>`,main);
}

async function submit(event){
    event.preventDefault();
    const fields = new FormData(event.target);
    const email = fields.get('email');
    const password = fields.get('password');
    if(!email || !password){
        return alert('all fields are required!');
    }
    const login = await post('/users/login', { email, password });
    sessionStorage.setItem('userData', JSON.stringify(login));
    page.redirect('/');
}