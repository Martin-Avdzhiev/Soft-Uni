function attachEvents() {
    try {
        const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const buttonLoadPosts = document.getElementById('btnLoadPosts');
    const posts = document.getElementById('posts');
    const view = document.getElementById('btnViewPost');
    const h1 = document.getElementById('post-title');
    const p = document.getElementById('post-body');
    const ul = document.getElementById('post-comments');
    buttonLoadPosts.addEventListener('click', async () => {
        posts.replaceChildren();
        const postsResponse = await fetch(postsUrl);
        const postsData = await postsResponse.json();
        const entries = Object.entries(postsData);
        //console.log(entries)
        for (const entry of entries) {
            const option = document.createElement('option');
            option.setAttribute('value', entry[0])
            option.innerText = entry[1].title;
            const title = entry[1].title;
            const text = entry[1].body;
            
            posts.appendChild(option);
        }
    });
    view.addEventListener('click', async (e) => {
        ul.replaceChildren();
        const postsResponse = await fetch(postsUrl);
        const postsData = await postsResponse.json();
        const selection = e.target.parentNode.children[2];
        const current = selection.options[selection.selectedIndex].value;
        const commentUrl = `http://localhost:3030/jsonstore/blog/comments`;
        const currentResponse = await fetch(commentUrl);
        const currentData = await currentResponse.json();
        const entries = Object.entries(currentData);
        const find = [];
        for (const entry of entries){
            if(current == entry[1].postId){
                find.push(entry)
            }
        }
        const currentPost = await fetch(`${postsUrl}/${find[0][1].postId}`);
        const currentData2 = await currentPost.json();
        const title = currentData2.title;
        const text = currentData2.body;
        h1.innerText = title;
        p.innerText = text;
        for (const entry of find){
            const currentComment = entry[1].text;
            const li = document.createElement('li');
            li.innerText = currentComment;
            ul.appendChild(li);

        }
    })

    } catch (error) {
        console.log('Error');
    }
    
}

attachEvents();