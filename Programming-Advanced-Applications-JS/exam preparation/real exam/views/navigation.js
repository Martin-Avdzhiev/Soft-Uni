import { get } from '../api.js';
import { render, html } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const head = document.querySelectorAll('header')[0];

async function logout(event){
  event.preventDefault();
    const left = await get('/users/logout');
    sessionStorage.clear();
    page.redirect('/');
}

export function navigation(ctx,next){
    const boolean = sessionStorage.getItem('userData');
    if(boolean){
        render(html`
        <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.png" alt=""
        /></a>
        
        <nav>
          <div>
            <a href="/fruits">Fruits</a>
            <a href="/searchFruit">Search</a>
          </div>
          <div class="user">
            <a href="/create">Add Fruit</a>
            <a href="#" @click=${logout}>Logout</a>
          </div>
          </div>
        </nav>`,head);
    }
    else{
        render(html`<a id="logo" href="/"
        ><img id="logo-img" src="./images/logo.png" alt=""
      /></a>
      
      <nav>
        <div>
          <a href="/fruits">Fruits</a>
          <a href="/searchFruit">Search</a>
        </div>
      
        <!-- Guest users -->
        <div class="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
          
        </div>
      </nav>`,head);
    }
    next();
}
