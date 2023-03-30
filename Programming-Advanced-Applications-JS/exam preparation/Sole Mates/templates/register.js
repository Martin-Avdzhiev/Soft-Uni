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
    const rePass = data.get('re-password')
    if(!email || !password || !rePass){
        return alert('all');
    }
    if(password != rePass){
        return alert('passwords')
    }
    const response = await post('/users/register', {email,password});
    sessionStorage.setItem('userData',JSON.stringify(response));
    page.redirect('/dashboard') // to redirect to dashboard
}

const template = ()=> html`
<section id="register">
<div class="form">
  <h2>Register</h2>
  <form class="login-form" @submit=${onSubmit}>
    <input
      type="text"
      name="email"
      id="register-email"
      placeholder="email"
    />
    <input
      type="password"
      name="password"
      id="register-password"
      placeholder="password"
    />
    <input
      type="password"
      name="re-password"
      id="repeat-password"
      placeholder="repeat password"
    />
    <button type="submit">login</button>
    <p class="message">Already registered? <a href="/login">Login</a></p>
  </form>
</div>
</section>
`;