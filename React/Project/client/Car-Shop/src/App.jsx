import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import AuthContext from './contexts/authContext.js';
import { login } from './services/authServices.js';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Welcome from './components/Welcome';
import Login from './components/User/Login.jsx';
import Register from './components/User/Register.jsx';
import CarCatalog from './components/Car/CarCatalog.jsx';
import MotorbikeCatalog from './components/Motorbike/MotorbikeCatalog.jsx';
import OneCar from './components/Car/OneCar.jsx';
import OneMotorbike from './components/Motorbike/OneMotorbike.jsx';
import PageNotFound from './components/PageNotFound.jsx';
function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});
  const [error, setError] = useState('');
  const loginSumbitHandler = async (values) => {
    const result = await login(values);
    if (result.message) {
      setAuth({});
      setError(result.message);
    }
    else {
      setAuth(result);
      setError('');
     // navigate('/')
    }
  };

  const values = {
    loginSumbitHandler,
    username: auth.username,
    email: auth.email,
    _id: auth._id,
    isAuthenticated: !!auth.username
  }
  return (
    <AuthContext.Provider value={ values }>
      <div className='main-container'>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/cars/:id" element={<OneCar />} />
          <Route path="/cars" element={<CarCatalog />} />
          <Route path="/motorbikes/:id" element={<OneMotorbike />} />
          <Route path="/motorbikes" element={<MotorbikeCatalog />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </AuthContext.Provider>
  )
}

export default App
