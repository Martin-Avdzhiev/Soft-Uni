function generateReport() {
	const rows = document.querySelectorAll('tbody tr');
    const columns = document.querySelectorAll('thead tr th');
    const result = [];
    
    for (let i = 0 ; i<rows.length; i++){
        const currentObject = {};
        const data = rows[i].children; 
        for (let j = 0; j<columns.length; j++){
            
           const isChecked = columns[j].children[0].checked === true;
           if (isChecked){
            const value = data[j].textContent;
            const key = columns[j].textContent.toLowerCase().trim();
            console.log(value)
            currentObject[key] = value;
           }
        }
        result.push(currentObject);
    }
    const json = JSON.stringify(result);
    let output = document.getElementById('output')
    output.textContent = json;
}
