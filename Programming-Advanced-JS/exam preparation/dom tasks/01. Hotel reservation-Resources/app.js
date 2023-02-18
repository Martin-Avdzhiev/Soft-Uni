window.addEventListener('load', solve);

function solve() {
    const form = document.querySelector('form');
    const inputs = document.querySelector('form').querySelectorAll('input');
    const next = document.getElementById('next-btn');
    const reservation = document.querySelector('.info-list');
    const confirm = document.querySelector('.confirm-list');
    const h1 = document.getElementById('verification');
    const confirmButton = document.createElement('button');
    const cancelButton = document.createElement('button');
    form.addEventListener('click',(e)=>{
        e.preventDefault()
    })
    next.addEventListener('click',()=>{
        const array = [];
        for(const input of inputs){
            if(!input.value){
                return;
            }
            array.push(input.value);
        }
        const li = document.createElement('li');
        li.classList.add('reservation-content');
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.innerText = 'Name: ' + inputs[0].value + ' ' + inputs[1].value;
        const firstP = document.createElement('p');
        firstP.innerText = 'From date: ' + inputs[2].value;
        const secondP = document.createElement('p');
        secondP.innerText = 'To date: ' + inputs[3].value;
        const thirdP = document.createElement('p');
        thirdP.innerText = 'For ' + inputs[4].value + ' people'
        const edit = document.createElement('button');
        edit.innerText = 'Edit';
        edit.classList.add('edit-btn');
        const continueButton = document.createElement('button');
        continueButton.classList.add('continue-btn')
        continueButton.innerText = 'Continue';
        article.appendChild(h3);
        article.appendChild(firstP);
        article.appendChild(secondP);
        article.appendChild(thirdP);
        li.appendChild(article);
        li.appendChild(edit);
        li.appendChild(continueButton);
        reservation.appendChild(li)
        next.disabled = true;
        for(const input of inputs){
            input.value = '';
        };
        edit.addEventListener('click',()=>{
            next.disabled = false;
            inputs[0].value = array[0];
            inputs[1].value = array[1];
            inputs[2].value = array[2];
            inputs[3].value = array[3];
            inputs[4].value = array[4];
            li.remove();
        });
        continueButton.addEventListener('click',()=>{
            edit.remove();
            continueButton.remove();
            confirmButton.innerText = 'Confirm';
            cancelButton.innerText = 'Cancel';
            confirmButton.classList.add('confirm-btn');
            cancelButton.classList.add('cancel-btn');
            li.appendChild(confirmButton);
            li.appendChild(cancelButton);
            confirm.appendChild(li);
        })
        confirmButton.addEventListener('click',()=>{
            next.disabled = false;
            h1.innerText = 'Confirmed.';
            h1.classList.add('reservation-confirmed');
            li.remove();
        });
        cancelButton.addEventListener('click',()=>{
            next.disabled = false;
            h1.innerText = 'Cancelled.';
            h1.classList.add('reservation-cancelled');
            li.remove();
        })
    })
    }



    
    
