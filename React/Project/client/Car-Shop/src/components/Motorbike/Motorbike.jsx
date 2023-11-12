import { Link } from 'react-router-dom';
export default function Motorbike({
    _id,
    name,
    price,
    mileage,
    city,
    imageUrl
}){
    return(
        <div className="motorbike">
        <div>
            <img src={imageUrl} alt={name} />
        </div>
        <h2>{name}</h2>
        <p>Price: ${price}</p>
        <p>Mileage: {mileage} miles</p>
        <p>City: {city}</p>
        <Link to={`/motorbikes/${_id}`}>Details</Link>
    </div>
    )
}