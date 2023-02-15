window.addEventListener('load', solve);

function solve() {
    const form = document.getElementsByTagName('form')[0];
    const inputs = document.querySelector('form').querySelectorAll('input');
    const addButton = document.getElementById('add-btn');
    const collection = document.querySelector('.all-hits-container');
    const counter = document.querySelector('.likes').querySelector('p');
    const savedSongs = document.querySelector('.saved-container');
    let likesCounter = 0;
    form.addEventListener('click',(e)=>{
        e.preventDefault();
    });
    addButton.addEventListener('click',()=>{
        if(!inputs[0].value || !inputs[1].value || !inputs[2].value || !inputs[3].value){
            return;
        }
        const divOfSongs = document.createElement('div');
        divOfSongs.setAttribute('class','hits-info')
        const img = document.createElement('img');
        img.src = './static/img/img.png';
        const firstH2 = document.createElement('h2');
        firstH2.innerText = 'Genre: ' + inputs[0].value;
        const secondH2 = document.createElement('h2');
        secondH2.innerText = 'Name: ' + inputs[1].value;
        const thirdH2 = document.createElement('h2');
        thirdH2.innerText = 'Author: ' + inputs[2].value;
        const firstH3 = document.createElement('h3');
        firstH3.innerText = 'Date: ' + inputs[3].value;
        const saveButton = document.createElement('button');
        saveButton.setAttribute('class','save-btn');
        saveButton.innerText = 'Save song';
        const likeButton = document.createElement('button');
        likeButton.setAttribute('class','like-btn');
        likeButton.innerText = 'Like song';
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class','delete-btn');
        deleteButton.innerText = 'Delete';
        divOfSongs.appendChild(img);
        divOfSongs.appendChild(firstH2);
        divOfSongs.appendChild(secondH2);
        divOfSongs.appendChild(thirdH2);
        divOfSongs.appendChild(firstH3);
        divOfSongs.appendChild(saveButton);
        divOfSongs.appendChild(likeButton);
        divOfSongs.appendChild(deleteButton);
        collection.appendChild(divOfSongs);
        for(const input of inputs){
            input.value = '';
        }
        likeButton.addEventListener('click',()=>{
            likesCounter ++;
            counter.innerText = 'Total Likes: '+ likesCounter;
            likeButton.disabled = true;
        });
        saveButton.addEventListener('click',()=>{
            likeButton.remove();
            saveButton.remove();
            savedSongs.appendChild(divOfSongs);
        });
        deleteButton.addEventListener('click',()=>{
            divOfSongs.remove();
        })
    })
   
}

