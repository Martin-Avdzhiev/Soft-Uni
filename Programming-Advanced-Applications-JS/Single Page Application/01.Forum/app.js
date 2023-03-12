import { homePage } from './router.js';

const homePageButton = document.querySelector('nav a');
homePageButton.setAttribute('href', './index.html');
homePageButton.addEventListener('click', homePage());

