import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authContext';
import '../styles/User/CreateOffer.css';
import { postOneVehicle } from '../../services/dataServices';
export default function CreateCarOffer() {
    const navigate = useNavigate();
    const isFormValid = () => {
        return values.username.trim() !== '' && values.password.trim() !== '';
    };

    const onCreateCarSubmit = async (values) => {
        const result = await postOneVehicle('cars', {...values, owner:_id});
        navigate(`/user/${_id}`);
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
                    onChange={onChange}
                    value={values.name}
                    placeholder="Name"
                    required />

                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        onChange={onChange}
                        value={values.price}
                        placeholder="$"
                        required />

                    <label htmlFor="mileage">Mileage:</label>
                    <input
                        type="number"
                        id="mileage"
                        name="mileage"
                        onChange={onChange}
                        value={values.mileage}
                        placeholder="Miles"
                        required />

                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        onChange={onChange}
                        value={values.city}
                        placeholder="City"
                        required />

                    <label htmlFor="imageUrl">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        onChange={onChange}
                        value={values.imageUrl}
                        placeholder="Image url"
                        required />

                    <label htmlFor="type">Type of fuel:</label>
                    <input
                        type="text"
                        id="type"
                        name="type"
                        onChange={onChange}
                        value={values.type}
                        placeholder="Fuel"
                        required />

                    <label htmlFor="engine">Engine:</label>
                    <input
                        type="text"
                        id="engine"
                        name="engine"
                        onChange={onChange}
                        value={values.engine}
                        placeholder="Engine"
                        required />

                    <button type="submit" disabled={!isFormValid}>Create Offer</button>
                </form>
            </div>
        </>
    )
}