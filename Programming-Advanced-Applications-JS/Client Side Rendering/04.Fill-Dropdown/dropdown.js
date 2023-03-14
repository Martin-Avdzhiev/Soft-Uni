import { html, render } from './node_modules/lit-html/lit-html.js';
import { get, post } from './responses.js';
const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
const menu = document.getElementById('menu');
const input = document.getElementById('itemText');
const button = document.querySelector('input[value="Add"]');
button.addEventListener('click', addItem);
async function addItem(e) {
    e.preventDefault();
    if (!input.value) {
        return alert('You must enter text!');
    }
    const object = { text: input.value }
    await post(object);
    load();
}

const optionTemplate = (item) => {
    return html`<option value="${item._id}" .textContent="${item.text}"></option>`;
}

const renderring = (items) => {
    const result = items.map(item => optionTemplate(item));
    render(result, menu);
}

async function load() {
    const data = await get();
    renderring(data);
}
load()