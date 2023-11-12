import '../styles/Motorbike/MotorbikeCatalog.css';
import { useEffect, useState } from 'react';
import Motorbike from './Motorbike.jsx';
import { numberFormat } from '../../utils/format.js'
export default function CarCatalog() {
    const [motorbikes, setMotorbike] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/motorbikes')
            .then(response => response.json())
            .then(data => setMotorbike(data))
            .catch(err => console.log(err))
    }, [])
    return (
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
    )
}