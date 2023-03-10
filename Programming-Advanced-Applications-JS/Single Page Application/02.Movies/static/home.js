import { detailsPage } from "./details.js";
import { showView } from "./util.js";
const section = document.querySelector('#home-page');
const catalog = section.querySelector('#movie .card-deck.d-flex.justify-content-center');
catalog.addEventListener('click',(e)=>{
    e.preventDefault();
    if(e.target.tagName =='BUTTON'){
        const id = e.target.dataset.id;
        detailsPage(id);
    }
})
export function homePage() {
    showView(section);
    displaysMovies();
}
const url = 'http://localhost:3030/data/movies';
async function getMovies() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
function createMoviePreview(movie) {
    const element = document.createElement('div');
    element.classList.add('card-mb4');
    element.innerHTML = `
    <img class="card-img-top" src="${movie.img}"
    alt="Card image cap" width="400">
    <div class="card-body">
    <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class="card-footer">
    <a data-id ="${movie._id}" href="/details/${movie._id}">
    <button data-id="${movie._id}" type="button" class="btn btn-info">Details</button>
    </a>
    </div>`;
    return element;
}
async function displaysMovies(){
    const movies = await getMovies();
    catalog.replaceChildren(...movies.map(createMoviePreview));
}
window.getMovies = getMovies;