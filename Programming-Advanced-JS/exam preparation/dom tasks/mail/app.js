function solve() {
    const temp = document.getElementsByTagName('form')[0];
	temp.addEventListener("click",(e)=>{
        e.preventDefault();
    });
    const recipientInput = document.getElementById('recipientName');
    const titleInput = document.getElementById('title');
    const messageInput = document.getElementById('message');
    const addButton = document.getElementById('add');
    const resetButton = document.getElementById('reset');
    const ul = document.getElementById('list');
    const mails = document.querySelector('.list-mails');
    const secondUl = document.querySelector('.sent-list');
    const deletedUl = document.querySelector('.delete-list')
    addButton.addEventListener('click',()=> {
        if(!recipientInput.value || !titleInput.value || !messageInput.value){
            return;
        }
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = 'Title: ' + titleInput.value;
        const secondH4 = document.createElement('h4');
        secondH4.innerText = 'Recipient Name: ' + recipientInput.value;
        const span = document.createElement('span');
        span.innerText = messageInput.value;
        const div = document.createElement('div');
        div.id = 'list-action';
        const sendButton = document.createElement('button');
        sendButton.type = 'submit';
        sendButton.id = 'send';
        sendButton.innerHTML = 'Send'
        const deleteButton = document.createElement('button');
        deleteButton.type = 'submit';
        deleteButton.id = 'delete';
        deleteButton.innerText = 'Delete';
        div.appendChild(sendButton);
        div.appendChild(deleteButton);
        li.appendChild(h4);
        li.appendChild(secondH4);
        li.appendChild(span);
        li.appendChild(div);
        ul.appendChild(li);
       // mails.appendChild(ul)
        //console.log(document.querySelector("#list > li"))
        //console.log(mails);
        
        sendButton.addEventListener('click',()=>{

            const newLi = document.createElement('li');
            const firstSpan = document.createElement('span');
            firstSpan.innerText = 'To: ' + secondH4.innerText;
            const secondSpan = document.createElement('span');
            secondSpan.innerText = 'Title: ' + titleInput.value;
            const currentDiv = document.createElement('div');
            currentDiv.classList.add('btn');
            const divButton = document.createElement('button');
            divButton.type = 'submit';
            divButton.classList.add('delete');
            divButton.innerText = 'Delete';
            currentDiv.appendChild(divButton);
            newLi.appendChild(firstSpan);
            newLi.appendChild(secondSpan);
            newLi.appendChild(currentDiv);
            secondUl.appendChild(newLi);
             ul.removeChild(li);
            divButton.addEventListener('click',()=> {
                const finalLi = document.createElement('li');
                const finalSpan = document.createElement('span');
                finalSpan.innerText = 'To: ' + recipientInput.value;
                const finalSpan2 = document.createElement('span');
                finalSpan2.innerText = 'Title: ' + titleInput.value;
                finalLi.appendChild(finalSpan);
                finalLi.appendChild(finalSpan2);
                deletedUl.appendChild(finalLi);
                secondUl.removeChild(newLi);
            })
        });
        deleteButton.addEventListener('click',()=> {
            const finalLi = document.createElement('li');
            const finalSpan = document.createElement('span');
            finalSpan.innerText = 'To: ' + recipientInput.value;
            const finalSpan2 = document.createElement('span');
            finalSpan2.innerText = 'Title: ' + titleInput.value;
            finalLi.appendChild(finalSpan);
            finalLi.appendChild(finalSpan2);
            deletedUl.appendChild(finalLi);
            ul.removeChild(li);
        });
        recipientInput.value = '';
        titleInput.value = '';
        messageInput.value = '';
    });
    resetButton.addEventListener('click',()=> {
        recipientInput.value = '';
        titleInput.value = '';
        messageInput.value = '';
    });
    
}


// const mailsDelivery = {
//       recipient: () => document.getElementById("recipientName"),
//       title: () => document.getElementById("title"),
//       message: () => document.getElementById("message"),
//       addBtn: () => document.getElementById("add"),
//       resetBtn: () => document.getElementById("reset")
// }

// mailsDelivery.recipient().value = 'John@abv.bg';
// mailsDelivery.title().value = 'For Work';
// mailsDelivery.message().value = 'Lorem ipsum dolor sit.'

// mailsDelivery.addBtn(). click();

// expect($(document.querySelector("#list > li")).length).to.equal(1, "Information for mail must be added to the list mails");
solve();
