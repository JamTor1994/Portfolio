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
                    src={Me}
                    alt="Generic placeholder"
                />
                <Media.Body>
                    <h5>James Torres Jr</h5>
                    <p>
                    I am James Torres Jr. and I am an entry level Full Stack developer with a recent technical degree from the University of Texas.  My goals are to becoming a front end designer, mobile developer or a Full Stack manager. I have accomplished programming in Java, HTML, PHP, CSS, DB, SQL and REACT.js. I am a driven individual who is passionate about coding. I inherently put forth my best effort for the clients and company. My past employment has proven that I am a good employee who is timely, follow instructions and puts the goals of the company first. To find out more about me and example of my coding skills please visit https://github.com/JamTor1994 .
                    </p>
                </Media.Body>
            </Media>
        </Jumbotron>
    )
}
export default Jumbo;