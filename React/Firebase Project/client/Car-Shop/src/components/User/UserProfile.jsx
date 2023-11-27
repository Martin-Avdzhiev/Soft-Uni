import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';

import { getProfileInfo } from '../../services/authServices';
import { deleteVehicle } from '../../services/dataServices';

import Spinner from '../Spinner';

import '../styles/User/UserProfile.css';
export default function UserProfile() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({});
    const [cars, setCars] = useState([]);
    const [motorbikes, setMotorbikes] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [vehicleIdToDelete, setVehicleIdToDelete] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {
        _id
    } = useContext(AuthContext);

    const openModal = (type, id) => {
        setModalOpen(true);
        setVehicleIdToDelete([type, id]);
    }

    const closeModal = () => { setModalOpen(false); }

    const navigateToeditPage = (type, id) => {
        navigate(`/edit/${type}/${id}`);
    }

    const deleteOneVehicle = async () => {

        const result = await deleteVehicle(vehicleIdToDelete[0], vehicleIdToDelete[1]);
        if (vehicleIdToDelete[0] == 'cars') {
            const filteredCars = cars.filter(x => x._id !== vehicleIdToDelete[1]);
            setCars(filteredCars);
        }
        else if (vehicleIdToDelete[0] == 'motorbikes') {
            const filteredMotorbikes = motorbikes.filter(x => x._id !== vehicleIdToDelete[1]);
            setMotorbikes(filteredMotorbikes);
        }
        setModalOpen(false);
    }

    useEffect(() => {
        if (!_id) {
            navigate('/login')
        }
        getProfileInfo(_id).then(result => {
            setUserInfo(result);
            setCars(result.ownCars);
            setMotorbikes(result.ownMotorbikes);
            setIsLoading(false);
        });
    }, [])
    return (
        <>
            <div className="user-container">
                <div className="user-image">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User Image" />
                </div>
                <div className="user-info">
                    <div className="username">{userInfo.username}</div>
                    <div className="user-details">
                        <p>{userInfo.email}</p>
                    </div>
                </div>
                <div className='create-buttons-container'>
                    <div className="create-buttons">
                        <Link to="/create/car">
                            <button className="create-car-button">Create New Car</button>
                        </Link>
                        <Link to="/create/motorbike">
                            <button className="create-motorbike-button">Create New Motorbike</button>
                        </Link>
                    </div>
                </div>
                {isLoading ? <Spinner/> : (
                    <div className="vehicles-wrapper">
                        <div className="vehicle-section">
                            <p className='offers'>Your car offers:</p>
                            {cars?.map(car => (
                                <div className="vehicle" key={car._id}>
                                    <div className="vehicle-image">
                                        <img src={car.imageUrl} alt={car.name} />
                                    </div>
                                    <div className="vehicle-info">
                                        <p>{car.name}</p>
                                    </div>
                                    <div className="vehicle-buttons">
                                        <button className="edit-button" onClick={() => navigateToeditPage('cars', car._id)}>Edit</button>
                                        <button className="delete-button" onClick={() => openModal('cars', car._id)}>Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="vehicle-section">
                            <p className='offers'>Your motorbike offers:</p>
                            {motorbikes?.map(motorbike => (
                                <div className="vehicle" key={motorbike._id}>
                                    <div className="vehicle-image">
                                        <img
                                            src={motorbike.imageUrl}
                                            alt={motorbike.name}
                                        />
                                    </div>
                                    <div className="vehicle-info">
                                        <p>{motorbike.name}</p>
                                    </div>
                                    <div className="vehicle-buttons">
                                        <button className="edit-button" onClick={() => navigateToeditPage('motorbikes', motorbike._id)}>Edit</button>
                                        <button className="delete-button" onClick={() => openModal('motorbikes', motorbike._id)}>Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className={`modal ${isModalOpen ? ' open' : ''}`}>
                <div className="modal-content">
                    <p>Are you sure you want to delete it?</p>
                    <button onClick={deleteOneVehicle}>Yes</button>
                    <button onClick={closeModal}>No</button>
                </div>
            </div>
        </>
    )
}