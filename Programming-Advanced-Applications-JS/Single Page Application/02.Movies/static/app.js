// [x] improve html structure
// [x] create app.js module
// [x] create util.js containing hide and display view
// [x] placeholders for all views
//  implement views
//   - create rquest logic
//   - DOM manipulation logic

import { showView, updateNav } from "./util.js";
import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { createPage } from "./create.js";
import { detailsPage } from "./details.js";
import { editPage } from "./edit.js";
// [x] catalog
// [ ] register
// [x] login
// [ ] create
// [ ] details
// [ ] like
// [ ] edit
// [ ] delete
const routes = {
    '/': homePage,
    '/login': loginPage,
    '/register': registerPage,
    '/logout': logoutPage,
    '/create': createPage

}
document.querySelector('nav').addEventListener('click', onNavigate);
document.querySelector('#add-movie-button a').addEventListener('click', onNavigate);







function onNavigate(e){
    if(e.target.tagName == 'A' && e.target.href){
        e.preventDefault();
        const url = new URL(e.target.href)
        const view = routes[url.pathname];
        if(typeof view == 'function'){
            view();
        }
    }
}
function logoutPage(){
    localStorage.removeItem('user');
    updateNav();
}
updateNav();
homePage();