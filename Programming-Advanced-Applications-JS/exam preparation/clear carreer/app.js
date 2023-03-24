import { html, render } from './node_modules/lit-html/lit-html.js';
import page from './node_modules/page/page.mjs';
import { renderCreateOffer } from './templates/create.js';
import { getOffers } from './templates/dashboard.js';
import { renderHome } from './templates/home.js';
import { renderLogin } from './templates/login.js';
import { logoutUser } from './templates/logout.js';
import { updateNav } from './templates/navigation.js';
import { renderRegister } from './templates/register.js';
import { ownerTemplate, notOwnerTemplate, guestsTemplate } from './templates/details.js';
import { get } from './api.js';
const main = document.querySelector('main');
 
page.redirect('/');
page('/', renderHome);
page('/login', renderLogin);
page('/register', renderRegister);
page('/dashboard', getOffers);
page('/logout', logoutUser);
page('/create',renderCreateOffer);

page.start();








