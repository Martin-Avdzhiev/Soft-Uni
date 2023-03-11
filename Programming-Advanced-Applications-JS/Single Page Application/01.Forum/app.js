
import { load } from './util.js';
import { createPost } from './util.js';

const cancel = document.querySelector('.cancel');
const public_ = document.querySelector('.public');
cancel.addEventListener('click', createPost);
public_.addEventListener('click', createPost);
window.addEventListener('load', load);





