import React from 'react';
import styled from 'styled-components';
import { Appear } from 'mdx-deck'

const Title = styled.h1`
    font-size: 2.5em;
    font-family: "Open Sans",sans-serif;
`;

const DockerImage = styled.img`
    border-width: 5px;
    border-color: rgb(202, 225, 250, .1);   
    border-style: solid;
    border-radius: 50%;
    background-color: rgb(202, 225, 250, .6);
    width: 95%;
    margin-left: 25px;
`;

const List = styled.ul`
    list-style-type: none;
    margin-right: 20px;
`;

const ListItem = styled.li`
    font-size: 1.5em;
    font-weight: 600;
    text-align: center;
    margin-bottom: 0.5em;
    color: white;
    font-family: "Open Sans",sans-serif;
`;

export default () => {
    return (
        <React.Fragment>
                <Title>About Me</Title>
                <DockerImage src={'../../img/docker-node-exit-codes.gif'} />
            <List>
                <ListItem>Bryan Solero</ListItem>
                <ListItem>Senior Developer</ListItem>
            </List>
        </React.Fragment>
    )
}
