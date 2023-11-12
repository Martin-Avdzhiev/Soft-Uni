import './styles/Header.css';
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <header>
            <div className="navbar">
                <Link to="/">Welcome</Link>
                <Link to="/cars">Cars</Link>
                <Link to="/motorbikes">Motorbikes</Link>
                <Link to="/signup" className="right">Sign Up</Link>
                <Link to="/login" className="right">Login</Link>
            </div>
        </header>

    )
}