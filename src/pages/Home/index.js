import React from 'react';
import { View, Button } from 'react-native'
import { useAuth } from '../../contexts/auth';

import ProfilePictureIcon from '../../components/ProfilePictureIcon';
import SearchField from '../../components/SearchField'
import Logo from '../../assets/logo.svg'

import {
  Container,
  SearchArea,
} from './styles'

export default function Home({ navigation }) {

    const { signed, user, signOut } = useAuth();

    console.log('signed: ', signed);
    console.log('user: ', user);

    return(
        <Container>
            {/* Boão de teste */}
            <Button onPress={() => signOut()} title="Sair" />

            <ProfilePictureIcon style={{marginLeft: "auto", marginRight: 11, marginTop: 5}} />

            <SearchArea>
                <Logo width={220} marginLeft={"auto"} marginRight={"auto"} marginBottom={-60} />
                <SearchField navigation={navigation} />
            </SearchArea>
        </Container>
    )
}