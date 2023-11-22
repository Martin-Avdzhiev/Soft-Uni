import '../styles/User/CreateOffer.css';
export default function CreateMotorbikeOffer(){
    return (
        <>
        <div className="add-vehicle-form-container">
            <h2>Create New Motorbike Offer</h2>
            <form>
                <label htmlFor="motorbikeName">Name:</label>
                <input type="text" id="motorbikeName" name="name" required />

                <label htmlFor="motorbikePrice">Price:</label>
                <input type="number" id="motorbikePrice" name="price" required />

                <label htmlFor="motorbikeMileage">Mileage:</label>
                <input type="text" id="motorbikeMileage" name="mileage" required />

                <label htmlFor="motorbikeCity">City:</label>
                <input type="text" id="motorbikeCity" name="city" required />

                <label htmlFor="motorbikeCity">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" required />

                <label htmlFor="motorbikeCity">Type of fuel:</label>
                <input type="text" id="type" name="type" required />

                <button type="submit">Create Offer</button>
            </form>
        </div>
    </>
    )
}