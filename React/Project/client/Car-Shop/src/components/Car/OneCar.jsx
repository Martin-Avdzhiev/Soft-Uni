import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneData } from '../../services/dataServices';
import { numberFormat } from '../../utils/format';
import { useNavigate } from "react-router-dom";
import '../styles/transformTransition.css';
import '../styles/Car/OneCar.css'
export default function OneCar() {
    const [isEnter, setIsEnter] = useState(false);
    const [car, setCar] = useState({});
    const [numbers, setNumbers] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getOneData('cars', id).then(data => {
            setCar(data);
            setNumbers([numberFormat(data.price), numberFormat(data.mileage)]);
        })
        .catch(error => {
            navigate("/404");
        });

    }, [])
    return (
        <div className='one-car-container'>
            <div className="one-car">
                <div onMouseEnter={() => setIsEnter((v) => true)} onMouseLeave={() => setIsEnter((v) => false)}>
                    <CSSTransition
                        in={isEnter}
                        timeout={300}
                        classNames="transition"
                    >
                        <img src={car.imageUrl} alt={car.name} />
                    </CSSTransition>
                </div>
                <h2>{car.name}</h2>
                <ul className='information'>
                    <li>Price: ${numbers[0]}</li>
                    <li>Mileage: {numbers[1]} miles</li>
                    <li>City: {car.city}</li>
                    <li>Engine: {car.engine}</li>
                    <li>Type: {car.type}</li>
                </ul>
            </div>
        </div>
    )
}