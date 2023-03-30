import { html, render } from './node_modules/lit-html/lit-html.js';
import page from './node_modules/page/page.mjs';
import { renderCreate } from './templates/create.js';
import { getDetails } from './templates/details.js';
import { renderEdit } from './templates/edit.js';
import { renderHome } from './templates/home.js';
import { getItems } from './templates/listings.js';
import { renderLogin } from './templates/login.js';
import { getMyListings } from './templates/myListings.js';
import { navUpdate } from './templates/nav.js';
import { renderRegister } from './templates/register.js';
import { search } from './templates/search.js';


page(navUpdate);
page('/index.html','/');
page('/',renderHome);
page('/all',getItems);
page('/listings',getMyListings);
page('/login',renderLogin);
page('/register',renderRegister);
page('/create',renderCreate);
page('/details/:id', getDetails);
page('/details/:id/edit',renderEdit);
page('/year',search);
page.start();

