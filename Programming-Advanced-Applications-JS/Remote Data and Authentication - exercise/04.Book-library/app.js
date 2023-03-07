function solve() {
    const url = 'http://localhost:3030/jsonstore/collections/books';
    const loadButton = document.getElementById('loadBooks');
    const ids = [];
    const tbody = document.querySelector('tbody');
    let titleInput = document.getElementsByName('title')[0];
    let authorInput = document.getElementsByName('author')[0];
    const form = document.querySelector('form');
    const submit = document.querySelector('form').querySelector('button');
    loadButton.addEventListener('click', load);

    async function load(e) {

        const response = await fetch(url);
        const data = await response.json();
        tbody.replaceChildren();
        for (const key of Object.keys(data)) {
            ids.push(key);
        }

        for (const value of Object.entries(data)) {
            // console.log(value)
            const tr = document.createElement('tr');
            tr.setAttribute('id', value[0]);
            const title = document.createElement('td');
            title.innerText = value[1].title;
            const author = document.createElement('td');
            author.innerText = value[1].author;
            const buttons = document.createElement('td');
            const firstButton = document.createElement('button');
            const secondButton = document.createElement('button');
            firstButton.innerText = 'Edit';
            secondButton.innerText = 'Delete';
            tr.appendChild(title);
            tr.appendChild(author);
            buttons.appendChild(firstButton);
            buttons.appendChild(secondButton);
            tr.appendChild(buttons);
            tbody.appendChild(tr);
            firstButton.addEventListener('click', edit);
            secondButton.addEventListener('click', deleteElement);

        }
    }
    submit.addEventListener('click', addBook);

    async function addBook(e) {
        e.preventDefault();
        if (!titleInput.value || !authorInput.value) {
            return;
        }
        if (submit.innerText == 'Save') {
            return;
        }
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                "author": authorInput.value,

                "title": titleInput.value

            })
        });
        const get = await fetch(url);
        const data = await get.json();
        for (const value of Object.values(data)) {
            if (value.author == authorInput.value && value.title == titleInput.value) {
                ids.push(value._id);
            }
        }
        titleInput.value = '';
        authorInput.value = '';
        loadButton.click();
    }
    async function edit(e) {
        const h3 = form.querySelector('h3')
        h3.innerText = 'Edit FORM';
        submit.innerText = 'Save';
        console.log(e.target.parentNode.parentNode)
        titleInput.value = e.target.parentNode.parentNode.children[0].innerText;
        authorInput.value = e.target.parentNode.parentNode.children[1].innerText;
        const currentId = e.target.parentNode.parentNode.id;
        submit.addEventListener('click', async () => {
            if (submit.innerText == 'Submit') {
                return;
            }
            const response = await fetch(`${url}/${currentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'apllication/json'
                },
                body: JSON.stringify({
                    "author": authorInput.value,
                    "title": titleInput.value
                })
            })
            submit.innerText = 'Submit';
            titleInput.value = '';
            authorInput.value = '';
            loadButton.click();
        })

    }
    async function deleteElement(e) {
        const currentTr = e.target.parentNode.parentNode
        const id = currentTr.id;
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE',
        });
        loadButton.click();
    }

}

solve()