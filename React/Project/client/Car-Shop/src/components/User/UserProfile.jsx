import { useContext, useEffect, useState } from 'react';
import '../styles/User/UserProfile.css';
import AuthContext from '../../contexts/authContext';
import { getProfileInfo } from '../../services/authServices';
import { Link } from 'react-router-dom';
export default function UserProfile() {
    const [userInfo, setUserInfo] = useState({})
    const {
        _id
    } = useContext(AuthContext);

    useEffect(() => {
        getProfileInfo(_id).then(result => setUserInfo(result));
    }, [])
    return (
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
            <div className="vehicles-wrapper">
                <div className="vehicle-section">
                    <p className='offers'>Your car offers:</p>
                    {userInfo.ownCars?.map(car => (
                        <div className="vehicle" key={car._id}>
                            <div className="vehicle-image">
                                <img src={car.imageUrl} alt={car.name} />
                            </div>
                            <div className="vehicle-info">
                                <p>{car.name}</p>
                            </div>
                            <div className="vehicle-buttons">
                                <button className="edit-button">Edit</button>
                                <button className="delete-button">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="vehicle-section">
                    <p className='offers'>Your motorbike offers:</p>
                    {userInfo.ownMotorbikes?.map(motorbike => (
                        <div className="vehicle">
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
                                <button className="edit-button">Edit</button>
                                <button className="delete-button">Delete</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>

    )
}