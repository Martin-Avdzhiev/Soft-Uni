window.addEventListener("load", solve);

function solve() {
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const age = document.getElementById('age');

  const gender = document.getElementById('genderSelect');
  const description = document.getElementById('task');
  const submitButton = document.getElementById('form-btn');
  const ul = document.getElementById('in-progress');
  const counter = document.getElementById('progress-count');
  const finish = document.getElementById('finished');
  const clear = document.getElementById('clear-btn');
  submitButton.addEventListener('click', () => {
    if (firstName.value && lastName.value && age.value && description.value && gender.value) {
      const li = document.createElement('li');
      li.classList.add('each-line');
      const article = document.createElement('article');
      const h4 = document.createElement('h4');
      h4.innerText = firstName.value + ' ' + lastName.value;
      const firstP = document.createElement('p');
      firstP.innerText = gender.value + ', ' + age.value;
      const secondP = document.createElement('p');
      secondP.innerText = 'Dish description: ' + description.value;
      const edit = document.createElement('button');
      edit.setAttribute('class','edit-btn');
      edit.innerText = 'Edit';
      const complete = document.createElement('button');
      complete.setAttribute('class','complete-btn');
      complete.innerText = 'Mark as complete';
      article.appendChild(h4);
      article.appendChild(firstP);
      article.appendChild(secondP);
      li.appendChild(article);
      li.appendChild(edit);
      li.appendChild(complete);
      ul.appendChild(li);
      firstName.value = '';
      lastName.value = '';
      age.value = '';
      description.value = '';
      counter.innerText = Number(counter.innerText) + 1;
      edit.addEventListener('click', () => {
        firstName.value = h4.innerText.split(' ')[0];
        lastName.value = h4.innerText.split(' ')[1];
        age.value = firstP.innerText.split(', ')[1];
        description.value = secondP.innerText.split(': ')[1];
        li.remove();
        counter.innerText = Number(counter.innerText) - 1;
      })
      complete.addEventListener('click', () => {
        finish.appendChild(li);
        edit.remove();
        complete.remove();
        counter.innerText = Number(counter.innerText) - 1;
      })
      clear.addEventListener('click', () => {
        finish.innerText = '';
      })
    }
    else {
       return;
    }
  })
}

