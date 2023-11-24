import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authContext';

import { postOneVehicle } from '../../services/dataServices';

import '../styles/User/CreateOffer.css';
export default function CreateMotorbikeOffer() {
    const navigate = useNavigate();
    const isFormValid = () => {
        return values.username.trim() !== '' && values.password.trim() !== '';
    };

    const onCreateMotorbikeSubmit = async (values) => {
        const result = await postOneVehicle('motorbikes', { ...values, owner: _id });
        navigate(`/user/${_id}`);
    }

    const {
        usename,
        _id,
        clearError
    } = useContext(AuthContext)
    const { values, onChange, onSubmit } = useForm(onCreateMotorbikeSubmit,
        {
            name: '',
            price: '',
            mileage: '',
            city: '',
            imageUrl: '',
            engine: ''
        }
    );

    useEffect(() => {
        if(!_id){
            navigate('/login');
        }
        return () => { clearError() }
    }, [])
    return (
        <>
            <div className="add-vehicle-form-container">
                <h2>Create New Motorbike Offer</h2>
                <form onSubmit={onSubmit}>
                    <label htmlFor="motorbikeName">Name:</label>
                    <input
                        type="text"
                        id="motorbikeName"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                        required
                    />

                    <label htmlFor="motorbikePrice">Price:</label>
                    <input type="number"
                        id="motorbikePrice"
                        name="price"
                        value={values.price}
                        onChange={onChange}
                        required
                    />

                    <label htmlFor="motorbikeMileage">Mileage:</label>
                    <input
                        type="number"
                        id="motorbikeMileage"
                        name="mileage"
                        value={values.mileage}
                        onChange={onChange}
                        required
                    />

                    <label htmlFor="motorbikeCity">City:</label>
                    <input
                        type="text"
                        id="motorbikeCity"
                        name="city"
                        value={values.city}
                        onChange={onChange}
                        required
                    />

                    <label htmlFor="motorbikeCity">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={onChange}
                        required />

                    <label htmlFor="motorbikeCity">Engine:</label>
                    <input
                        type="text"
                        id="engine"
                        name="engine"
                        value={values.engine}
                        onChange={onChange}
                        required />

                    <button type="submit" disabled={!isFormValid}>Create Offer</button>
                </form>
            </div>
        </>
    )
}