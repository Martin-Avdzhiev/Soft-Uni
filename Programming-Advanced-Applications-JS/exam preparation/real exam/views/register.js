import { render, html } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { post } from '../api.js';
const main = document.querySelector('main');

export function registerPage() {
  render(html`<section id="register">
    <div class="form">
      <h2>Register</h2>
      <form class="register-form" @submit=${registerSubmit}>
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
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
      </form>
    </div>
    </section>`, main);
}

async function registerSubmit(event) {
  event.preventDefault();
  const fields = new FormData(event.target);
  const email = fields.get('email');
  const password = fields.get('password');
  const rePass = fields.get('re-password');
  if (password !== rePass) {
    return alert('passwords must be the same!')
  }
  if (!email || !password) {
    return alert('all fields are required!');
  }
  const register = await post('/users/register', { email, password });
  sessionStorage.setItem('userData', JSON.stringify(register));
  page.redirect('/');
}
