import React, { useContext } from 'react';
import { VehicleContext } from '../../../App';
import './Confirmation.css';
const Confirmation = () => {
    const [vehicle, setVehicle] = useContext(VehicleContext);
    return (
        <div>
            <div className="confirmation">
                <h1 style={{ color: "white" }}>You are using: {vehicle.Transport_Name}</h1>
                <h1 style={{ color: "white" }}>For 2 person price: {vehicle.Transport_seat_small}</h1>
                <h1 style={{ color: "white" }}>For 4 person price: {vehicle.Transport_seat_medium}</h1>
                <h1 style={{ color: "white" }}>For 6 person price: {vehicle.Transport_seat_large}</h1>
                <h1 style={{ color: "white" }}>This is Confirmation</h1>
                <button>Proceed</button>
            </div>
            <div className="map">
                <iframe width="700" height="800" frameborder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Dhaka+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'></a>
            </div>
        </div>
    );
};
export default Confirmation;