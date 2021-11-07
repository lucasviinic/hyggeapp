import React, { useLayoutEffect } from 'react';
import { Text } from 'react-native'

import {
  Container,
  FormArea,
  SubTitle,
  Options
} from './styles'

import Logo from '../../assets/logo.svg'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { TouchableOpacity } from 'react-native-gesture-handler';

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
      <TouchableOpacity style={{marginTop: "9%", marginLeft: "70%"}}>
        <Text style={{fontSize: 20, fontWeight: "bold", color: "#606060"}}>Sign Up</Text>
      </TouchableOpacity>
      <FormArea>
        <Logo width={220} marginLeft={"auto"} marginRight={"auto"} marginBottom={-60} />
        
        <SubTitle>Username:</SubTitle>
        <TextField height={40} placeholder="Digite seu nome de usuário" />
        <SubTitle>Senha:</SubTitle>
        <TextField password={true} placeholder="Digite sua senha" />

        <Button text="Sign In" style={{marginTop: 45}} navigation={navigation} />
      </FormArea>
    </Container>
  )
}