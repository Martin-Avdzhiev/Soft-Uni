import { createPost } from "./dom.js";
import { domManipulations } from "./dom.js";
const postButton = document.querySelector('.public');
const cancelButton = document.querySelector('.cancel');
const postUrl = 'http://localhost:3030/jsonstore/collections/myboard/posts';
if (postButton && cancelButton) {
    postButton.addEventListener('click', createPost);
    cancelButton.addEventListener('click', createPost);
}

export async function homePage() {
    const response = await fetch(postUrl);
    const data = await response.json();
    try {
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }
        for(const value of Object.values(data)){
            const title = value.title;
            const user = value.user;
            const post = value.post;
            const time = value.time;
            const id = value._id;
            
            domManipulations(title, user, post, time, id)
        }
   } catch (error) {
       alert(error.message);
   }

}