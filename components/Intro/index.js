import React from 'react';
import styled from 'styled-components';


const Title = styled.h1`
  font-size: 1.5em;
  position: 'relative';
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
    display: 'flex';
    flex-direction: 'column';
`;


export default () => {
    return (
        <Container>
            <Title>{`Live Production ❤️ Docker`}</Title>
            <DockerGif src={'../../img/tenor.gif'}/>
        </Container>
    )
}
