import React, { Component } from "react";
import Port from '../portfolio.json'
import Title from './title'
import Wrapper from './wrapper'
import PortCard from './PortCard'

class Card extends Component {
    state = {
        Port
    };

    render() {
        return (
            <Wrapper>
                <Title>Project</Title>
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
export default Card;