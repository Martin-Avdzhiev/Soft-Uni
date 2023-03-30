import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { post } from '../api.js';
const main = document.querySelector('main');
const header = document.querySelector('header');


async function onSubmit(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const username = data.get('username');
    const password = data.get('password');
    if(!username || !password){
        return alert('all')
    }
    const response = await post('/users/login',{username, password});
    sessionStorage.setItem('userData', JSON.stringify(response));
    page.redirect('/'); // to do replace redirect with all listings
}


export function renderLogin(){
    render(template(),main);
}


const template = ()=> html`
<section id="login">
<div class="container">
    <form id="login-form" action="#" method="post" @submit=${onSubmit}>
        <h1>Login</h1>
        <p>Please enter your credentials.</p>
        <hr>

        <p>Username</p>
        <input placeholder="Enter Username" name="username" type="text">

        <p>Password</p>
        <input type="password" placeholder="Enter Password" name="password">
        <input type="submit" class="registerbtn" value="Login">
    </form>
    <div class="signin">
        <p>Dont have an account?
            <a href="/register">Sign up</a>.
        </p>
    </div>
</div>
</section>
`;