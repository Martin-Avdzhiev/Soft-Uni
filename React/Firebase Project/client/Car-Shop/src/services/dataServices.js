

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://localhost:3001'
const url = `${baseUrl}/api`;


const getAllData = async (type) => {
    const response = await fetch(`${url}/${type}`);
    const data = await response.json();
    return data;
}

const getOneData = async (type, id) => {
    const response = await fetch(`${url}/${type}/${id}`);
    const data = await response.json();
    return data;
}

const postOneVehicle = async (type, data) => {
    const response = await fetch(`${url}/${type}/create`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await response.json();
    return result;
}

const updateVehicle = async (type, vehicleId, data) => {
    const response = await fetch(`${url}/${type}/${vehicleId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await response.json();
    return result
}

const deleteVehicle = async (type, vehicleId) => {
    const response = await fetch(`${url}/${type}/${vehicleId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json();
    return result
}

export { getAllData, getOneData, postOneVehicle, updateVehicle, deleteVehicle }