import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

const header = document.querySelector('header');
export function updateNav(context,next){
    const user = JSON.parse(sessionStorage.getItem('userData'));
    if(user){
        render(userTemplate(),header);
    }
    else{
        render(noUserTemplate(),header);
    }
    next();
}
const noUserTemplate = () => html`
<a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

      <nav>
        <div>
          <a href="/dashboard">Dashboard</a>
        </div>
        <!-- Guest users -->
        <div class="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </nav>
`;

const userTemplate = () => html`
<a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

      <nav>
        <div>
          <a href="/dashboard">Dashboard</a>
        </div>

        <!-- Logged-in users -->
        <div class="user">
          <a href="/create">Add Album</a>
          <a href="/logout">Logout</a>
        </div>
      </nav>
`;