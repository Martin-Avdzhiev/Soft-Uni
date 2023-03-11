const postsUrl = 'http://localhost:3030/jsonstore/collections/myboard/posts';
const commentsUrl = 'http://localhost:3030/jsonstore/collections/myboard/comments';
const container = document.querySelector('.topic-container');
const topicTitle = document.querySelector('.topic-title');
export async function load(){
    const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
    const data = await res.json();
    for (const value of Object.values(data)){
        const title = value.title;
        const user = value.user;
        const post = value.post;
        const id = value._id;
        domManipulations(title, user, post, container, id);
        console.log(value)
    }
    //console.log(Object.values(data))
}

export async function createPost(e){
    e.preventDefault();
    const title = document.querySelector('#topicName');
    const user = document.querySelector('#username');
    const post = document.querySelector('#postText');
    if (!title.value || !user.value || !post.value) {
        return alert('All fiels must be filled!');
    }
    const target = e.target;
    const button = target.innerText;
   
    try {
       
        if (button == 'Post') {
            const response = await fetch(postsUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: title.value, user: user.value, post: post.value })
            });
            const data = await response.json();
            const id = data._id;
            domManipulations(title,user,post,container, id);
        }
    } catch (error) {
        alert(error.message);
    }
    title.value = '';
    user.value = '';
    post.value = '';
}

function getTime() {
    const date = new Date;
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const time = `${year}-${month >= 10 ? month : '0' + month}-${day >= 10 ? day : '0' + day} ${hour >= 10 ? hour : '0' + hour}:${minutes >= 10 ? minutes : '0' + minutes}:${seconds >= 10 ? seconds : '0' + seconds}`;
    return time
}

async function domManipulations(title,user,post,container, id){
    const paragraph = document.createElement('p');
    paragraph.innerText = title.value;
    paragraph.classList.add('topic-name-wrapper');
    const div = document.createElement('div');
    div.classList.add('comment');
    div.setAttribute('id', id);
    const header = document.createElement('div');
    header.classList.add('header');
    const img = document.createElement('img');
    img.setAttribute('src', './static/profile.png');
    img.setAttribute('alt', 'avatar');
    const p = document.createElement('p');
    const span = document.createElement('span');
    span.innerText = user.value;
    p.appendChild(span);
    p.innerText += ' posted on ';
    const timeElement = document.createElement('time');
    const time = getTime();
    timeElement.innerText = time;
    p.appendChild(timeElement)
    const content = document.createElement('p');
    content.classList.add('post-content');
    content.innerText = post.value;
    header.appendChild(img);
    header.appendChild(p);
    header.appendChild(content);
    div.appendChild(header);
    container.appendChild(div);
    topicTitle.prepend(paragraph);
}