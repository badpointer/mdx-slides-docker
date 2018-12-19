import React from 'react';
import styled from 'styled-components';


const Title = styled.h1`
  font-size: 1.5em;
  font-family: "Open Sans",sans-serif;
  color: white;
`;

const DockerGif = styled.img`
    border-width: 50px;
    border-color: #00C5E6;   
    border-style: solid;
    border-radius: 50px;
    width: 26vw;
`;

const Container = styled.div`
`;


export default () => {
    return (
        <Container>
            <DockerGif src={'../../img/fc.gif'}/>
        </Container>
    )
}
