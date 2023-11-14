import '../styles/Car/CarCatalog.css';
import { useEffect, useState } from 'react';
import Car from './Car';
import { numberFormat } from '../../utils/format.js';
import { getAllData } from '../../services/fetchServices.js';
export default function CarCatalog() {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        getAllData('cars').then(result => setCars(result))
        .catch(error => console.log(error));
    }, [])
    return (
        <div className="cars-container">
            {cars.map(car => (
                    <Car
                        key={car._id}
                        _id={car._id}
                        name={car.name}
                        price={numberFormat(car.price)}
                        mileage={numberFormat(car.mileage)}
                        city={car.city}
                        imageUrl={car.imageUrl}
                    />
            ))}
        </div>
    )
}