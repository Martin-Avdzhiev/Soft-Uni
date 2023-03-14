import { get } from "./responses.js";
import { renderring } from "./templates.js";

const button = document.querySelector('#searchBtn');
const tbody = document.querySelector('tbody');
button.addEventListener('click', onClick);

async function onClick() {
   const input = document.getElementById('searchField');
   const text = input.value.toLowerCase();
   if(!text){
      return alert('You must type something in the search bar!')
   }
   const data = await get();
   for (const item of data){
      const combine = `${item.firstName} ${item.lastName} ${item.email} ${item.course}`.toLowerCase();
      const row = document.getElementById(item._id);
      if(combine.includes(text)){
         row.classList.add('select');
      }
      else {
         row.classList.remove('select');
      }
   };
   input.value = '';
}

async function load(){
   const data = await get();
   renderring(data)
}
load()