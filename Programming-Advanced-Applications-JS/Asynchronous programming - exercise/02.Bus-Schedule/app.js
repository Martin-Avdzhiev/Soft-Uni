function solve() {
    const label = document.querySelector('#info span');
    const url = `http://localhost:3030/jsonstore/bus/schedule`;
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    let stop = {
        nextStop: 'depot'
    }
    async function depart() {
        try {
            const response = await fetch(`${url}/${stop.nextStop}`);
            const data = await response.json();
            label.innerText = `Next stop ${data.name}`;
            departButton.disabled = true;
            arriveButton.disabled = false;
        } catch (error) {
            departButton.disabled = true;
            arriveButton.disabled = true;
            label.innerText = 'Error';
        }

    }

    async function arrive() {
        try {
            const response = await fetch(`${url}/${stop.nextStop}`);
            const data = await response.json();
            label.innerText = `Arriving at ${data.name}`;
            stop.nextStop = data.next;
            departButton.disabled = false;
            arriveButton.disabled = true;
        } catch (error) {
            departButton.disabled = true;
            arriveButton.disabled = true;
            label.innerText = 'Error';
        }
    }

    return {
        depart,
        arrive
    };
}

let result = solve();



