function addItem() {
    const menu = document.getElementById('menu');
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');
    const option = document.createElement('option');
    option.textContent = newItemText.value;
    option.value = newItemValue.value;
    menu.appendChild(option);
    newItemText.value = '';
    newItemValue.value = '';
}