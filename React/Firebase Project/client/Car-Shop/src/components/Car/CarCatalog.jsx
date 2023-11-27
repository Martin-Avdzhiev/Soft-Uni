import { useEffect, useState } from 'react';

import Car from './Car';
import Spinner from '../Spinner.jsx';

import { numberFormat } from '../../utils/format.js';
import { getAllData } from '../../services/dataServices.js';

import '../styles/Car/CarCatalog.css';
export default function CarCatalog() {
    const [isLoading, setIsLoading] = useState(true);
    const [cars, setCars] = useState([]);
    useEffect(() => {
        getAllData('cars').then(result => {
            setCars(result);
            setIsLoading(false);
        }
        )
            .catch(error => console.log(error));
    }, [])
    return (
        <>
            {isLoading ? <Spinner /> : (
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
            )}
        </>
    )
}