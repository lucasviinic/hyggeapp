import React from 'react';
import {Image } from 'react-native'
import styled from 'styled-components';

const ProfilePictureIcon = styled.View`
    justify-content: center;
    border-radius: 20px;
`;

export default () => {
    return (
        <ProfilePictureIcon>
            <Image style={{width: 40, height: 40}} 
                source={require('../../assets/eu.jpg')} />
        </ProfilePictureIcon>
    )
}