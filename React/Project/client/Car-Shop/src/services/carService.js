const getAllCars = async () => {
    const response = await fetch('http://localhost:3000/api/cars');
    const data = await response.json();
    return data;
}

export { getAllCars }