import '../styles/User/Register.css';
import React, { useState } from 'react';
export default function Register() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });

    const isFormValid = () => {
        return formData.username.trim() !== '' && formData.password.trim() !== '' && formData.email.trim() !== '';
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form className="signup-form">
            <h2>Sign Up</h2>
            <label htmlFor="signup-username">Username</label>
            <input
                type="text"
                id="signup-username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required />

            <label htmlFor="signup-email">Email</label>
            <input type="email"
                id="signup-email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required />

            <label htmlFor="signup-password">Password</label>
            <input type="password"
                id="signup-password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required />

            <label htmlFor="signup-repeat-password">Repeat Password</label>
            <input type="password"
                id="signup-repeat-password"
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleInputChange}
                required />

            <button type="submit" disabled={!isFormValid()}>Sign Up</button>
        </form>
    )
}