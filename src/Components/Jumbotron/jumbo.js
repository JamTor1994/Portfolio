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
                        I am a hard worker and enjoy new challenges. I take my responsibilities seriously and I
                          am a fast learner. I enjoy working with teams and when assigned a task will work alone
                          or together to complete the assignment at hand.
                          I look forward to be granted a personal interview and I hope my qualifications will meet
                          your organizations requirement 
                    </p>
                </Media.Body>
            </Media>
        </Jumbotron>
    )
}
export default Jumbo;