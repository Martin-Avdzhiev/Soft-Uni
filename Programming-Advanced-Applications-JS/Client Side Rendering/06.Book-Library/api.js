const url = 'http://localhost:3030/jsonstore/collections/books';
export async function get(){
    const response = await fetch(url);
    const data = await response.json();
    const array = {};
    return data;
}