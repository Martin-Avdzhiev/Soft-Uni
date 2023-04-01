import { del } from "../api.js";
import page from '../node_modules/page/page.mjs';

export async function deleteFruit(event){
    event.preventDefault();
      const id = event.target.getAttribute('fruit');
      const confirm1 = confirm('a u sure?');
      if(confirm1){
          const delFruit = del(`/data/fruits/${id}`);
          page.redirect('/fruits');
      }
  }