function solve() {
	const form = document.getElementsByTagName('form')[0];
	form.addEventListener('click',(e)=>{
		e.preventDefault();
	});
	const openArea = document.querySelectorAll('section')[1].querySelectorAll('div')[1];
	const inProgress = document.querySelectorAll('section')[2].querySelectorAll('div')[1];
	const completeArea = document.querySelectorAll('section')[3].querySelectorAll('div')[1];

	const taskInput = document.getElementById('task');
	const descriptionInput = document.getElementById('description');
	const dateInput = document.getElementById('date');
	const addButton = document.getElementById('add');
	
	const progressFirstButton = document.createElement('button');
	const progressSecondButton = document.createElement('button');

	addButton.addEventListener('click',()=> {
		if(!taskInput.value || !descriptionInput.value || !dateInput.value){
			return;
		}	
		const article = document.createElement('article');
		const h3 = document.createElement('h3');
		const p1 = document.createElement('p');
		const p2 = document.createElement('p');
		const divButtons = document.createElement('div');
		const firstButton = document.createElement('button');
		const secondButton = document.createElement('button');
		h3.innerText = taskInput.value;	
		p1.innerText = 'Description: ' + descriptionInput.value;
		p2.innerText = 'Due Date: ' + dateInput.value;
		divButtons.classList.add('flex');
		firstButton.classList.add('green');
		firstButton.innerText = 'Start';
		secondButton.classList.add('red');
		secondButton.innerText = 'Delete';
		divButtons.appendChild(firstButton);
		divButtons.appendChild(secondButton);
		article.appendChild(h3);
		article.appendChild(p1);
		article.appendChild(p2);
		article.appendChild(divButtons);
		openArea.appendChild(article);

		firstButton.addEventListener('click',()=> {
			
			inProgress.appendChild(article);
			progressFirstButton.classList.add('red');
			progressSecondButton.classList.add('orange');
			progressFirstButton.innerText = 'Delete';
			progressSecondButton.innerHTML = 'Finish';
			divButtons.removeChild(firstButton);
			divButtons.removeChild(secondButton);
			divButtons.appendChild(progressFirstButton);
			divButtons.appendChild(progressSecondButton);
			article.appendChild(divButtons);
		});






		secondButton.addEventListener('click',()=> {
			article.remove();
		});
		progressSecondButton.addEventListener('click',(e)=> {
			divButtons.remove();
			completeArea.appendChild(article);
		})
		progressFirstButton.addEventListener('click',()=> {
			article.remove();
		})
	});
}