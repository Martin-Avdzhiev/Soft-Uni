import { getTime } from "./getTime.js";
const postUrl = 'http://localhost:3030/jsonstore/collections/myboard/posts';
const commentUrl = 'http://localhost:3030/jsonstore/collections/myboard/comments';
const homePage = document.querySelector('nav a');
const comment = document.querySelector('.comment');
const main = document.querySelector('.theme-content');
homePage.setAttribute('href', './index.html');
homePage.addEventListener('click', () => localStorage.clear());
window.addEventListener('load', createTitle);
window.addEventListener('load', loadAllComments);
const postButton = document.querySelector('button');
postButton.addEventListener('click', postComment);

async function createTitle() {
    const id = localStorage.getItem('id');
    const response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${id}`);
    const data = await response.json();
    const h2 = document.querySelector('.theme-name h2');
    h2.innerText = data.title;
    const header = document.createElement('div');
    header.classList.add('header');
    const img = document.createElement('img');
    img.setAttribute('src', './static/profile.png');
    img.setAttribute('alt', 'avatar');
    const paragraph = document.createElement('p');
    const span = document.createElement('span');
    span.innerText = data.user;
    paragraph.appendChild(span);
    paragraph.innerText += ' posted on ';
    const time = document.createElement('time');
    time.innerText = data.time;
    paragraph.appendChild(time);
    const content = document.createElement('div');
    content.classList.add('post-content');
    const pContent = document.createElement('p');
    pContent.innerText = data.post;
    content.appendChild(pContent);
    header.appendChild(img);
    header.appendChild(paragraph);
    header.appendChild(content);
    comment.appendChild(header);

}
async function postComment(e) {
    e.preventDefault();
    const comentator = document.getElementById('username');
    const currentComment = document.getElementById('comment');
    if (!comentator.value || !currentComment.value) {
        return alert('You must enter all inputs');
    };
    dom(comentator.value, currentComment.value);
    const response = await fetch(commentUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: comentator.value, text: currentComment.value })
    })
};

async function loadAllComments() {
    const response = await fetch(commentUrl);
    const data = await response.json();
    for (const value of Object.values(data)) {
        const name = value.name;
        const text = value.text;
        dom(name,text);
    }
}

function dom(name, text){
    const divComment = document.createElement('div');
    divComment.setAttribute('id', 'user-comment');
    const nameWrapper = document.createElement('div');
    nameWrapper.classList.add('topic-name-wrapper');
    const topicName = document.createElement('div');
    topicName.classList.add('topic-name');
    const paragraph = document.createElement('p');
    const strong = document.createElement('strong');
    strong.innerText = name;
    paragraph.appendChild(strong);
    paragraph.innerText += ' commented on ';
    const time = document.createElement('time');
    time.innerText = getTime();
    paragraph.appendChild(time);
    const divContent = document.createElement('div');
    divContent.classList.add('post-content');
    const secondP = document.createElement('p');
    secondP.innerText = text;
    divContent.appendChild(secondP);
    topicName.appendChild(paragraph);
    topicName.appendChild(divContent);
    nameWrapper.appendChild(topicName);
    divComment.appendChild(nameWrapper)
    main.appendChild(divComment);
}