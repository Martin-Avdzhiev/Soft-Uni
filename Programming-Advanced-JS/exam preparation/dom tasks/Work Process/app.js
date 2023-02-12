function solve() {
    const firstNameInput = document.getElementById('fname');
    const lastNameInput = document.getElementById('lname');
    const emailInput = document.getElementById('email');
    const birthInput = document.getElementById('birth');
    const positionInput = document.getElementById('position');
    const salaryInput = document.getElementById('salary');
    const addWorkerButton = document.getElementById('add-worker');
    const divInformation = document.querySelector('.tbl-content');
    const tbodyElement = document.getElementById('tbody');
    const sumElement = document.getElementById('sum');
    addWorkerButton.addEventListener('click',(e)=>{
        e.preventDefault();
        if(!firstNameInput.value || !lastNameInput.value || !emailInput.value || !birthInput.value || !positionInput.value || !salaryInput.value){
            return;
        }
        const row = document.createElement('tr');
        const firstNameTD = document.createElement('td');
        firstNameTD.innerText = firstNameInput.value;
        const lastNameTD = document.createElement('td');
        lastNameTD.innerText = lastNameInput.value;
        const emailTD = document.createElement('td');;
        emailTD.innerText = emailInput.value;
        const birthTD = document.createElement('td');
        birthTD.innerText = birthInput.value;
        const positionTD = document.createElement('td');
        positionTD.innerText = positionInput.value;
        const salaryTD = document.createElement('td');
        salaryTD.innerText = salaryInput.value;
        const finalTD = document.createElement('td');
        const firedButton = document.createElement('button');
        firedButton.classList.add('fired');
        firedButton.innerText = 'Fired';
        const editButton = document.createElement('button');
        editButton.classList.add('edit')
        editButton.innerText = 'Edit';
        finalTD.appendChild(firedButton);
        finalTD.appendChild(editButton);
        row.appendChild(firstNameTD);
        row.appendChild(lastNameTD);
        row.appendChild(emailTD);
        row.appendChild(birthTD);
        row.appendChild(positionTD);
        row.appendChild(salaryTD);
        row.appendChild(finalTD);
        tbodyElement.appendChild(row);
        sumElement.innerText = (Number(sumElement.innerText) + Number(salaryTD.innerText)).toFixed(2);
        firstNameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        birthInput.value = '';
        positionInput.value = '';
        salaryInput.value = '';

        editButton.addEventListener('click',()=> {
        firstNameInput.value = firstNameTD.innerText;
        lastNameInput.value =  lastNameTD.innerText;
        emailInput.value =  emailTD.innerText;
        birthInput.value =  birthTD.innerText;
        positionInput.value =  positionTD.innerText;
        salaryInput.value =  salaryTD.innerText;
        sumElement.innerText = (Number(sumElement.innerText) - Number(salaryTD.innerText)).toFixed(2);
        tbodyElement.removeChild(row);
        });
        firedButton.addEventListener('click',()=> {
        sumElement.innerText = (Number(sumElement.innerText) - Number(salaryTD.innerText)).toFixed(2);
        tbodyElement.removeChild(row);
        })
        
    })
}

solve()