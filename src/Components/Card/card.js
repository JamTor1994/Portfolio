import React, { Component } from "react";
import Port from '../portfolio.json'

class Card extends Component {
    state = {
        Port
    };

    render() {
        return (
            <Wrapper>
                <Title>Projects</Title>
                {this.state.Port.map(Port => (
                    <PortCard
                        id={Port.id}
                        key={Port.id}
                        name={Port.name}
                        image={Port.image}
                        text={Port.text}
                        git={Port.git}
                    />
                ))}
            </Wrapper>
        );
    }
}
export default Cardbody;