import { get, post } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { updateNav } from './nav.js';
const header = document.querySelector('header');
const main = document.querySelector('main');

export async function renderMyBooks(){
    const user = JSON.parse(sessionStorage.getItem('userData'));
    const id = user._id;
    const books = await get(`/data/books?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`);
    updateNav();
    if(books.length > 0){
        render(template(books),main);
    }
    else {
        render(noBooks(),main)
    }
}

const template = (myBooks) =>html`
        <section id="my-books-page" class="my-books">
            <h1>My Books</h1>
            <!-- Display ul: with list-items for every user's books (if any) -->
            <ul class="my-books-list">
            ${myBooks.map(book => html`
            <li class="otherBooks" book-id="${book._id}">
                    <h3>${book.title}</h3>
                    <p>Type: ${book.type}</p>
                    <p class="img"><img src="${book.imageUrl}"></p>
                    <a class="button" href="/details/${book._id}" @click=${onClick}">Details</a>
            </li>`)}
            </ul>
        </section>
`


function onClick(e){
    e.preventDefault();
    const id = e.target.parentNode.getAttribute('book-id')
    page.redirect(`/details/${id}`);
}


const noBooks = ()=> html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <p class="no-books">No books in database!</p>
</section>
`