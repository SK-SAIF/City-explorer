import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import bike from '../../Images/new-bike-2012-flat2.jpg';
import fakeData from '../../FakeData/fakeData.json';
import EachVehicle from '../EachVehicle/EachVehicle';

const Home = () => {

    const [vehicle, setVehicle] = useState([]);
    const vehicleInfo = fakeData;
    return (
        <div className="Home">
            {
                vehicleInfo.map(x=><EachVehicle info={x} key={x.id}></EachVehicle>)
            }
        </div>
    );
};

export default Home;