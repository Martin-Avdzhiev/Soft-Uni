import { html, render } from './node_modules/lit-html/lit-html.js';
import page from './node_modules/page/page.mjs';
import { renderCreate } from './templates/create.js';
import { renderDashboard } from './templates/dashboard.js';
import { getDetails } from './templates/details.js';
import { renderEdit } from './templates/edit.js';
import { renderHome } from './templates/home.js';
import { renderLogin } from './templates/login.js';
import { updateNav } from './templates/nav.js';
import { renderRegister } from './templates/register.js';
import { renderSearch } from './templates/search.js';
const header = document.querySelector('header');
const main = document.querySelector('main');

page(updateNav);
page('/index.html','/');
page('/',renderHome);
page('/login',renderLogin);
page('/register',renderRegister);
page('/dashboard',renderDashboard);
page('/create',renderCreate);
page('/details/:id',getDetails);
page('/details/:id/edit',renderEdit);
page('/search',renderSearch);
page.start();

