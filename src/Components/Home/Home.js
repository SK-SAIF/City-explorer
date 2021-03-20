import React, { useState } from 'react';
import './Home.css';
import fakeData from '../../FakeData/fakeData.json';
import EachVehicle from '../EachVehicle/EachVehicle';

const Home = () => {
    const vehicleInfo = fakeData;
    return (
        <div className="Home">
            {
                vehicleInfo.map(x => <EachVehicle info={x} key={x.id}></EachVehicle>)
            }
        </div>
    );
};
export default Home;