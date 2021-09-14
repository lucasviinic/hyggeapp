import React from 'react';
import { Text } from 'react-native'

import SearchField from '../../components/SearchField'
import Logo from '../../assets/logo.svg'
import Lupa from '../../assets/lupa.svg'

import {
  Container,
  Footer,
  SearchArea,
} from './styles'

export default function Home({ navigation }) {
    return(
        <Container>
            <SearchArea>
                <Logo width={200} marginLeft={"auto"} marginRight={"auto"} marginBottom={-60} />
                <SearchField navigation={navigation} />
            </SearchArea>
            <Footer>
                <Text style={{color: "#EBEBEB", fontSize: 12}}>Copyright © 2021 - Käufer</Text>
            </Footer>
        </Container>
    )
}