import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Row, Container, Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <Container>
      <Row>
        <Col>
        <Card style={{color: "#000"}}>
          <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg" height="300px" width="30%"/>
          <Card.Body>
            <Card.Title>Taj Mahal</Card.Title>
            <Card.Text>Located in Agra. Built by ShahJahan</Card.Text>
            <Button variant="secondary">Learn More</Button>
          </Card.Body>
        </Card>
        </Col>


        <Col>
        <Card style={{color: "#000"}}>
          <Card.Img src="https://www.holidify.com/images/cmsuploads/compressed/Qutub_Minar_in_the_monsoons_20170908115259.jpg" height="300px" width="30%"/>
          <Card.Body>
            <Card.Title>Qutab Minar</Card.Title>
            <Card.Text>A historical landmark, located in New Delhi.</Card.Text>
            <Button variant="secondary">Learn More</Button>
          </Card.Body>
        </Card>
        </Col>


        <Col>
        <Card style={{color: "#000"}}>
          <Card.Img src="https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658__480.jpg" height="300px" width="30%"/>
          <Card.Body>
            <Card.Title>India Gate</Card.Title>
            <Card.Text>Located in Delhi.</Card.Text>
            <Button variant="secondary">Learn More</Button>
          </Card.Body>
        </Card>
        </Col>

      </Row>
    </Container>
    </div>
  );
}

export default App;
