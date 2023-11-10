const baseUrl = 'http://localhost:3030/jsonstore/users';

export const deleteUser = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE'
    });
}

export const getOne = async(id) => {
    const response = await fetch(`${baseUrl}/${id}`);
    const result = await response.json();
    return result;
}
export const getAll = () => {
    const result = fetch(baseUrl)
    .then(response => response.json())
    .then();
    return result
}

export const create = async (data) => {
    const body = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        imageUrl: data.imageUrl,
        phoneNumber: data.phoneNumber,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        address:{
            country: data.country,
            city: data.city,
            street: data.street,
            streetNumber: data.streetNumber,
        }
        

    }
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    const result = await response.json();
    console.log(result)
    return result;
}