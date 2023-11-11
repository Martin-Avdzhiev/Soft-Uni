import './styles/Header.css';
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <header>
            <div class="navbar">
                <Link to="/cars">Cars</Link>
                <Link to="/motorbikes">Motorbikes</Link>
                <Link to="/atv">ATVs</Link>
                <Link to="/signup" class="right">Sign Up</Link>
                <Link to="/login" class="right">Login</Link>
            </div>
        </header>

    )
}