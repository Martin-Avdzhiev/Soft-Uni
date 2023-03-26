import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { get, put, del } from '../api.js';
const header = document.querySelector('header');
const main = document.querySelector('main');

export async function delEvent(context){
    const id = context.params.id;
    const sure = confirm('are u sure');
    if(sure){
        const response = await del(`/data/theaters/${id}`);
        page.redirect('/profile');
    }
}