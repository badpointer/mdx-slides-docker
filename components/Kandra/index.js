import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 2.5em;
    color: white;
    font-family: "Open Sans",sans-serif;
    text-align: left;
`;

const Heading = styled.h1`
    font-size: 3.6em;
    color: white;
    font-family: "Open Sans",sans-serif;
`;

const DockerImage = styled.img`
    width: 29em;
    border-width: 5px;
    border-color: rgb(202, 225, 250, .1);   
    border-style: solid;
    border-radius: 2%;
    background-color: rgb(202, 225, 250, .6);
`;


const List = styled.ul`
`;

const ListItem = styled.li`
    font-size: 1.8em;
    font-weight: 400;
    text-align: left;
    font-family: "Open Sans",sans-serif;
    margin: 25px;
`;


const MovingContainers = () => {
    return (
        <React.Fragment>
            <DockerImage src={'../../img/containers-moving.gif'} />
        </React.Fragment>
    )
}

const ButWhy = () => {
    return (
        <React.Fragment>
            <Title>But Why?</Title>
            <List>
                <ListItem>Containers Use Less Resources</ListItem>
                <ListItem>Scalability</ListItem>
                <ListItem>Fast Boot</ListItem>
                <ListItem> Eliminating That "Works on My Machine" Situation</ListItem>
            </List>
        </React.Fragment>
    );
}

const VMvsContainers = () => {
    return (
        <React.Fragment>
            <Heading>VMs vs Containers</Heading>
        </React.Fragment>
    )
}


export default {
    ButWhy,
    MovingContainers,
    VMvsContainers
}