import { get } from "../api.js";
import { updateNav } from "../app.js";
import page from "../node_modules/page/page.mjs";
export async function logOutView(){
    //const response = await get('/users/logout');
    sessionStorage.clear();
     updateNav();
     page.redirect('/');
}