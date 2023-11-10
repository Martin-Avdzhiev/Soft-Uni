import './styles/Header.css';
import carImage from'../assets/header-background-car.jpg'
export default function Header() {
    return (
        <header>
            <div class="navbar">
                <a href="#cars">Cars</a>
                <a href="#motorbikes">Motorbikes</a>
                <a href="#atv">ATVs</a>
                <a href="#signup" class="right">Sign Up</a>
                <a href="#login" class="right">Login</a>
            </div>
        </header>

    )
}