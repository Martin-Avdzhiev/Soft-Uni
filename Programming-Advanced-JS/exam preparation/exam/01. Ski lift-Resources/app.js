window.addEventListener('load', solve);

function solve() {
   const f = document.querySelectorAll('form')[0];
   f.addEventListener('click',(event)=>{
    event.preventDefault();
   })
   
   const firstName = document.getElementById('first-name');
   const lastName = document.getElementById('last-name');
   const people = document.getElementById('people-count');
   const dateElement = document.getElementById('from-date');
   const daysElement = document.getElementById('days-count')
   const nextButton = document.getElementById('next-btn');
   const ticketInfoList = document.querySelector('.ticket-info-list');
   const confirmTicketUl = document.querySelector('.confirm-ticket');
   const confirmButton = document.createElement('button');
   const editButton = document.createElement('button');
   const cancelButton = document.createElement('button');
   const backButton = document.createElement('button');
   const mainDiv = document.querySelector('#main');
   const mainBody = document.querySelector('#body');
   const liElement = document.createElement('li');
   const h1 = document.createElement('h1');
   h1.id = 'thank-you';
   h1.innerText = 'Thank you, have a nice day!';
   backButton.id = 'back-btn';
   backButton.innerText = 'Back';
   nextButton.addEventListener('click',()=>{
   const values = [];
   console.log(this)
    if(!firstName.value || !lastName.value || !people.value || !dateElement.value || !daysElement.value){
        return;
    }
    values[0] = firstName.value;
    values[1] = lastName.value;
    values[2] = people.value;
    values[3] = dateElement.value;
    values[4] = daysElement.value;
    liElement.classList.add('ticket');
    const articleElement = document.createElement('article');
    const name = document.createElement('h3');
    name.innerText = 'Name: ' + firstName.value + ' ' + lastName.value;
    const date = document.createElement('p');
    date.innerText = 'From date: ' + dateElement.value;
    const days = document.createElement('p');
    days.innerText = 'For ' + daysElement.value + ' days';
    const numberOfPeople = document.createElement('p');
    numberOfPeople.innerText = 'For ' + people.value + ' people';
    editButton.classList.add('edit-btn');
    editButton.innerText = 'Edit';
    const continueButton = document.createElement('button');
    continueButton.classList.add('continue-btn');
    continueButton.innerText = 'Continue';
    articleElement.appendChild(name);
    articleElement.appendChild(date);
    articleElement.appendChild(days);
    articleElement.appendChild(numberOfPeople);
    liElement.appendChild(articleElement);
    liElement.appendChild(editButton);
    liElement.appendChild(continueButton);
    ticketInfoList.appendChild(liElement);
    nextButton.disabled = true;
    firstName.value = '';
    lastName.value = '';
    people.value = '';
    dateElement.value = '';
    daysElement.value = '';
    editButton.addEventListener('click',()=>{
        firstName.value = values[0];
        lastName.value = values[1];
        people.value = values[2];
        dateElement.value = values[3];
        daysElement.value = values[4];
        nextButton.disabled = false;
        liElement.remove();
        articleElement.remove();
        editButton.remove();
        continueButton.remove();
    })
    continueButton.addEventListener('click',()=>{
       
        confirmTicketUl.appendChild(liElement);
        liElement.classList.remove('ticket')
        liElement.classList.add('ticket-content');
        editButton.remove();
        continueButton.remove();
        confirmButton.classList.add('confirm-btn');
        cancelButton.classList.add('cancel-btn');
        confirmButton.innerText = 'Confirm';
        cancelButton.innerText = 'Cancel';
        liElement.appendChild(confirmButton);
        liElement.appendChild(cancelButton);
    })
    cancelButton.addEventListener('click',()=>{
        nextButton.disabled = false;
        liElement.remove();
        confirmButton.remove();
        cancelButton.remove();
        articleElement.remove();
        editButton.remove();
        continueButton.remove();
    })
   })
   backButton.addEventListener('click',()=>{
    window.location.reload();
})
   confirmButton.addEventListener('click',()=>{
    mainDiv.remove();
    mainBody.appendChild(h1);
    mainBody.appendChild(backButton);
})

}


    
    
