const getAllData = async (type) => {
    const response = await fetch(`http://localhost:3000/api/${type}`);
    const data = await response.json();
    return data;
}

const getOneData = async (type, id) => {
    const response = await fetch(`http://localhost:3000/api/${type}/${id}`);
    const data = await response.json();
    return data;
}


export { getAllData, getOneData }