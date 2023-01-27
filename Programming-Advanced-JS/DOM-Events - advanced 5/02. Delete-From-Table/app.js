function deleteByEmail() {
    const rows = document.querySelectorAll('tbody tr');
    const input = document.querySelector('input[name="email"]').value;
    const output = document.getElementById('result');
    let isFound = false;
     for (const row of rows){
        const currentName = row.children[0].textContent;
        const currentEmail = row.children[1].textContent;
        if(currentName == input || currentEmail == input){
            row.remove();
            output.textContent = 'Deleted.';
            isFound = true;
        }
     }
     if (!isFound){
        output.textContent = 'Not found.'
     }
}