import { useEffect, useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authContext';

import { updateVehicle, getOneData } from '../../services/dataServices';
import '../styles/User/Edit.css';
export default function EditCar() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [values, setValues] = useState({
        name: '',
        price: '',
        mileage: '',
        city: '',
        imageUrl: '',
        type: '',
        engine: ''
    });
    const { carId } = useParams();
    const isFormValid = () => {
        return values.username.trim() !== '' && values.password.trim() !== '';
    };

    const onEditCarSubmit = async (values) => {
        const result = await updateVehicle('cars', carId, { ...values, owner: _id });
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
    } = useContext(AuthContext);

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onEditCarSubmit(values);
    }

    useEffect(() => {
        if (!_id) {
            navigate('/login');
        }
        else {
            const getCar = getOneData('cars', carId).then(result => {
                setValues({ ...result });
            });
        }
        return () => { clearError() }
    }, [])

    return (
        <div className="edit-container">
            <h2>Edit Car</h2>
            <form className="edit-form" onSubmit={onSubmit}>

                <label htmlFor="name">Car Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder='Name'
                    onChange={onChange}
                    value={values.name}
                    required
                />

                <label htmlFor="price">Car Price:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder='$'
                    onChange={onChange}
                    value={values.price}
                    required
                />

                <label htmlFor="mileage">Car Mileage:</label>
                <input
                    type="number"
                    id="mileage"
                    name="mileage"
                    placeholder='Miles'
                    onChange={onChange}
                    value={values.mileage}
                    required
                />

                <label htmlFor="city">Car City:</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder='City'
                    onChange={onChange}
                    value={values.city}
                    required
                />

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
                {error ? <p className='edit-error'>{error}</p> : null}
                <button type="submit" disabled={!isFormValid}>Save Changes</button>
            </form>
        </div>
    );
}