import { useEffect, useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';

import { updateVehicle, getOneData } from '../../services/dataServices';
import '../styles/User/Edit.css';
export default function EditCar() {
    const [isLoading, setIsLoading] = useState(true);
    const [values, setValues] = useState({
        name: '',
        price: '',
        mileage: '',
        city: '',
        imageUrl: '',
        type: '',
        engine: ''
    });
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
        console.log('hi3')
        if (!_id) {
            navigate('/login');
        }
        else {
            const getCar = getOneData('cars', carId).then(result => {
                setValues({ ...result });
                setIsLoading(true);
                console.log(result)
                console.log('hi2')
            });
        }
        return () => { clearError() }
    }, [])

    return (
        <div className="edit-container">
            <h2>Edit Car</h2>
            {!isLoading && (
                <form className="edit-form" onSubmit={onSubmit}>

                    <label htmlFor="name">Car Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={onChange}
                        value={values.name}
                        required
                    />

                    <label htmlFor="price">Car Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        onChange={onChange}
                        value={values.price}
                        required
                    />

                    <label htmlFor="mileage">Car Mileage:</label>
                    <input
                        type="number"
                        id="mileage"
                        name="mileage"
                        onChange={onChange}
                        value={values.mileage}
                        required
                    />

                    <label htmlFor="city">Car City:</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        onChange={onChange}
                        value={values.city}
                        required
                    />

                    <label htmlFor="imageUrl">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        onChange={onChange}
                        value={values.imageUrl}
                        required />

                    <label htmlFor="type">Type of fuel:</label>
                    <input
                        type="text"
                        id="type"
                        name="type"
                        onChange={onChange}
                        value={values.type}
                        required />

                    <label htmlFor="engine">Engine:</label>
                    <input
                        type="text"
                        id="engine"
                        name="engine"
                        onChange={onChange}
                        value={values.engine}
                        required />

                    <button type="submit" disabled={!isFormValid}>Save Changes</button>
                </form>
            )}
        </div>
    );
}