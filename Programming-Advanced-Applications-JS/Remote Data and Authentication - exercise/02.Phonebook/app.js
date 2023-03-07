function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/phonebook';

    const ul = document.getElementById('phonebook');
    const load = document.getElementById('btnLoad');
    const create = document.getElementById('btnCreate');
    load.addEventListener('click', async () => {
        ul.replaceChildren();
        const response = await fetch(url);
        const data = await response.json();
        const values = Object.values(data);
        for (const value of values) {
            const person = value.person;
            const phone = value.phone;
            const li = document.createElement('li');
            li.textContent = `${person}: ${phone}`;
            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            li.id = value._id;
            li.appendChild(deleteButton);
            ul.appendChild(li);
            deleteButton.addEventListener('click', removePerson);
        }
    });
    create.addEventListener('click', async () => {
        const person = document.getElementById('person');
        const phone = document.getElementById('phone');
        const object = {

            "person": person.value,

            "phone": phone.value

        }
        const li = document.createElement('li');
        li.textContent = `${person.value}: ${phone.value}`;
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        li.appendChild(deleteButton);
        ul.appendChild(li);
        deleteButton.addEventListener('click', removePerson);
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application-json'
            },
            body: JSON.stringify(object)
        })
    })
}

async function removePerson(e) {
    const li = e.target.parentNode;
    const id = li.id;
    li.remove();
    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE'
    });
}

attachEvents();