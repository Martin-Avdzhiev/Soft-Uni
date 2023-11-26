import { useEffect, useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';

import { updateVehicle, getOneData } from '../../services/dataServices';
import '../styles/User/Edit.css';

export default function EditMotorbike() {
    const [values, setValues] = useState({
        name: '',
        price: '',
        mileage: '',
        city: '',
        imageUrl: '',
        engine: ''
    });
    const navigate = useNavigate();
    const { motorbikeId } = useParams();
    const isFormValid = () => {
        return values.username.trim() !== '' && values.password.trim() !== '';
    };

    const onEditMotorbikeSubmit = async (values) => {
        const result = await updateVehicle('motorbikes', motorbikeId, { ...values, owner: _id });
        navigate(`/user/${_id}`);
    }

    const {
        username,
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
        onEditMotorbikeSubmit(values);
    }

    useEffect(() => {
        if (!_id) {
            navigate('/login');
        }
        else {
            const getMotorbike = getOneData('motorbikes', motorbikeId).then(result => {
                setValues({ ...result });
            });
        }
        return () => { clearError() }
    }, [])


    return (
        <div className="edit-container">
            <h2>Edit Motorbike</h2>
            <form className="edit-form" onSubmit={onSubmit}>
                <label htmlFor="name">Motorbike Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={onChange}
                    value={values.name}
                    required
                />

                <label htmlFor="price">Motorbike Price:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    onChange={onChange}
                    value={values.price}
                    required
                />

                <label htmlFor="mileage">Motorbike Mileage:</label>
                <input
                    type="number"
                    id="mileage"
                    name="mileage"
                    onChange={onChange}
                    value={values.mileage}
                    required
                />

                <label htmlFor="city">Motorbike City:</label>
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
        </div>
    );
}