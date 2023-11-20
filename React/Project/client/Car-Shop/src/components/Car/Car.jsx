import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';
import '../styles/transformTransition.css';
export default function Car({
    _id,
    name,
    price,
    mileage,
    city,
    imageUrl
}) {
    const [isEnter, setIsEnter] = useState(false);
    return (

        <div className="car">
            <div onMouseEnter={() => setIsEnter((v) => true)} onMouseLeave={() => setIsEnter((v) => false)}>
                <Link to={`/cars/${_id}`}>
                    <CSSTransition
                        in={isEnter}
                        timeout={300}
                        classNames="transition"
                    >
                        <img src={imageUrl} alt={name} />
                    </CSSTransition>
                </Link>
            </div>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p>Mileage: {mileage} miles</p>
            <p>City: {city}</p>
            <Link to={`/cars/${_id}`}>Details</Link>
        </div>
    )
}