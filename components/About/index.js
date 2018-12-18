import React from 'react';
import styled from 'styled-components';
import { Appear } from 'mdx-deck'
import BPImg from '../../img/badpointer';

const Title = styled.h2`
    ont-size: 1.5em;
    margin-left: 15px;
    color: white;
    font-family: "Open Sans",sans-serif;
`;

const Name = styled.h5`
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

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitleContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const List = styled.ul`
    list-style-type: none;
    margin-right: 20px;
`;

const ListItem = styled.li`
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin-bottom: .5em;
    color: white;
    font-family: "Open Sans",sans-serif;
`;

const Bullet = styled.li`
    width: 10px;
    height 10px;
    background-color: rgb(245, 247, 250, .3);
    margin-left: 4.3em;
    border-radius: 100%;
`;

export default () => {
    return (
        <Container>
            <TitleContainer>
                <Title>About Me</Title>
                <DockerImage src={'../../img/docker-node-exit-codes.gif'} />
            </TitleContainer>
            <List>
                <ListItem>Bryan Solero</ListItem>
                <ListItem>Senior Developer</ListItem>
            </List>
        </Container>
    )
}
