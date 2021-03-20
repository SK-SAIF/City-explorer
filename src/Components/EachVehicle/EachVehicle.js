import React from 'react';
import { useHistory } from 'react-router';
import './EachVehicle.css';

const EachVehicle = (props) => {
    const vehicleInfo = props.info;
    const historyOfVehicle=useHistory();

    const handleEachVehicle=()=>{
        historyOfVehicle.push("/Destination");
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