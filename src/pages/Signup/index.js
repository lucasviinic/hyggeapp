import React, { useLayoutEffect } from 'react';
import { Text } from 'react-native'

import {
  Container,
  Options
} from './styles'

export default function Login({ navigation }) {

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
      <Text className="texto" style={{color: "#FFFFFF", marginTop: "auto", marginBottom: "auto" }}>Página em construção</Text>
    </Container>
  )
}