import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { get } from '../api.js';
import { updateNav } from '../app.js';

export async function logout(){
    const response = await get('/users/logout');
    localStorage.clear();
    page.redirect('/');
}