import React from 'react'
import styled from 'styled-components';

const List = styled.ul`
    list-style-type: none;
    margin-right: 20px;
`;

const ListItem = styled.li`
    font-size: 1.5em;
    font-weight: 600;
    text-align: center;
    margin-bottom: .5em;
    color: white;
    font-family: "Open Sans",sans-serif;
`;

const Title = styled.h1`
    ont-size: 2.5em;
    font-family: "Open Sans",sans-serif;
`;



export default  () => {
    return (
        <React.Fragment>
            <Title>Live Production Legacy Apps</Title>
            <List>
                <ListItem> •Feed Order Delivery (FOD)</ListItem>
                <ListItem> •Grower Information System (GIS)</ListItem>
                <ListItem> •Live Harvest Receving (LKR)</ListItem>
                <ListItem> •Mobile Broiler App (MBA)</ListItem>
            </List>
        </React.Fragment>
    )
};