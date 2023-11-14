import './styles/Welcome.css';
import { Link } from 'react-router-dom';
import welcomeCar from '../assets/welcome-car.jpg';
import welcomeMotorbike from '../assets/welcome-motorbike.jpg';
export default function Welcome() {
    return (
        <>
        <div className='welcome'>
            <div className='welcome-message'>
            <h1>Welcome to our Car Shop</h1>
            <h3>psss, we offer motorbikes too...</h3>
            </div>
            <p>Explore our wide range of cars, motorbikes.</p>
            <p>Don't have account?</p>
            <Link to="/signup">SIGN UP</Link>
        </div>
        <div className='welcome-images'>
            <div className='welcome-car'>
                <img src={welcomeCar} alt="Car" />
            </div>
            <div className='welcome-motorbike'>
                <img src={welcomeMotorbike} alt="Motorbike" />
            </div>
        </div>
        </>
    )
}