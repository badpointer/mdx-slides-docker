import React from 'react';
import styled from 'styled-components';
import { Appear } from 'mdx-deck'


const DockerImage = styled.img`
    border-width: 5px;
    border-color: rgb(202, 225, 250, .1);   
    border-style: solid;
    border-radius: 2%;
    background-color: rgb(202, 225, 250, .6);
    width: 50vw;
`;

const DockerImageH = styled.img`
    border-width: 5px;
    border-color: rgb(202, 225, 250, .1);   
    border-style: solid;
    border-radius: 2%;
    background-color: rgb(202, 225, 250, .6);
    width: 35vw;
`;

const EvolvingArch = () => {
    return (
        <React.Fragment>
            <DockerImage src={'../../img/blog.gif'} />
        </React.Fragment>
    )
}


const AutomatingMobile = () => {
    return (
        <React.Fragment>
            <DockerImage src={'../../img/fastlnae.gif'} />
        </React.Fragment>
    )
}

const FireBase = () => {
    return (
        <React.Fragment>
            <DockerImageH src={'../../img/fbflow.gif'} />
        </React.Fragment>
    )
}

const ECS = () => {
    return (
        <React.Fragment>
            <DockerImageH src={'../../img/dilv.gif'} />
        </React.Fragment>
    )
}

const End = () => {
    return (
        <React.Fragment>
            <DockerImage src={'../../img/nyan.gif'} />
        </React.Fragment>
    )
}

export default {
    EvolvingArch,
    AutomatingMobile,
    FireBase,
    ECS,
    End
}
