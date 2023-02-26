async function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const main = document.getElementById('main');
    main.replaceChildren();
  // const firstHiddenDiv = document.querySelector('.user1Username');
   //const firstButton = document.getElementsByTagName('button')[0];
    try {
        const response = await fetch(url);
        const data = await response.json();
        const entries = Object.entries(data);
        //firstHiddenDiv.style.display = 'none';
        for(const entry of entries){
            let index = entries.indexOf(entry) + 1;
            const name = entry[1].username;
            const age = Number(entry[1].age);
            const email = entry[1].email;
            const id = entry[0]

            const mainDiv = document.createElement('div');
            mainDiv.classList.add('profile');
            const img = document.createElement('img');
            img.setAttribute('src', './iconProfile2.png');
            img.classList.add('userIcon');
            const lockLabel = document.createElement('label');
            lockLabel.innerText = 'Lock';
            const lockButton = document.createElement('input');
            lockButton.setAttribute('type','radio');
            lockButton.setAttribute('name',`user${index}Locked`);
            lockButton.setAttribute('value','lock');
            lockButton.checked = true;
            const unlockLabel = document.createElement('label');
            unlockLabel.innerText = 'Unlock';
            const unlockButton = document.createElement('input');
            unlockButton.setAttribute('type','radio');
            unlockButton.setAttribute('name',`user${index}Locked`);
            unlockButton.setAttribute('value','unlock');
            const breakElement = document.createElement('br');
            const hr = document.createElement('hr');
            const userLabel = document.createElement('label');
            userLabel.innerText = 'Username';
            const userInput = document.createElement('input');
            userInput.setAttribute('type','text');
            userInput.setAttribute('name',`user${index}Username`);
            userInput.setAttribute('value',name);
            userInput.disabled = true;
            userInput.readOnly = true;

            const hiddenDiv = document.createElement('div');
            hiddenDiv.setAttribute('id',`user${index}HiddenFields`);
            hiddenDiv.style.display = 'none'
            // hidden div
            const secondHr = document.createElement('hr');
            const emailLabel = document.createElement('label');
            emailLabel.innerText = 'Email:';
            const emailInput = document.createElement('input');
            emailInput.setAttribute('type','email');
            emailInput.setAttribute('name',`user${index}Email`);
            emailInput.setAttribute('value',email);
            emailInput.disabled = true;
            emailInput.readOnly = true;
            const ageLabel = document.createElement('label');
            ageLabel.innerText = 'Age:';
            const ageInput = document.createElement('input');
            ageInput.setAttribute('type','email');
            ageInput.setAttribute('name',`user${index}Age`);
            ageInput.setAttribute('value',age);
            ageInput.disabled = true;
            ageInput.readOnly = true;
            // hidden div
            const showMore = document.createElement('button');
            showMore.innerText = 'Show more';
            hiddenDiv.appendChild(secondHr);
            hiddenDiv.appendChild(emailLabel);
            hiddenDiv.appendChild(emailInput);
            hiddenDiv.appendChild(ageLabel);
            hiddenDiv.appendChild(ageInput);
            mainDiv.appendChild(img);
            mainDiv.appendChild(lockLabel);
            mainDiv.appendChild(lockButton);
            mainDiv.appendChild(unlockLabel);
            mainDiv.appendChild(unlockButton);
            mainDiv.appendChild(breakElement);
            mainDiv.appendChild(hr);
            mainDiv.appendChild(userLabel);
            mainDiv.appendChild(userInput);
            mainDiv.appendChild(hiddenDiv);
            mainDiv.appendChild(showMore);
            main.appendChild(mainDiv);
            showMore.addEventListener('click', clicked);
            //firstButton.addEventListener('click', clicked);
        }
    } catch (error) {
        console.log('Error')
    }
    function clicked (e){
        
        const bigDiv = e.currentTarget.parentNode;
        const div = e.currentTarget.parentNode.querySelector('div');
        const isUnlock =  e.currentTarget.parentNode.querySelectorAll('input')[1];
        if(isUnlock.checked){
            if(e.currentTarget.innerText == 'Hide it'){
                div.style.display = 'none';
                e.currentTarget.innerText = 'Show more'
            }
            else {
                div.style.display = '';
            e.currentTarget.innerText = 'Hide it'
            }
            
        }
        
    }
}