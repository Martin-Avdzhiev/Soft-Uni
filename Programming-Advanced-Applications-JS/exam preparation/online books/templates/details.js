import { del, get, post } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { updateNav } from './nav.js';
const header = document.querySelector('header');
const main = document.querySelector('main');

export async function getDetails(context){
    updateNav();
    const id = context.params.id;
    const book = await get(`/data/books/${id}`);
    const user = JSON.parse(sessionStorage.getItem('userData'));
    if(user){
        if(user._id == book._ownerId){
            render(ownertemplate(book),main);
        }
        else {
            render(notOwnerTemplate(book),main);
        }
    }
    else {
        render(guestTemplate(book),main);
    }
}

async function delBook(e){
    e.preventDefault();
    const id = e.target.parentNode.parentNode.parentNode.getAttribute('item');
    const sure = confirm('Are you sure?');
    if(sure){
        const response = await del(`/data/books/${id}`);
        page.redirect('/');
    }
    
}

const ownertemplate = (book) => html`
<!-- Details Page ( for Guests and Users ) -->
<section id="details-page" class="details" item="${book._id}">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src="${book.imageUrl}"></p>
        <div class="actions">
            <!-- Edit/Delete buttons ( Only for creator of this book )  -->
            <a class="button" href="/details/${book._id}/edit">Edit</a>
            <a class="button" href="/delete" @click=${delBook}>Delete</a>
            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: 0</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>
`
const notOwnerTemplate = (book) => html`
<!-- Details Page ( for Guests and Users ) -->
<section id="details-page" class="details" item="${book._id}">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src="${book.imageUrl}"></p>
        <div class="actions">
            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
            <a class="button" href="#">Like</a>

            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: 0</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>
`

const guestTemplate = (book) => html`
<!-- Details Page ( for Guests and Users ) -->
<section id="details-page" class="details" item="${book._id}">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src="${book.imageUrl}"></p>
        <div class="actions">
            <!-- Bonus -->
            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: 0</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>
`