import { getTime } from "./getTime.js";
const title = document.getElementById('topicName');
const user = document.getElementById('username');
const post = document.getElementById('postText');
const topics = document.querySelector('.topic-container');
const postUrl = 'http://localhost:3030/jsonstore/collections/myboard/posts';
export async function createPost(e) {
    e.preventDefault();
    const operation = e.target.innerText;
    if (!title.value || !user.value || !post.value) {
        return alert('All fields must be filled!');
    }
    if (operation == 'Post') {
        const time = getTime();
        const response = await fetch(postUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title.value, user: user.value, post: post.value, time })
        });
        const data = await response.json();
        const id = data._id;
        domManipulations(data.title, data.user, data.post, data.time, data._id);
    }
    title.value = '';
    user.value = '';
    post.value = '';
}


export function domManipulations(title, user, post, time, id) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('topic-name-wrapper');
    wrapper.setAttribute('id', id);
    const topicName = document.createElement('div');
    topicName.classList.add('topic-name');
    const link = document.createElement('a');
    link.setAttribute('id', id);
    link.classList.add('normal');
    link.setAttribute('href', './theme-content.html');
    const h2 = document.createElement('h2');
    h2.innerText = title;
    link.appendChild(h2);
    const columns = document.createElement('div');
    columns.classList.add('columns');
    const innerDiv = document.createElement('div');
    const p = document.createElement('p');
    p.innerText = 'Date: ';
    const timeElement = document.createElement('time');
    timeElement.innerText = time;
    p.appendChild(timeElement);
    const nickname = document.createElement('div');
    nickname.classList.add('nick-name');
    const userParagraph = document.createElement('p');
    userParagraph.innerText = 'Username: ';
    const span = document.createElement('span');
    span.innerText = user;
    userParagraph.appendChild(span);
    nickname.appendChild(userParagraph);
    innerDiv.appendChild(p);
    innerDiv.appendChild(nickname);
    columns.appendChild(innerDiv);
    topicName.appendChild(link);
    topicName.appendChild(columns);
    wrapper.appendChild(topicName);
    topics.appendChild(wrapper);
    link.addEventListener('click', getId);
}

async function getId(e) {
    const currentId = e.currentTarget.id;
    localStorage.setItem('id', currentId);
}