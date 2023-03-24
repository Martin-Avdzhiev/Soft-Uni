import { post } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { updateNav } from './nav.js';
const header = document.querySelector('header');
const main = document.querySelector('main');


async function onSubmit(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get('email');
    const password = data.get('password');
    const rePass = data.get('confirm-pass');
    if(!email || !password || !rePass){
        return alert('all fields must be filled!');
    }
    if(password != rePass){
        return alert('not same passwords!')
    }
    const response = await post('/users/register', {email , password});
    sessionStorage.setItem('userData', JSON.stringify(response));
    updateNav();
    page.redirect('/');
    
}



export const renderRegister = () =>{
    render(registerTemplate(),main);
    updateNav();
}
const registerTemplate = ()=> html`
<!-- Register Page ( Only for Guest users ) -->
        <section id="register-page" class="register">
            <form id="register-form" action="" method="" @submit=${onSubmit}>
                <fieldset>
                    <legend>Register Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <p class="field">
                        <label for="repeat-pass">Repeat Password</label>
                        <span class="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Register">
                </fieldset>
            </form>
        </section>
`