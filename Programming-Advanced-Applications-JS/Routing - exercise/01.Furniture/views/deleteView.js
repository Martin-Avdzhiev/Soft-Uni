import { del } from '../api.js';
import page from '../node_modules/page/page.mjs';
import { myFurnitureView } from './myFurnitureView.js'
export function onClick(e) { 
  
    const confirmDeletion = confirm('Are you sure?');
    if(confirmDeletion){
        del(`/data/catalog/${e.target.id}`);
        page.redirect('/');
        myFurnitureView();
    }
}