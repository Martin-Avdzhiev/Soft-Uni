import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authContext';
import '../styles/User/CreateOffer.css';
import { postOneVehicle } from '../../services/dataServices';
export default function CreateCarOffer() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const isFormValid = () => {
        return values.username.trim() !== '' && values.password.trim() !== '';
    };

    const onCreateCarSubmit = async (values) => {
        const result = await postOneVehicle('cars', {...values, owner:_id});
        if(!result.message){
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
    const { values, onChange, onSubmit } = useForm(onCreateCarSubmit,
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
        if(!_id){
            navigate('/login');
        }
        return () => { clearError() }
    }, [])
    return (
        <>
            <div className="add-vehicle-form-container">
                <h2>Create New Car Offer</h2>
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder='Name'
                    onChange={onChange}
                    value={values.name}
                    required />

                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder='$'
                        onChange={onChange}
                        value={values.price}
                        required />

                    <label htmlFor="mileage">Mileage:</label>
                    <input
                        type="number"
                        id="mileage"
                        name="mileage"
                        placeholder='Miles'
                        onChange={onChange}
                        value={values.mileage}
                        required />

                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder='City'
                        onChange={onChange}
                        value={values.city}
                        required />

                    <label htmlFor="imageUrl">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder='Image url'
                        onChange={onChange}
                        value={values.imageUrl}
                        required />

                    <label htmlFor="type">Type of fuel:</label>
                    <input
                        type="text"
                        id="type"
                        name="type"
                        placeholder='Fuel'
                        onChange={onChange}
                        value={values.type}
                        required />

                    <label htmlFor="engine">Engine:</label>
                    <input
                        type="text"
                        id="engine"
                        name="engine"
                        placeholder='Engine'
                        onChange={onChange}
                        value={values.engine}
                        required />
                    {error ? <p className='create-error'>{error}</p> : null}
                    <button type="submit" disabled={!isFormValid}>Create Offer</button>
                </form>
            </div>
        </>
    )
}