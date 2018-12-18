import React from 'react'
import styled from 'styled-components';

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

const Title = styled.h1`
    ont-size: 1.5em;
    margin-left: 15px;
    color: white;
    font-family: "Open Sans",sans-serif;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
export default  () => {
    return (
        <Container>
            <Title>Live Production Legacy Apps</Title>
            <List>
                <ListItem> •Feed Order Delivery (FOD)</ListItem>
                <ListItem> •Grower Information System (GIS)</ListItem>
                <ListItem> •Live Harvest Receving (LKR)</ListItem>
                <ListItem> •Mobile Broiler App (MBA)</ListItem>
            </List>
        </Container>
    )
};