import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Media from 'react-bootstrap/Media';
import Me from "../images/me.jpg"


function Jumbo() {
    return (
        <Jumbotron>
        <h1>About Me</h1>
        <Media>
    <img
      width={150}
      height={180}
      className="align-self-center mr-3"
      src= {Me}
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>James Torres Jr</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media>
      </Jumbotron>
    )
}
export default Jumbo;