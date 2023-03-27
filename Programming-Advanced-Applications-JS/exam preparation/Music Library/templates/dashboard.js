import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { get } from '../api.js'
const main = document.querySelector('main');
const header = document.querySelector('header');

export async function renderDashboard(){
    const data = await get('/data/albums?sortBy=_createdOn%20desc');
    if(data.length > 0){
      render(template(data),main);
    }
    else {
      render(noAlbumsTemplate(),main);
    }
}

const template = (data) => html`
      <!-- Dashboard page -->
      <section id="dashboard">
        <h2>Albums</h2>
        <ul class="card-wrapper">
          <!-- Display a li with information about every post (if any)-->
          ${data.map(album => html`
          <li class="card" item=${album._id}>
            <img src="${album.imageUrl}" alt="travis" />
            <p>
              <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
            </p>
            <p>
              <strong>Album name: </strong><span class="album">${album.album}</span>
            </p>
            <p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
            <a class="details-btn" href="/details/${album._id}">Details</a>
          </li>
          `)}
          
        </ul>
      </section>
`;


const noAlbumsTemplate = ()=> html`
      <!-- Dashboard page -->
      <section id="dashboard">
        <h2>Albums</h2>
        <ul class="card-wrapper">
        </ul>
        <!-- Display an h2 if there are no posts -->
        <h2>There are no albums added yet.</h2>
      </section>
`;