import { html, render } from './node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';
const section = document.getElementById('allCats');

 const catTemplate = (cat) => html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" @click = ${onClick}>Show status code</button>
            <div class="status" style="display: none" id="${cat.id}">
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>`;
 const createUl= (cats) =>
     html`
    <ul>
    ${cats.map(cat => catTemplate(cat))}
    </ul>
    `;


render(createUl(cats), section);

function onClick(e){
    const div = e.target.parentNode.children[1];
    const button = e.target.parentNode.children[0];
    if(div.style.display == 'none'){
        div.style.display = 'block';
       button.innerText = 'Hide status code';
    }
    else {
        div.style.display = 'none';
        button.innerText = 'Show status code';
    }
}

