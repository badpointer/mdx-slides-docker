import React from 'react';
import styled from 'styled-components';



const DockerImage = styled.img`
border-width: 5px;
border-color: rgb(202, 225, 250, .1);   
border-style: solid;
border-radius: 2%;
background-color: rgb(202, 225, 250, .6);
    width: 100%;
    height: auto;
`;

const ScaleImage = styled.img`
border-width: 5px;
border-color: rgb(202, 225, 250, .1);   
border-style: solid;
border-radius: 2%;
background-color: rgb(202, 225, 250, .6);
    width: 90vw;
    height: auto;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;


const FargateSlide = () => {
    return (
        <Container>
            <ScaleImage src={'../../img/fargate-1.png'} />
        </Container>
    )
}

const Intro = () => {
    return (
        <Container>
            <DockerImage src={'../../img/d-1.png'} />
        </Container>
    )
}

const RancherGraph = () => {
    return (
        <Container>
            <DockerImage src={'../../img/d-2.png'} />
        </Container>
    )
}

const RancherUI = () => {
    return (
        <Container>
            <DockerImage src={'../../img/d-3.png'} />
        </Container>
    )
}

const DockerKey = () => {
    return (
        <Container>
            <DockerImage src={'../../img/d-4.png'} />
        </Container>
    )
}

const DockerEE = () => {
    return (
        <Container>
            <DockerImage src={'../../img/d-6.png'} />
        </Container>
    )
}

export default {
    FargateSlide,
    Intro,
    RancherGraph,
    RancherUI,
    DockerKey,
    DockerEE
}
