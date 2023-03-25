import { html, render } from './node_modules/lit-html/lit-html.js';
import page from './node_modules/page/page.mjs';
import { dashboardRender } from './templates/dashboard.js';
import { loginRender } from './templates/login.js';
import { logout } from './templates/logout.js';
import { updateNav } from './templates/nav.js';
import { registerRender } from './templates/register.js';

updateNav();
page('/index.html','/');
page('/',dashboardRender);
page('/login',loginRender);
page('/register',registerRender);
page('/logout',logout);
page.start();