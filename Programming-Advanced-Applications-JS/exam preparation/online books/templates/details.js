import { del, get, post } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { updateNav } from './nav.js';

const header = document.querySelector('header');
const main = document.querySelector('main');

const likes = {
    like: '/data/likes',
    bookLikes: (id) => `/data/likes?where=bookId%3D%22${id}%22&distinct=_ownerId&count`,
    isLiked: (bookId, id) => `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${id}%22&count`
}
export async function getDetails(context){
    updateNav();
    const id = context.params.id;
    const book = await get(`/data/books/${id}`);
    const user = JSON.parse(sessionStorage.getItem('userData'));
    const number = await get(likes.bookLikes(id));
    if(user){
        if(user._id == book._ownerId){
            
            render(ownertemplate(book, number),main);
        }
        else {
            const isLiked2 = await get(likes.isLiked(id,user._id));
            render(notOwnerTemplate(book, number,isLiked2),main);
        }
    }
    else {
        render(guestTemplate(book,number),main);
    }
}

async function likeBook(e){
    e.preventDefault();
    const id = e.target.parentNode.parentNode.parentNode.getAttribute('item');
    const reponse = await post(likes.like,{ bookId: id });
    page.redirect(`/details/${id}`);
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

const ownertemplate = (book,number) => html`
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
                <span id="total-likes">Likes: ${number}</span>
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
const notOwnerTemplate = (book,number, isLiked) => html`
<!-- Details Page ( for Guests and Users ) -->
<section id="details-page" class="details" item="${book._id}">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src="${book.imageUrl}"></p>
        <div class="actions">
            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
            ${isLiked == 0 ? html`<a class="button" href="/details/${book._id}" @click=${likeBook}>Like</a>`: null}
            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${number}</span>
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

const guestTemplate = (book,number) => html`
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
                <span id="total-likes">Likes: ${number}</span>
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