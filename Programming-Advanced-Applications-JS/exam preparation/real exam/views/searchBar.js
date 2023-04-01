import { render, html } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { get } from '../api.js';
const main = document.querySelectorAll('main')[0];

export function searchPage(){
    render(html`<section id="search">

    <div class="form">
      <h2>Search</h2>
      <form class="search-form">
        <input
          type="text"
          name="search"
          id="search-input"
        />
        <button class="button-list" @click=${searching}>Search</button>
      </form>
    </div>
      </div>
            </section>`,main);
}

async function searching(event){
  event.preventDefault();
    const input = document.getElementById('search-input');
    const text = input.value;
    const matches = await get(`/data/fruits?where=name%20LIKE%20%22${text}%22`);
    if(matches.length>0){
        render(results(matches),main);
    }
    else{
        render(noMatches(),main);
    }
}

const results = (matches) => html`
<section id="search">

<div class="form">
  <h2>Search</h2>
  <form class="search-form">
    <input
      type="text"
      name="search"
      id="search-input"
    />
    <button class="button-list" @click=${searching}>Search</button>
  </form>
</div>
<h4>Results:</h4>
  <div class="search-result">
  <!--If there are matches display a div with information about every fruit-->
  ${matches.map(match=> html`
  <div class="fruit">
  <img src="${match.imageUrl}" alt="example1" />
  <h3 class="title">${match.name}</h3>
  <p class="description">${match.imageUrl}</p>
  <a class="details-btn" href="/details/${match._id}">More Info</a>
</div>
  `)}
  </div>
        </section>
`;

const noMatches = ()=> html`
<section id="search">

<div class="form">
  <h2>Search</h2>
  <form class="search-form">
    <input
      type="text"
      name="search"
      id="search-input"
    />
    <button class="button-list" @click=${searching}>Search</button>
  </form>
</div>
<h4>Results:</h4>
 <p class="no-result">No result.</p>
        </section>
`;