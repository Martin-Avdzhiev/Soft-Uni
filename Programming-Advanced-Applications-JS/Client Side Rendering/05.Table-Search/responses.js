const url = 'http://localhost:3030/jsonstore/advanced/table';
export async function get(){
    const response = await fetch(url);
    const data = await response.json();
    return Object.values(data);
}