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

const postOneVehicle = async (type, data) => {
    const response = await fetch(`http://localhost:3000/api/${type}/create`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await response.json();
    return result;
}
export { getAllData, getOneData, postOneVehicle }