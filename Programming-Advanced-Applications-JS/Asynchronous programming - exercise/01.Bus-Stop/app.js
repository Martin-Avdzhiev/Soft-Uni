async function getInfo() {
    const input = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${input}`;
    const stopName = document.getElementById('stopName');
    const ul = document.getElementById('buses');
    try {
        ul.replaceChildren();
        const response = await fetch(url);
        const data = await response.json();  
        stopName.innerText = data.name;
        const entries = Object.entries(data.buses);
        for (const entry of entries){
            const li = document.createElement('li');
            li.innerText = `Bus ${entry[0]} arrives in ${entry[1]} minutes`;
            ul.appendChild(li)
        }
    } catch {
        stopName.innerText = 'Error';
    }
}