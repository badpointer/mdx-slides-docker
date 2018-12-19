import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
    ont-size: 1.5em;
    margin-left: 15px;
    color: white;
    font-family: "Open Sans",sans-serif;
`;

const DockerImage = styled.img`
    background-color: rgb(202, 225, 250, .6);
    width: 40em;
    margin-left: 25px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;


const FargateSlide = () => {
    return (
        <Container>
            <DockerImage src={'../../img/fargate-1.png'} />
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
