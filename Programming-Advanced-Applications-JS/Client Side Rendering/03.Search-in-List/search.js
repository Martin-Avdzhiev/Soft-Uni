import { towns } from "./towns.js";
import { html, render } from './node_modules/lit-html/lit-html.js'
const button = document.querySelector('button');
const div = document.getElementById('towns');
const input = document.getElementById('searchText');
const result = document.getElementById('result');
button.addEventListener('click', search);

const townTemplate = (town) => {
   return html`
   <ul>
   <li id=${town}>${town}</li>
   </ul>
   `;
}

const renderring = () => render(towns.map(town => townTemplate(town)), div);
renderring();

function search() {
   let index = 0;
   towns.forEach(town => {
      if (town.includes(input.value) && input.value) {
         document.getElementById(town).classList.add('active');
         index++;
      }
      else {
         document.getElementById(town).classList.remove('active');
      }
   });
   input.value = '';
   result.innerText = `${index} matches found`;
}
