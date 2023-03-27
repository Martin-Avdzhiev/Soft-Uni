import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const main = document.querySelector('main');
const header = document.querySelector('header');
import { get, post } from '../api.js';

export async function logout(){
    const response = await get('/users/logout');
    sessionStorage.clear();
    page.redirect('/');
}