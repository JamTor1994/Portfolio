import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './card.css'

function PortCard(props) {
  return (
    <div class= {props.id}>
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={props.image} />
      <Card.Body >
        <Card.Title>{props.name}</Card.Title>
        <Row>
          <Col sm={8} >
            <Card.Text>
              {props.text}
            </Card.Text>
          </Col>
        </Row>
        <Button variant="primary" href={props.git} target="_blank" > Git </Button>
        <Button variant="primary" href={props.deployed} target="_blank"> Deployed </Button>
      </Card.Body>
    </Card>
  </div>
  );
}

export default PortCard;
