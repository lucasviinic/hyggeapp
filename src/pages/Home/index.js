import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Text } from 'react-native'
import api from '../../services/Api';

import Footer from '../../components/Footer'
import SearchField from '../../components/SearchField'

import Logo from '../../assets/logo.svg'

import {
  Container,
  SearchArea,
  Options
} from './styles'

export default function Home({ navigation }) {

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Options>
              <Text style={{color: "#FFFFFF", fontSize: 17, marginRight: 18}} onPress={() => navigation.navigate('Signup')}>Sign-up</Text>
              <Text style={{color: "#FFFFFF", fontSize: 17}} onPress={() => navigation.navigate('Login')}>Login</Text>
            </Options>
          ),
        });
      }, [navigation]);

    return(
        <Container>
            <SearchArea>
                <Logo width={200} marginLeft={"auto"} marginRight={"auto"} marginBottom={-60} />
                <SearchField navigation={navigation} />
            </SearchArea>
            <Footer />
        </Container>
    )
}