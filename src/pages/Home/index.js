import React from 'react';
import { View, TouchableOpacity } from 'react-native'

import ProfilePictureIcon from '../../components/ProfilePictureIcon';
import SearchField from '../../components/SearchField'
import Logo from '../../assets/logo.svg'

import {
  Container,
  SearchArea,
  HeaderText
} from './styles'

export default function Home({ navigation }) {
    return(
        <Container>
            <View style={{
                marginRight: "9.5%",
                marginTop: "7%",
                height: 35, 
                width: "100%",
                flexDirection: "row",
                justifyContent: "flex-end"
            }}>
            </View>

            <ProfilePictureIcon style={{marginLeft: "auto", marginRight: 15, marginTop: -35}} />

            <SearchArea>
                <Logo width={220} marginLeft={"auto"} marginRight={"auto"} marginBottom={-60} />
                <SearchField navigation={navigation} />
            </SearchArea>
        </Container>
    )
}