import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authContext';

import { postOneVehicle } from '../../services/dataServices';

import '../styles/User/CreateOffer.css';
export default function CreateMotorbikeOffer() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const isFormValid = () => {
        return values.username.trim() !== '' && values.password.trim() !== '';
    };

    const onCreateMotorbikeSubmit = async (values) => {
        const result = await postOneVehicle('motorbikes', { ...values, owner: _id });
        if (!result.message) {
            setError('');
            navigate(`/user/${_id}`);
        }
        else {
            setError(result.message);
        }
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
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                        placeholder="Name"
                        required
                    />

                    <label htmlFor="price">Price:</label>
                    <input type="number"
                        id="price"
                        name="price"
                        value={values.price}
                        onChange={onChange}
                        placeholder="$"
                        required
                    />

                    <label htmlFor="mileage">Mileage:</label>
                    <input
                        type="number"
                        id="mileage"
                        name="mileage"
                        value={values.mileage}
                        onChange={onChange}
                        placeholder="Miles"
                        required
                    />

                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={values.city}
                        onChange={onChange}
                        placeholder="City"
                        required
                    />

                    <label htmlFor="imageUrl">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={onChange}
                        placeholder="Image url"
                        required />

                    <label htmlFor="engine">Engine:</label>
                    <input
                        type="text"
                        id="engine"
                        name="engine"
                        value={values.engine}
                        onChange={onChange}
                        placeholder="Engine"
                        required />
                    {error ? <p className='create-error'>{error}</p> : null}
                    <button type="submit" disabled={!isFormValid}>Create Offer</button>
                </form>
            </div>
        </>
    )
}