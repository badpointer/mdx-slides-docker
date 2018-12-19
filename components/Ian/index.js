import React from 'react';
import styled from 'styled-components';

const ScaleImg = styled.img`
    width: 100%;
    border-width: 5px;
    border-color: rgb(202, 225, 250, .1);   
    border-style: solid;
    border-radius: 2%;
    background-color: rgb(202, 225, 250, .6);

`;

const ScaleImgPhilly = styled.img`
    border-width: 5px;
    border-color: rgb(202, 225, 250, .1);   
    border-style: solid;
    border-radius: 2%;
    background-color: rgb(202, 225, 250, .6);
    width: 35em;
`;



const List = styled.ul`
`;

const ListItem = styled.li`
    font-size: 2.0em;
    font-weight: 400;
    text-align: left;
    font-family: "Open Sans",sans-serif;
    margin: 25px;
`;



const BOMUI = () => {
    return (
        <React.Fragment>
            <ScaleImg src={'../../img/i-1.png'} />
        </React.Fragment>
    )  
}

const BOMRecipies = () => {
    return (
        <React.Fragment>
            <ScaleImg src={'../../img/i-2.png'} />
        </React.Fragment>
    )
}

const OldArc = () => {
    return (
        <React.Fragment>
            <ScaleImg src={'../../img/i-3.png'} />
        </React.Fragment>
    )
}

const NewArc = () => {
    return (
        <React.Fragment>
            <ScaleImg src={'../../img/i-4.png'} />
        </React.Fragment>
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
        <React.Fragment>
            <ScaleImgPhilly src={'../../img/phil.jpeg'} />
        </React.Fragment>
    )
}

const Marty = () => {
    return (
        <React.Fragment>
            <ScaleImgPhilly src={'../../img/marty.gif'} />
        </React.Fragment>
    )
}

export default {
    BOMUI,
    BOMRecipies,
    OldArc,
    NewArc,
    LessonLearned,
    PhillyArc,
    Marty
}
