import { useContext, useEffect, useState } from 'react';
import '../styles/User/UserProfile.css';
import AuthContext from '../../contexts/authContext';
export default function UserProfile() {
    const {
        username,
        email,
        _id
    } = useContext(AuthContext)
    return (
        <div className="user-container">
            <div className="user-image">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User Image" />
            </div>
            <div className="user-info">
                <div className="username">{username}</div>
                <div className="user-details">
                    <p>{email}</p>
                </div>
            </div>
            <div className="vehicles-wrapper">
                <div className="vehicle-section">
                    <div className="vehicle">
                        <div className="vehicle-image">
                            <img src="https://example.com/car-image.jpg" alt="Car Image" />
                        </div>
                        <div className="vehicle-info">
                            <p>Name: Toyota Camry</p>
                        </div>
                        <div className="vehicle-buttons">
                            <button className="edit-button">Edit</button>
                            <button className="delete-button">Delete</button>
                        </div>
                    </div>
                </div>
                <div className="vehicle-section">
                    <div className="vehicle">
                        <div className="vehicle-image">
                            <img
                                src="https://example.com/motorbike-image.jpg"
                                alt="Motorbike Image"
                            />
                        </div>
                        <div className="vehicle-info">
                            <p>Name: Yamaha YZF-R1</p>
                        </div>
                        <div className="vehicle-buttons">
                            <button className="edit-button">Edit</button>
                            <button className="delete-button">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}