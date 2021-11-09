import React from 'react';
import { View, Image, Pressable, Alert } from 'react-native'

import { ProfilePictureIcon } from './styles';

export default ({style}) => {
    return (
        <Pressable style={style} onPress={() => Alert.alert('Em construção', 'Vai para a tela com as informações de usuário')} >
            <ProfilePictureIcon>
                <Image style={{width: 55, height: 55}} 
                    source={require('../../assets/eu.jpg')} />
            </ProfilePictureIcon> 
        </Pressable>
    )
}