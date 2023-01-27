function addItem() {
    const itemsElements = document.getElementById('items');
    const input = document.getElementById('newItemText')
    const newItem = document.createElement('li');
    itemsElements.appendChild(newItem);
    newItem.textContent = input.value;;
    const deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = '[Delete]';
    deleteLink.addEventListener('click', () =>{
        deleteLink.parentNode.remove();

    })
    newItem.appendChild(deleteLink); 
    input.value = '';
}