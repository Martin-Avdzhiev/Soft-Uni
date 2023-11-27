import { useEffect, useState } from 'react';

import Motorbike from './Motorbike.jsx';
import Spinner from '../Spinner.jsx';

import { numberFormat } from '../../utils/format.js';
import { getAllData } from '../../services/dataServices.js';

import '../styles/Motorbike/MotorbikeCatalog.css';
export default function CarCatalog() {
    const [isLoading, setIsLoading] = useState(true);
    const [motorbikes, setMotorbike] = useState([]);
    useEffect(() => {
        getAllData('motorbikes')
            .then(result => {
                setMotorbike(result)
                setIsLoading(false);
            })
            .catch(error => console.log(error));
    }, [])
    return (
        <>
            {isLoading ? <Spinner /> : (
                <div className="motorbikes-container">
                    {motorbikes.map(motorbike =>
                        <Motorbike
                            key={motorbike._id}
                            _id={motorbike._id}
                            name={motorbike.name}
                            price={numberFormat(motorbike.price)}
                            mileage={numberFormat(motorbike.mileage)}
                            city={motorbike.city}
                            imageUrl={motorbike.imageUrl}
                            cubicCentimeter={motorbike.cubicCentimeter}
                        />
                    )}
                </div>
            )}

        </>
    )
}