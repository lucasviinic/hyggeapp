import React from 'react';
import { View, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import SearchField from '../../components/SearchField'

import Logo from '../../assets/logo.svg'

import {
  Container,
  SearchArea,
  HeaderText
} from './styles'

export default function Home({ navigation }) {
    return(
        <LinearGradient style={{flex: 1, width: "100%"}} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#2D2C33', '#41404A']}>
            <Container>
                    <View style={{
                        marginRight: "9.5%",
                        marginTop: "7%",
                        height: 35, 
                        width: "100%",
                        flexDirection: "row",
                        justifyContent: "flex-end"
                    }}>
                        <TouchableOpacity>
                            <HeaderText style={{marginRight: "6%"}} onPress={() => alert("Tela de Cadastro")}>Sign Up</HeaderText>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <HeaderText onPress={() => alert("Tela de Login")}>Log In</HeaderText>
                        </TouchableOpacity>
                    </View>
                    <SearchArea>
                        <Logo width={200} marginLeft={"auto"} marginRight={"auto"} marginBottom={-60} />
                        <SearchField navigation={navigation} />
                    </SearchArea>
            </Container>
        </LinearGradient>
    )
}