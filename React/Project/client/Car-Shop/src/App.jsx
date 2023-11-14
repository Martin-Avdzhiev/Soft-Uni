import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'
import Welcome from './components/Welcome';
import Register from './components/User/Register.jsx';
import Login from './components/User/Login.jsx';
import CarCatalog from './components/Car/CarCatalog.jsx';
import MotorbikeCatalog from './components/Motorbike/MotorbikeCatalog.jsx';
import OneCar from './components/Car/OneCar.jsx';
import OneMotorbike from './components/Motorbike/OneMotorbike.jsx';
function App() {
  return (
    <>
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
      </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