// function solve() {
   
//     const inputs = {
//         firstName: document.getElementById('first-name'),
//         lastName: document.getElementById('last-name'),
//         peopleQuantity: document.getElementById('people-count'),
//         fromDate: document.getElementById('from-date'),
//         daysCount: document.getElementById('days-count'),
//     };
 
//     let sections ={
//         ticketReview: document.querySelector('.ticket-info-list'),
//         confirmTicket: document.querySelector('.confirm-ticket'),
//         mainDiv: document.querySelector('#main'),
//         body: document.querySelector('#body'),
//     };
 
    
 
//     document.getElementById('next-btn').addEventListener('click', (e) => {
//         e.preventDefault();
 
//         const firstName = inputs.firstName.value;
//         const lastName = inputs.lastName.value;
//         const peopleQuantity = inputs.peopleQuantity.value;
//         const fromDate = inputs.fromDate.value;
//         const daysCount = inputs.daysCount.value;
 
//         if (firstName == '' || lastName == '' || peopleQuantity == '' || fromDate == '' || daysCount == '') {
//             return;
//         }
 
//         const li = genareteEl('li', '', sections.ticketReview, { class: 'ticket' });
//         const article = genareteEl('article', '', li);
//         const h3 = genareteEl('h3', `Name: ${firstName} ${lastName}`, article);
//         const pOne = genareteEl('p', `From date: ${fromDate}`, article);
//         const pTwo = genareteEl('p', `For ${daysCount} days`, article);
//         const pThree = genareteEl('p', `For ${peopleQuantity} people`, article);
//         const editButton = genareteEl('button', 'Edit', li, { class: 'edit-btn' });
//         const constinueButton = genareteEl('button', 'Continue', li, { class: 'continue-btn' });
 
//         Object.keys(inputs).map((key) => (inputs[key].value = ''));
//         e.currentTarget.disabled = true;
 
//         editButton.addEventListener('click', () => {
//             inputs.firstName.value = firstName;
//             inputs.lastName.value = lastName;
//             inputs.peopleQuantity.value = peopleQuantity;
//             inputs.fromDate.value = fromDate;
//             inputs.daysCount.value = daysCount;
//             li.remove();
//             document.getElementById('next-btn').disabled = false;
 
//         })
 
//         constinueButton.addEventListener('click', (e)=>{
//             e.target.parentElement.remove();
//             editButton.remove();
//             constinueButton.remove();
           
//             li.classList.remove('ticket');
//             li.classList.add('ticket-content');
 
//             const confirmButton = genareteEl('button', 'Confirm', li, {class: 'confirm-btn'});
//             const cancelButton = genareteEl('button', 'Cancel', li, {class: 'cancel-btn'});
//             sections.confirmTicket.appendChild(li);
 
           
           
//             confirmButton.addEventListener('click', (e)=>{
//                sections.mainDiv.remove();
               
//                const h1 = genareteEl('h1', 'Thank you, have a nice day!', sections.body, {id: 'thank-you'})
//                const backButton = genareteEl('button', 'Back', sections.body, {id: 'back-btn'});
//                backButton.addEventListener('click',()=>{
//                 window.location.reload();
//                })
 
            
//             });
    
//             cancelButton.addEventListener('click',(e)=>{
//                 e.target.parentElement.remove();
//                 document.getElementById('next-btn').disabled = false;
//             })
 
 
//         })
        
//     })
 
 
 
 
//  function genareteEl(typeEl, content, parent, attributes) {
//         const el = document.createElement(typeEl);
//         el.textContent = content;
//         if (attributes) {
//             for (const prop in attributes) {
//                 el.setAttribute(prop, attributes[prop]);
//             }
//         }
//         if (parent) {
//             parent.appendChild(el);
//         }
//         return el;
//     }
 
    
 
// }