import { useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authContext';

import { updateVehicle } from '../../services/dataServices';
import '../styles/User/Edit.css';
export default function EditCar() {
    const navigate = useNavigate();
    const { carId } = useParams();
    const isFormValid = () => {
        return values.username.trim() !== '' && values.password.trim() !== '';
    };

    const onEditCarSubmit = async (values) => {
        const result = await updateVehicle('cars', carId, { ...values, owner: _id });
        navigate(`/user/${_id}`);
    }

    const {
        usename,
        _id,
        clearError
    } = useContext(AuthContext)
    const { values, onChange, onSubmit } = useForm(onEditCarSubmit,
        {
            name: '',
            price: '',
            mileage: '',
            city: '',
            imageUrl: '',
            type: '',
            engine: ''
        }
    );

    useEffect(() => {
        if (!_id) {
            navigate('/login');
        }
        return () => { clearError() }
    }, [])

    return (
        <div className="edit-container">
            <h2>Edit Car</h2>
            <form className="edit-form" onSubmit={onSubmit}>

                <label htmlFor="car-name">Car Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={onChange}
                    value={values.name}
                    required
                />

                <label htmlFor="car-price">Car Price:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    onChange={onChange}
                    value={values.price}
                    required
                />

                <label htmlFor="car-mileage">Car Mileage:</label>
                <input
                    type="number"
                    id="mileage"
                    name="mileage"
                    onChange={onChange}
                    value={values.mileage}
                    required
                />

                <label htmlFor="car-city">Car City:</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    onChange={onChange}
                    value={values.city}
                    required
                />

                <label htmlFor="carImage">Image:</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    onChange={onChange}
                    value={values.imageUrl}
                    required />

                <label htmlFor="carType">Type of fuel:</label>
                <input
                    type="text"
                    id="type"
                    name="type"
                    onChange={onChange}
                    value={values.type}
                    required />

                <label htmlFor="carEngine">Engine:</label>
                <input
                    type="text"
                    id="type"
                    name="engine"
                    onChange={onChange}
                    value={values.engine}
                    required />

                <button type="submit" disabled={!isFormValid}>Save Changes</button>
            </form>
        </div>
    );
}