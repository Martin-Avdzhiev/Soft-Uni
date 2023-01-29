function solve() {
    const [generateButton, buyButton] = Array.from(document.querySelectorAll('button'));
    generateButton.addEventListener('click',generate);

    buyButton.addEventListener('click',buy);

    function generate (){
      const input = JSON.parse(document.querySelector('textarea').value);
      input.forEach(element => {
          const tr = document.createElement('tr');
          const td1 = document.createElement('td');
          const img = document.createElement('img');
          img.src = element.img;
          td1.appendChild(img);
          tr.append(td1);
          const p1 = document.createElement('p');
          p1.textContent = element.name;
          const td2 = document.createElement('td');
          td2.appendChild(p1);
          tr.appendChild(td2);
          const td3 = document.createElement('td');
          const p2 = document.createElement('p');
          p2.textContent = Number(element.price);
          td3.appendChild(p2);
          tr.appendChild(td3);
          const p3 = document.createElement('p');
          const td4 = document.createElement('td');
          p3.textContent = Number(element.decFactor);
          td4.appendChild(p3);
          tr.appendChild(td4);
          const td5 = document.createElement('td');
          const checkButton = document.createElement('input');
          checkButton.type = 'checkbox';
          td5.appendChild(checkButton);
          tr.appendChild(td5);
          document.querySelector('tbody').appendChild(tr);

      });
    }

    function buy () {
      const checkBoxes = Array.from(document.querySelectorAll('tbody input')).filter(x => x.checked);
      const bought = [];
      let price = 0;
      let decoration = 0;
      checkBoxes.forEach(element => {
        const parent = element.parentElement.parentElement;
        const data = Array.from(parent.querySelectorAll('p'));
        bought.push(data[0].textContent);
        price += Number(data[1].textContent);
        decoration += Number(data[2].textContent);
      });
      const textarea = document.querySelectorAll('textarea')[1];
      textarea.textContent += `Bought furniture: ${bought.join(', ')}\r\n`;
      textarea.textContent += `Total price: ${price.toFixed(2)}\r\n`;
      textarea.textContent += `Average decoration factor: ${decoration/checkBoxes.length}`;

    }
}