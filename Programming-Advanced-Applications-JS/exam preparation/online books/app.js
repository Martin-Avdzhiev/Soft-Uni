import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { renderCreate } from './templates/createBook.js';
import { dashboard } from './templates/dashboard.js';
import { getDetails } from './templates/details.js';
import { editBook } from './templates/edit.js';
import { renderLogin } from './templates/login.js';
import { logout } from './templates/logout.js';
import { renderMyBooks } from './templates/mybooks.js';
import { updateNav } from './templates/nav.js';
import { renderRegister } from './templates/register.js';
const header = document.querySelector('header');
const main = document.querySelector('main');

page('/index.html','/')
page('/',dashboard);
page('/login',renderLogin);
page('/register',renderRegister);
page('/logout', logout);
page('/add',renderCreate);
page('/details/:id',getDetails);
page('/myBooks', renderMyBooks);
page('/details/:id/edit',editBook);
page.start();