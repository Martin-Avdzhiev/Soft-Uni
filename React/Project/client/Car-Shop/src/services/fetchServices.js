const getAllData = async (type) => {
    const response = await fetch(`http://localhost:3000/api/${type}`);
    const data = await response.json();
    return data;
}

export { getAllData }