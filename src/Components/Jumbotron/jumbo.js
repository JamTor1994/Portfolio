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
                    Full Stack Developer with a technical degree from the University of Texas.  Excited to work as a front end designer, mobile developer or a Full Stack manager. I have accomplished programming in Java, HTML, PHP, CSS, DB, SQL and REACT.js and many more skills that have allowed me to work with a team or solo so that I can fulfill the goals of my employer and team to the fullest. I am a driven individual who is passionate about coding, working with a team, or company to make fantastic applications and web pages. I inherently put forth my best effort for the clients and company. My past employment history as a Meat cutter for safeway has proven that I am a good employee who is timely, follow instructions and puts the goals of the company first. In the future. I would like to gain more skills, experience and learn even more technologies that can help push me further in my profession and increase my value to the company I will work for.
                    </p>
                </Media.Body>
            </Media>
        </Jumbotron>
    )
}
export default Jumbo;