import { useContext, useState } from 'react';
import './styles/Header.css';
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../contexts/authContext';
export default function Header() {
    const {
        isAuthenticated,
        username,
        email,
        _id
    } = useContext(AuthContext)
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    return (
        <header>
            <div className="navbar">
                <Link to="/">Welcome</Link>
                <Link to="/cars">Cars</Link>
                <Link to="/motorbikes">Motorbikes</Link>
                {isAuthenticated && (
                    <>
                        <Link to="/logout" className="right">Logout</Link>
                        <Link to={`/user/${_id}`} className="right">{username}</Link>
                        <Link to="/create/car">Create Car offer</Link>
                        <Link to="/create/motorbike">Create Motorbike offer</Link>
                    </>
                )}
                {!isAuthenticated && (
                    <>
                    <Link to="/signup" className="right">Sign Up</Link>
                    <Link to="/login" className="right">Login</Link>
                    </>
                )}
            </div>
        </header>

    )
}