import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 2.5em;
    color: white;
    font-family: "Open Sans",sans-serif;
    text-align: left;
`;

const Heading = styled.h1`
    text-align: left;
    margin-right: 10em;
    font-size: 3.6em;
    color: white;
    font-family: "Open Sans",sans-serif;
`;

const DockerImage = styled.img`
    width: 10em;
    margin-left: 25px;

    border-width: 5px;
    border-color: rgb(202, 225, 250, .1);   
    border-style: solid;
    border-radius: 2%;
    background-color: rgb(202, 225, 250, .6);
`;

const MB = styled.img`
    width: 50vw;
    border-width: 5px;
    border-color: rgb(202, 225, 250, .1);   
    border-style: solid;
    border-radius: 2%;
    background-color: rgb(202, 225, 250, .6);
`;


const List = styled.ul`
`;

const ListItem = styled.li`
    font-size: 1.5em;
    font-weight: 400;
    text-align: left;
    font-family: "Open Sans",sans-serif;
    margin-bottom: 25px;
    
`;


const ExitStrategy = () => {
    return (
        <React.Fragment>
            <Title>Old Apps Exit Strategy</Title>
            <List>
                <ListItem>
                    Moving To Cloud
                </ListItem>
                <ListItem>
                    Stood up all the things for a EC2 with cloud formation
                    <DockerImage src='../../img/pain.gif' />
                </ListItem>
                <ListItem>
                    Elton Stoneman
                </ListItem>
                <ListItem>
                    Image2Docker
                </ListItem>
                <ListItem>
                    Security
                </ListItem>
            </List>
        </React.Fragment>
    );
}

const WhatWeLearned = () => {
    return (
        <React.Fragment>
            <Heading>DockerCon:</Heading>
            <Title>What we learned</Title>
            <List>
                <ListItem>
                    Docker EE makes companies successful
                </ListItem>
                <ListItem>
                    Docker Swarm is good intro
                </ListItem>
                <ListItem>
                    The begining of switching to microservices thought
                </ListItem>
                <ListItem>
                    Redis Caching layer
                </ListItem>
            </List>
        </React.Fragment>
    )
}

const Pipeline = () => {
    return (
        <React.Fragment>
            <MB src="../../img/mb.gif"/>
        </React.Fragment>
    )
}


export default {
    ExitStrategy,
    WhatWeLearned,
    Pipeline
}