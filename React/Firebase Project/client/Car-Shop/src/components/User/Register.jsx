import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';
import '../styles/User/Register.css';
import React, { useContext, useState, useEffect } from 'react';
export default function Register() {

    const isFormValid = () => {
        return values.username.trim() !== ''
            && values.password.trim() !== ''
            && values.email.trim() !== ''
            && values.repeatPassword.trim() !== '';
    };
    const {
        registerSubmitHandler,
        registerError,
        clearError
    } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    })
    useEffect(() => {
        return () => { clearError() }
    }, [])
    return (
        <form className="signup-form" onSubmit={onSubmit}>
            <h2>Sign Up</h2>
            <label htmlFor="signup-username">Username</label>
            <input
                type="text"
                id="signup-username"
                name="username"
                value={values.username}
                onChange={onChange}
                required />

            <label htmlFor="signup-email">Email</label>
            <input type="email"
                id="signup-email"
                name="email"
                value={values.email}
                onChange={onChange}
                required />

            <label htmlFor="signup-password">Password</label>
            <input type="password"
                id="signup-password"
                name="password"
                value={values.password}
                onChange={onChange}
                required />

            <label htmlFor="signup-repeat-password">Repeat Password</label>
            <input type="password"
                id="signup-repeat-password"
                name="repeatPassword"
                value={values.repeatPassword}
                onChange={onChange}
                required />

            <button type="submit" disabled={!isFormValid()}>Sign Up</button>
            {registerError && (
                <div className='register-error-container'>
                    <p className='error'>{registerError}</p>
                </div>
            )}
        </form>
    )
}

// disabled={!isFormValid()}