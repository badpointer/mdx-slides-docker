import React from 'react';
import styled from 'styled-components';
import BpConfig from '../../img/badpointer';

const Title = styled.h1`
  font-size: 2.0em;
  font-family: "Open Sans",sans-serif;
  color: white;
`;

const DockerGif = styled.img`
    border-width: 5px;
    border-color: #00C2E6;   
    border-style: solid;
    border-radius: 100px;
    width: 80%;
`;

const Container = styled.div`

`;


const HowWeUse = () => {
    return (
        <Container>
            <Title>Docker Con</Title>
            <DockerGif src={BpConfig.dockercon}/>
        </Container>
    )
};

export default {
    HowWeUse
}


