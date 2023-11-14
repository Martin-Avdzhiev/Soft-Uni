import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneData } from '../../services/fetchServices';
import { numberFormat } from '../../utils/format';
import '../styles/transformTransition.css';
import '../styles/motorbike/OneMotorbike.css'
export default function OneMotorbike() {
    const [isEnter, setIsEnter] = useState(false);
    const [motorbike, setMotorbike] = useState({});
    const [numbers, setNumbers] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        getOneData('motorbikes', id).then(data => {
            setMotorbike(data);
            setNumbers([numberFormat(data.price), numberFormat(data.mileage)]);
        })

    }, [])
    return (
        <div className='one-motorbike-container'>
            <div className="one-motorbike">
                <div onMouseEnter={() => setIsEnter((v) => true)} onMouseLeave={() => setIsEnter((v) => false)}>
                    <CSSTransition
                        in={isEnter}
                        timeout={300}
                        classNames="transition"
                    >
                        <img src={motorbike.imageUrl} alt={motorbike.name} />
                    </CSSTransition>
                </div>
                <h2>{motorbike.name}</h2>
                <ul className='information'>
                    <li>Price: ${numbers[0]}</li>
                    <li>Mileage: {numbers[1]} miles</li>
                    <li>City: {motorbike.city}</li>
                    <li>Engine: {motorbike.engine}</li>
                    <li>Type: {motorbike.type}</li>
                </ul>
            </div>
        </div>
    )
}