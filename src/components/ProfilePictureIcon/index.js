import React from 'react';
import { Image, Pressable, Alert } from 'react-native'

import {
  ProfileIcon,
  ProfilePictureIcon 
} from './styles';

export default ({style, navigation}) => {
    return (
        <ProfileIcon onPress={() => navigation.navigate('Profile')} >
            <ProfilePictureIcon>
                <Image style={{width: 53, height: 53}} 
                    source={require('../../assets/eu.jpg')} />
            </ProfilePictureIcon> 
        </ProfileIcon>
    )
}