function addItem() {
    const itemsElement = document.getElementById('items');
    const newElement = document.createElement('li');
    const input = document.getElementById('newItemText').value;
    newElement.textContent = input;
    itemsElement.appendChild(newElement);
}