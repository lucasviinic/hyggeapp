import React, {useState} from 'react';
import { Text } from 'react-native'

import Footer from '../../components/Footer'
import SearchField from '../../components/SearchField'

import Logo from '../../assets/logo.svg'
import Lupa from '../../assets/lupa.svg'

import {
  Container,
  SearchArea,
  SearchAndCleanButtons,
  Button
} from './styles'

export default function Home({ navigation }) {
    return(
        <Container>
            <SearchArea>
                <Logo width={200} marginLeft={"auto"} marginRight={"auto"} marginBottom={-60} />
                <SearchField navigation={navigation} />
                <SearchAndCleanButtons>
                  <Button>
                      <Text style={{fontSize: 15}}>Search</Text>
                  </Button>
                  <Button>
                      <Text style={{fontSize: 15}}>Clean</Text>
                  </Button>
                </SearchAndCleanButtons>
            </SearchArea>
            <Footer />
        </Container>
    )
}