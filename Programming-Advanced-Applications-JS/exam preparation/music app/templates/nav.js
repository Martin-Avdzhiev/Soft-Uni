import { get } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const main = document.querySelector('main');
const header = document.querySelector('header');



export function updateNav(context, next){
    const user = JSON.parse(sessionStorage.getItem('userData'));
    if(user){
        render(template(),header);
    }
    else{
        render(guestTemplate(),header);
    }
    next();
}
const template = () => html`
<nav>
<img src="./images/headphones.png">
<a href="/">Home</a>
<ul>
    <!--All user-->
    <li><a href="/catalog">Catalog</a></li>
    <li><a href="/search" @click=${onClick}>Search</a></li>
    <!--Only user-->
    <li><a href="/create">Create Album</a></li>
    <li><a href="/logout">Logout</a></li>
</ul>
</nav>
`;

const guestTemplate = () => html`
<nav>
<img src="./images/headphones.png">
<a href="/">Home</a>
<ul>
    <!--All user-->
    <li><a href="/catalog">Catalog</a></li>
    <li><a href="/search" @click=${onClick}>Search</a></li>
    <!--Only guest-->
    <li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>
</ul>
</nav>
`;


function onClick(e){
    e.preventDefault();
    render(searchTemplate(),main);
}


const searchTemplate = ()=> html`
<section id="searchPage">
<h1>Search by Name</h1>

<div class="search">
    <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
    <button class="button-list" @click=${clickSearch}>Search</button>
</div>
    <h2>Results:</h2>
</div>
</section>
`;

const result = (response)=> html`
<section id="searchPage">
<h1>Search by Name</h1>

<div class="search">
    <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
    <button class="button-list" @click=${clickSearch}>Search</button>
</div>

<h2>Results:</h2>
${response.map(item=> html`
<!--Show after click Search button-->
<div class="search-result">
    <!--If have matches-->
    <div class="card-box">
        <img src="${item.imgUrl}">
        <div>
            <div class="text-center">
                <p class="name">Name: ${item.name}</p>
                <p class="artist">Artist: ${item.artist}</p>
                <p class="genre">Genre: ${item.genre}</p>
                <p class="price">Price: ${item.price}</p>
                <p class="date">Release Date: ${item.releaseDate}</p>
            </div>
            <div class="btn-group">
                <a href="/details/${item._id}" id="details">Details</a>
            </div>
        </div>
    </div>
</div>
`)}

</section>
`;

const noMatches = () => html`
<section id="searchPage">
<h1>Search by Name</h1>

<div class="search">
    <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
    <button class="button-list" @click=${clickSearch}>Search</button>
</div>

<h2>Results:</h2>
<div class="search-result">
    <!--If there are no matches-->
    <p class="no-result">No result.</p>
    </div>
</div>
</section>
`;

async function clickSearch(e){
    e.preventDefault();
    const input = document.getElementById('search-input');
    const value = input.value;
    const response = await get(`/data/albums?where=name%20LIKE%20%22${value}%22`);
    const user = sessionStorage.getItem('userData');
    if(response.length > 0){
        if(user){
            render(result(response),main);
        }
        else{
            render(guestResult(response),main);
        }
    }   
    else{
        render(noMatches(),main)
    }
}


const guestResult = (response)=> html`
<section id="searchPage">
<h1>Search by Name</h1>

<div class="search">
    <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
    <button class="button-list" @click=${clickSearch}>Search</button>
</div>

<h2>Results:</h2>
${response.map(item=> html`
<!--Show after click Search button-->
<div class="search-result">
    <!--If have matches-->
    <div class="card-box">
        <img src="${item.imgUrl}">
        <div>
            <div class="text-center">
                <p class="name">Name: ${item.name}</p>
                <p class="artist">Artist: ${item.artist}</p>
                <p class="genre">Genre: ${item.genre}</p>
                <p class="price">Price: ${item.price}</p>
                <p class="date">Release Date: ${item.releaseDate}</p>
            </div>
            <div class="btn-group">
            </div>
        </div>
    </div>
</div>
`)}

</section>
`;