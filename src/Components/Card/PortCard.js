import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function PortCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
          <Button variant="primary" href= {props.git}> Git </Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default PortCard;
  