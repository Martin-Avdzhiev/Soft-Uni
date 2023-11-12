import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Welcome from './components/Welcome';
import './App.css';
import Register from './components/User/Register.jsx';
import Login from './components/User/Login.jsx';
import CarCatalog from './components/Car/CarCatalog.jsx';
import MotorbikeCatalog from './components/Motorbike/MotorbikeCatalog.jsx';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        {/* <Route path="/cars/:id" element={<Car/>} /> */}
        <Route path="/cars" element={<CarCatalog/>} />
        {/* <Route path="/motorbikes/:id" element={<Motorbike/>} /> */}
        <Route path="/motorbikes" element={<MotorbikeCatalog/>} />
        <Route path="/signup" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
