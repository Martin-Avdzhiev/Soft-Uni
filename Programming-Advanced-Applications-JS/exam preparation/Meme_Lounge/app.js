import { html, render } from './node_modules/lit-html/lit-html.js';
import page from './node_modules/page/page.mjs';
import { allMemes } from './templates/allMemesTemplate.js';
import { userTemplate,guestTemplate,welcomeTemplate } from './templates/navTemplate.js';
import { onClick, updateButtons } from './templates/detailsTemplate.js';
import { login } from './templates/loginTemplate.js';
import { register } from './templates/registerTemplate.js';
import { logout } from './templates/logoutTemplate.js';
const nav = document.querySelector('nav');
const main = document.querySelector('main');
updateNav();

page('/', updateNav);
page('/allMemes', allMemes);
page('/details', updateButtons);
page('/login', login);
page('/register', register);
page('/logout', logout);
page.start();


export function updateNav(){
    const user = localStorage.getItem('userData');
    console.log(user)
    if(user){
        render(userTemplate(user),nav);
        render(allMemes(),main);
    }
    else {
        render(guestTemplate(),nav);
        render(welcomeTemplate(),main);
    }
}