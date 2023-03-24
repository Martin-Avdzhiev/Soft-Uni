import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { post } from '../api.js';
import { updateNav } from '../app.js';
const nav = document.querySelector('nav');
const main = document.querySelector('main');

export function register() {
    render(template(), main);
}

const template = () => html`
<section id="register" @submit="${onSubmit}">
    <form id="register-form">
        <div class="container">
            <h1>Register</h1>
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Enter Username" name="username">
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Enter Email" name="email">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <label for="repeatPass">Repeat Password</label>
            <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
            <div class="gender">
                <input type="radio" name="gender" id="female" value="female">
                <label for="female">Female</label>
                <input type="radio" name="gender" id="male" value="male" checked>
                <label for="male">Male</label>
            </div>
            <input type="submit" class="registerbtn button" value="Register">
            <div class="container signin">
                <p>Already have an account?<a href="/login">Sign in</a>.</p>
            </div>
        </div>
    </form>
</section>
`

async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const username = form.get('username');
    const email = form.get('email');
    const password = form.get('password');;
    const rePass = form.get('repeatPass');
    const gender = form.get('gender');
    const userData = {
        'username':username,
        'password':password,
        'email': email,
        'gender':gender
    }
    if (!username || !email || !password || !rePass || !gender) {
        return alert('Please fill all fields!');
    }
    if (password != rePass) {
        return alert('Passwords are not same!');
    }
    const response = await post('/users/register', userData);

    console.log(JSON.stringify({ response }))
    if (response) {
        
        localStorage.setItem('userData', JSON.stringify({ userData }));
        page.redirect('/allMemes');
    }
}