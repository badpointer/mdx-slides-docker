import React from 'react';
import styled from 'styled-components';

const ScaleImg = styled.img`
    background-color: rgb(202, 225, 250, .6);
    width: 100%;
    margin-left: 25px;
    border-radius: 10px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const List = styled.ul`
`;

const ListItem = styled.li`
    font-weight: 400;
    text-align: left;
    font-family: "Open Sans",sans-serif;
    margin: 25px;
`;



const BOMUI = () => {
    return (
        <Container>
            <ScaleImg src={'../../img/i-1.png'} />
        </Container>
    )  
}

const BOMRecipies = () => {
    return (
        <Container>
            <ScaleImg src={'../../img/i-2.png'} />
        </Container>
    )
}

const OldArc = () => {
    return (
        <Container>
            <ScaleImg src={'../../img/i-3.png'} />
        </Container>
    )
}

const NewArc = () => {
    return (
        <Container>
            <ScaleImg src={'../../img/i-4.png'} />
        </Container>
    )
}

const LessonLearned = () => {
    return (
        <React.Fragment>
            <List>
                <ListItem>
                    Why we chose containers and microservices?
                </ListItem>

                <ListItem>
                    Hurdles and lessons
                </ListItem>
                <ListItem>
                    Current Philly Architecture
                </ListItem>
            </List>
        </React.Fragment>
    )
}

const PhillyArc = () => {
    return (
        <Container>
            <ScaleImg src={'../../img/phil.jpeg'} />
        </Container>
    )
}

export default {
    BOMUI,
    BOMRecipies,
    OldArc,
    NewArc,
    LessonLearned,
    PhillyArc
}
