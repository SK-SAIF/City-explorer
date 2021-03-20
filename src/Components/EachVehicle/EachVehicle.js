import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { VehicleContext } from '../../App';
import './EachVehicle.css';

const EachVehicle = (props) => {
    const vehicleInfo = props.info;
    const historyOfVehicle = useHistory();
    const [vehicle, setVehicle] = useContext(VehicleContext);
    const handleEachVehicle = () => {
        setVehicle(vehicleInfo);
        historyOfVehicle.push("/Destination");
        console.log("You clicked", vehicleInfo);
    }
    return (
        <div>
            <button onClick={handleEachVehicle} className="each-vehicle">
                <div className="vehicle-name">
                    <h1>{vehicleInfo.Transport_Name}</h1>
                </div>
                <div className="vehicle-img">
                    <img src={vehicleInfo.Transport_Image} alt="" />
                </div>
            </button>
        </div>
    );
};
export default EachVehicle;