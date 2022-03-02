import React from 'react';
import { Text, ScrollView } from 'react-native';

import Logo from '../../assets/logo_hygge.svg';

import {
  Container,
  ImageView,
  FormView
} from './styles'

export default function SignUp({ navigation }) {

  return(
    <Container>
      <ScrollView>
        <Text style={{fontSize: 20, marginTop: 330}}>Tela de Registro</Text>
      </ScrollView>
    </Container>
  )
}