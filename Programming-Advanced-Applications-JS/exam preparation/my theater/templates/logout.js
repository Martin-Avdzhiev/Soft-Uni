import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { get } from '../api.js';
import { updateNav } from './nav.js';
const header = document.querySelector('header');
const main = document.querySelector('main');

export async function logout(){
    const response = get('/users/logout');
    sessionStorage.clear();
    page.redirect('/');
}


