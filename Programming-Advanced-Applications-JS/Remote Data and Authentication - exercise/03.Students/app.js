async function solve() {
    const url = 'http://localhost:3030/jsonstore/collections/students';
    const ids = [];
    const firstName = document.querySelector('.inputs').querySelectorAll('input')[0];
    const lastName = document.querySelector('.inputs').querySelectorAll('input')[1];
    const facultyNumber = document.querySelector('.inputs').querySelectorAll('input')[2];
    const grade = document.querySelector('.inputs').querySelectorAll('input')[3];
    const button = document.getElementById('submit');
    const result = document.getElementById('results');
    const tbody = result.querySelector('tbody');
    button.addEventListener('click', submit);
    async function getStudents() {
        const response = await fetch(url);
        const data = await response.json();
        for (const id of Object.keys(data)) {
            ids.push(id);
        }
        for (const value of Object.values(data)) {
            const tr = document.createElement('tr');
            const name = document.createElement('td');
            name.innerText = value.firstName;
            const last = document.createElement('td');
            last.innerText = value.lastName;
            const number = document.createElement('td');
            number.innerText = value.facultyNumber;
            const currentGrade = document.createElement('td');
            currentGrade.innerText = value.grade;
            tr.appendChild(name);
            tr.appendChild(last);
            tr.appendChild(number);
            tr.appendChild(currentGrade);
            tbody.appendChild(tr);
        }

    }
    async function submit(e) {
        e.preventDefault()
        if (!firstName.value || !lastName.value || !facultyNumber.value || !grade.value) {
            return;
        }
        const tr = document.createElement('tr');
        const name = document.createElement('td');
        name.innerText = firstName.value;
        const last = document.createElement('td');
        last.innerText = lastName.value;
        const number = document.createElement('td');
        number.innerText = facultyNumber.value;
        const currentGrade = document.createElement('td');
        currentGrade.innerText = grade.value;
        tr.appendChild(name);
        tr.appendChild(last);
        tr.appendChild(number);
        tr.appendChild(currentGrade);
        tbody.appendChild(tr);
        firstName.value = '';
        lastName.value = '';
        facultyNumber.value = '';
        grade.value = '';
        const object = {
            firstName: name.innerText,
            lastName: last.innerText,
            facultyNumber: number.innerText,
            grade: currentGrade.innerText
        }
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        });
    }
    getStudents();
}
solve();