import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const main = document.querySelector('main');
const header = document.querySelector('header');
import { get } from '../api.js';


export async function getAlbums(){
    const albums = await get('/data/albums?sortBy=_createdOn%20desc&distinct=name');
    const user = sessionStorage.getItem('userData');
    if(albums.length > 0){
        if(user){
            render(template(albums),main);
        }
        else{
            render(guestTemplate(albums),main);
        }
    }
    else{
        render(noItemsTemplate(),main);
    }
}
const guestTemplate = (albums)=> html`
<section id="catalogPage">
    <h1>All Albums</h1>
    ${albums.map(album => html`
    <div class="card-box">
        <img src="${album.imgUrl}">
        <div>
            <div class="text-center">
                <p class="name">Name: ${album.name}</p>
                <p class="artist">Artist: ${album.artist}</p>
                <p class="genre">Genre: ${album.genre}</p>
                <p class="price">Price: ${album.price}</p>
                <p class="date">Release Date: ${album.releaseDate}</p>
            </div>
            <div class="btn-group">
            </div>
        </div>
    </div>
    `)}
    
</section>
`


const template = (albums)=> html`
<!--Catalog-->
<section id="catalogPage">
    <h1>All Albums</h1>
    ${albums.map(album => html`
    <div class="card-box">
        <img src="${album.imgUrl}">
        <div>
            <div class="text-center">
                <p class="name">Name: ${album.name}</p>
                <p class="artist">Artist: ${album.artist}</p>
                <p class="genre">Genre: ${album.genre}</p>
                <p class="price">Price: ${album.price}</p>
                <p class="date">Release Date: ${album.releaseDate}</p>
            </div>
            <div class="btn-group">
                <a href="/details/${album._id}" id="details">Details</a>
            </div>
        </div>
    </div>
    `)}
    
</section>
`;

const noItemsTemplate = ()=> html`
<!--Catalog-->
<section id="catalogPage">
    <h1>All Albums</h1>
    <p>No Albums in Catalog!</p>
</section>
`;