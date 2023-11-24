import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import AuthContext from './contexts/authContext.js';
import { login, register } from './services/authServices.js';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Welcome from './components/Welcome';
import UserProfile from './components/User/UserProfile.jsx';
import Login from './components/User/Login.jsx';
import Register from './components/User/Register.jsx';
import Logout from './components/User/Logout.jsx';
import CarCatalog from './components/Car/CarCatalog.jsx';
import MotorbikeCatalog from './components/Motorbike/MotorbikeCatalog.jsx';
import OneCar from './components/Car/OneCar.jsx';
import OneMotorbike from './components/Motorbike/OneMotorbike.jsx';
import CreateCarOffer from './components/User/CreateCarOffer.jsx';
import CreateMotorbikeOffer from './components/User/CreateMotorbikeOffer.jsx';
import EditCar from './components/User/EditCar.jsx';
import PageNotFound from './components/PageNotFound.jsx';
function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});
  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');

  const clearError = () => {
    setLoginError(''),
      setRegisterError('')
  }

  const loginSumbitHandler = async (values) => {
    const result = await login(values);
    if (result.message) {
      setAuth({});
      setLoginError(result.message);
    }
    else {
      setAuth(result);
      setLoginError('');
      navigate('/')
    }
  };

  const registerSubmitHandler = async (values) => {
    const result = await register(values);
    if (result.message) {
      setAuth({});
      setRegisterError(result.message);
    }
    else {
      setAuth(result);
      setRegisterError('');
      navigate('/')
    }
  }
  const logoutSubmitHandler = () => {
    setAuth({})
  }

  const values = {
    loginSumbitHandler,
    registerSubmitHandler,
    username: auth.username,
    email: auth.email,
    _id: auth._id,
    isAuthenticated: !!auth.username,
    loginError,
    registerError,
    logoutSubmitHandler,
    clearError
  }
  return (
    <AuthContext.Provider value={values}>
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
          <Route path="/logout" element={<Logout />} />
          <Route path="/create/car" element={<CreateCarOffer />} />
          <Route path="/create/motorbike" element={<CreateMotorbikeOffer />} />
          <Route path="/edit/cars/:carId" element={<EditCar />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </AuthContext.Provider>
  )
}

export default App
