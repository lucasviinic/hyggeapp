import React from 'react';
import { Image, ScrollView } from 'react-native'

import {
  Container,
  ImageView,
  FormView
} from './styles'

export default function Login({ navigation }) {

  return(
    <Container>
      <ScrollView>
        <ImageView>
          <Image style={{width: 395, height: 400}} source={require('../../assets/profile-picture-default.jpg')} />
        </ImageView>
        <FormView />
      </ScrollView>
    </Container>
  )
}