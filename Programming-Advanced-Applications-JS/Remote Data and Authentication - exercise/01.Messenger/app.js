async function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const sendName = document.querySelector('#controls').querySelector('input');
    const sendMessage = document.querySelector('#controls').querySelectorAll('input')[1];
    const buttonSend = document.getElementById('submit');
    const buttonRefresh = document.getElementById('refresh');
    const text = document.getElementById('messages');
    buttonSend.addEventListener('click', async () => {
        const authorName = sendName.value;
        const message = sendMessage.value;
        const object = {
            'author': authorName,
            'content': message,
        }
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        });

    });
    buttonRefresh.addEventListener('click', async () => {
        const response = await fetch(url);
        const data = await response.json();
        const entries = Object.values(data);
        let value = '';
        for (let i = 0; i < entries.length; i++) {
            if (i == entries.length - 1) {
                value += `${entries[i].author}: ${entries[i].content}`;
            }
            else {
                value += `${entries[i].author}: ${entries[i].content}\n`;
            }
        }
        text.value = value;

    })
}

attachEvents();

'Spami: Hello, are you there?Garry: Yep, whats up :?George: Hello, guys! :))'
'Spami: Hello, are you there?\nGarry: Yep, whats up :?\nGeorge: Hello, guys! :))'