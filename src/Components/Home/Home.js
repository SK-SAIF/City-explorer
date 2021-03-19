import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import bike from '../../Images/new-bike-2012-flat2.jpg';

const Home = () => {

    return (
        <div className="Home">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={bike} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            
        </div>
    );
};

export default Home;