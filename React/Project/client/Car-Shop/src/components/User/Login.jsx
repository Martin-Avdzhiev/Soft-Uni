import '../styles/User/Login.css';
import React, { useState } from 'react';
export default function Login(){
    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });
    
      const isFormValid = () => {
        return formData.username.trim() !== '' && formData.password.trim() !== '';
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
      };
     const onSubmitHandler = (e) => {
        e.preventDefault();
      }
      return (
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
    
          <label htmlFor="login-username">Username</label>
          <input
            type="text"
            id="login-username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
    
          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            id="login-password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
    
          <button type="submit" disabled={!isFormValid()} onSubmit={onSubmitHandler}>
            Login
          </button>
        </form>
      );
}