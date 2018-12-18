import React from 'react';
import styled from 'styled-components';
import { Image, Notes, Appear } from 'mdx-deck'
const Title = styled.h1`
    ont-size: 1.5em;
    margin-left: 15px;
    color: white;
    font-family: "Open Sans",sans-serif;
`;

const Paragraph = styled.p`
    font-family: "Open Sans",sans-serif;
    line-height: 1em;
    margin: 1em;
`;

const List = styled.ul`
`;

const ListItem = styled.li`
    font-weight: 600;
    text-align: left;
    font-family: "Open Sans",sans-serif;
`;

const SubParagraph = styled.p`
    font-family: "Open Sans",sans-serif;
    font-weight: 200;
    font-style: italic;
    font-size: 25px;
`;

const AboutContainer = () => {
    return (
        <React.Fragment>
            <Title>Containers</Title>
            <Paragraph>
                {`Shipping contianers allow goods to be transported by ship, tuck, or train - regardless of the its contents`}
            </Paragraph>
            <Paragraph>
                {`Software containers are similar in that they are a standard unit that can contain different application or services with
                its dependencies and configurations.`}
            </Paragraph>

        </React.Fragment>
    )
}

const ButWhy = () => {
    return (
        <React.Fragment>
            <Title>But Why?</Title>
            <List>
                <ListItem>
                Containers use Less Resources
                    <SubParagraph>Since you share the OS kernel, containers are light.</SubParagraph>
                </ListItem>
                <ListItem>
                    Scalability
                    <SubParagraph>Scale out quickly by creating new containers for short-term tasks.</SubParagraph>
                </ListItem>
                <ListItem>
                    Fast Boot
                    <SubParagraph>Takes seconds to start a container, so if things go south and you need to restart or deploy
                        new versions, you new instance is up in seconds.
                    </SubParagraph>
                </ListItem>
                <ListItem>
                    Eliminating the "works on My Machine" situation
                    <SubParagraph>
                        This allows a containerized appliation to be deployed across environments with little or no modification
                        and they are isolated from each other on a shared operating system. SO the foot print for local, dev, QA and prod for all the same.
                    </SubParagraph>
                </ListItem>
            </List>
        </React.Fragment>
    );
}

export default {
    AboutContainer,
    ButWhy
}