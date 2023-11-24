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
                    <label htmlFor="carName">Name:</label>
                    <input 
                    type="text" 
                    id="carName" 
                    name="name"
                    onChange={onChange}
                    value={values.name}
                    required />

                    <label htmlFor="carPrice">Price:</label>
                    <input
                        type="number"
                        id="carPrice"
                        name="price"
                        onChange={onChange}
                        value={values.price}
                        required />

                    <label htmlFor="carMileage">Mileage:</label>
                    <input
                        type="number"
                        id="carMileage"
                        name="mileage"
                        onChange={onChange}
                        value={values.mileage}
                        required />

                    <label htmlFor="carCity">City:</label>
                    <input
                        type="text"
                        id="carCity"
                        name="city"
                        onChange={onChange}
                        value={values.city}
                        required />

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

                    <button type="submit" disabled={!isFormValid}>Create Offer</button>
                </form>
            </div>
        </>
    )
}