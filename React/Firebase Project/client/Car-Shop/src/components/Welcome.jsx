import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './styles/Welcome.css';
import './styles/transformTransition.css';
import welcomeCar from '../assets/welcome-car.jpg';
import welcomeMotorbike from '../assets/welcome-motorbike.jpg';
import AuthContext from '../contexts/authContext';
export default function Welcome() {
    const [isEnterCar, setIsEnterCar] = useState(false);
    const [isEnterMotorbike, setIsEnterMotorbike] = useState(false);
    const { username } = useContext(AuthContext);

    return (
        <>
            <div className='welcome'>
                <div className='welcome-message'>
                    <h1>Welcome to our Car Shop</h1>
                    <h3>psss, we offer motorbikes too...</h3>
                </div>
                <p>Explore our wide range of cars, motorbikes.</p>
                {!username && (
                    <>
                        <p className='dont-have-account'>Don't have an account?</p>
                        <Link to="/signup">SIGN UP</Link>
                    </>
                )}
            </div>
            <div className='welcome-images'>
                <div className='welcome-car'>
                    <Link to={'cars'} onMouseEnter={() => setIsEnterCar((v) => true)} onMouseLeave={() => setIsEnterCar((v) => false)}>
                        <CSSTransition
                            in={isEnterCar}
                            timeout={300}
                            classNames="transition"
                        >
                            <img src={welcomeCar} alt="Cars" />
                        </CSSTransition>
                    </Link>
                </div>
                <div className='welcome-motorbike'>
                    <Link to={'motorbikes'} onMouseEnter={() => setIsEnterMotorbike((v) => true)} onMouseLeave={() => setIsEnterMotorbike((v) => false)}>
                        <CSSTransition
                            in={isEnterMotorbike}
                            timeout={300}
                            classNames="transition"
                        >
                            <img src={welcomeMotorbike} alt="Motorbikes" />
                        </CSSTransition>
                    </Link>
                </div>
            </div>
        </>
    )
}