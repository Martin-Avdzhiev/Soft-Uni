import { html, render } from './node_modules/lit-html/lit-html.js';
import page from './node_modules/page/page.mjs';
import { renderCreate } from './templates/create.js';
import { delEvent } from './templates/delete.js';
import { getDetails } from './templates/details.js';
import { edit } from './templates/edit.js';
import { renderHome } from './templates/home.js';
import { renderLogin } from './templates/login.js';
import { logout } from './templates/logout.js';
import { updateNav } from './templates/nav.js';
import { renderMyItems } from './templates/profile.js';
import { renderRegister } from './templates/register.js';

page(updateNav)
page('/index.html','/');
page('/', renderHome)
page('/login',renderLogin);
page('/logout',logout);
page('/logout',logout);
page('/register',renderRegister);
page('/create',renderCreate);
page('/profile',renderMyItems);
page('/details/:id',getDetails);
page('/details/:id/edit',edit);
page('/delete/:id',delEvent);
page.start();
