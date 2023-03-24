import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { del } from '../api.js';
const main = document.querySelector('main');

export async function deleteItem(e) {
    e.preventDefault();
    const item = e.target.parentNode.parentNode;
    const id = item.getAttribute('current-id');
    console.log(id)
    let confirm1
    confirm1 = confirm('Are you sure');
    if (confirm1) {
        const response = await del(`/data/offers/${id}`);
        page.redirect('/dashboard');
    }
}

