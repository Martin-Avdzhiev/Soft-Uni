const getAllMotorbikes = async () => {
    const response = await fetch('http://localhost:3000/api/motorbikes');
    const data = await response.json();
    return data;
}

export { getAllMotorbikes }