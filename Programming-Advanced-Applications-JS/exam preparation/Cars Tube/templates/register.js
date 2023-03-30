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
    const repeatPass = data.get('repeatPass');
    if(!username || !password || !repeatPass){
        return alert('all')
    }
    if(password != repeatPass){
        return('passwords')
    }
    const response = await post('/users/register',{username, password});
    sessionStorage.setItem('userData', JSON.stringify(response));
    page.redirect('/'); // to do replace redirect with all listings
}



export function renderRegister(){
    render(template(),main);
}


const template = ()=> html`
<section id="register">
<div class="container">
    <form id="register-form" @submit=${onSubmit}>
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr>

        <p>Username</p>
        <input type="text" placeholder="Enter Username" name="username" required>

        <p>Password</p>
        <input type="password" placeholder="Enter Password" name="password" required>

        <p>Repeat Password</p>
        <input type="password" placeholder="Repeat Password" name="repeatPass" required>
        <hr>

        <input type="submit" class="registerbtn" value="Register">
    </form>
    <div class="signin">
        <p>Already have an account?
            <a href="/login">Sign in</a>.
        </p>
    </div>
</div>
</section>
`;