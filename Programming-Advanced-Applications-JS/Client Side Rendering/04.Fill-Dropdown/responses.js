const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

export async function get(){
    const response = await fetch(url);
    const data = await response.json();
    const array = [];
    for (const value of Object.values(data)) {
        array.push(value)
    }
    return array;
}

export async function post(data){
    const response = await fetch(url,{
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}