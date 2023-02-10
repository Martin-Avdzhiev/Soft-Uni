window.addEventListener('load', solve);

function solve() {
    const addButtonElement = document.getElementById('add');
    const modelInputElement = document.getElementById('model');
    const yearInputElement = document.getElementById('year');
    const descriptionElement = document.getElementById('description');
    const priceInputElement = document.getElementById('price');
    const tbodyElement = document.getElementById('furniture-list');
    const totalPrice = document.querySelector('.total-price');
    addButtonElement.addEventListener('click',(e)=> {
        e.preventDefault();
        if(Number(yearInputElement.value)<=0 || Number(priceInputElement.value)<=0){
            throw new Error('Invalid Input');
        }
        if(!modelInputElement.value || !yearInputElement.value || !descriptionElement.value || !priceInputElement.value){
            throw new Error('Empty input not allowed');
        }
        const row = document.createElement('tr');
        const modelData = document.createElement('td');
        const priceData = document.createElement('td');
        row.classList.add('info');

        const infoAndBuyButtonData = document.createElement('td');
        const infoButton = document.createElement('button');
        infoButton.classList.add('moreBtn');
        const buyButton = document.createElement('button');
        buyButton.classList.add('buyBtn');

        modelData.innerText = modelInputElement.value;
        priceData.innerText = priceInputElement.value;
        infoButton.innerText = 'More Info';
        buyButton.innerText = 'Buy it';

        infoAndBuyButtonData.appendChild(infoButton);
        infoAndBuyButtonData.appendChild(buyButton);
        row.appendChild(modelData);
        row.appendChild(priceData);
        row.appendChild(infoAndBuyButtonData);
       
        tbodyElement.appendChild(row);
    

        const hideRow = document.createElement('tr');
        hideRow.classList.add('hide')
        const yearData = document.createElement('td');
        yearData.innerText = yearInputElement.value;
        const descriptionData = document.createElement('td');
        descriptionData.setAttribute('colspan', 3);
        descriptionData.innerText = descriptionElement.value;
        hideRow.appendChild(yearData);
        hideRow.appendChild(descriptionData);
        tbodyElement.appendChild(hideRow);

        buyButton.addEventListener('click', ()=> {
            tbodyElement.removeChild(row);
            totalPrice.innerText = (Number(totalPrice.innerText) + Number(priceData.innerText)).toFixed(2);
            hideRow.classList.add('hide');
            hideRow.style.display = 'none';
        })
        infoButton.addEventListener('click',()=> {
            if(infoButton.innerText == 'Less Info'){
                infoButton.innerText = 'More Info';
                hideRow.classList.add('hide');
                hideRow.style.display = 'none';
            }
            else if (infoButton.innerText == 'More Info'){
                infoButton.innerText = 'Less Info';
                hideRow.classList.remove('hide');
                hideRow.style.display = 'contents';
            }
            
        })
        modelInputElement.value = '';
        yearInputElement.value = '';
        descriptionElement.value = '';
        priceInputElement.value = '';
    })
}
