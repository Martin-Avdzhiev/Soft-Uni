import { Link } from "react-router-dom";
import './styles/PageNotFound.css';
export default function PageNotFound(){
    return (
        <div className="error-container">
        <h1 className="error-code">404</h1>
        <p className="error-message">We can't find the page you're looking for.</p>
        <Link to="/" className="go-home-link">Go Home</Link>
      </div>
    )
}