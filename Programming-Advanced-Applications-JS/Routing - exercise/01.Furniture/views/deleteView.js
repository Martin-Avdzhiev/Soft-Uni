import { del } from '../api.js';
import page from '../node_modules/page/page.mjs';

export function onClick(e) { 
    console.log('hi')
    const confirmDeletion = confirm('Are you sure?');
    if(confirmDeletion){
        del(`/data/catalog/${e.target.id}`);
        page.redirect('/');
    }
    console.log('hi')
}