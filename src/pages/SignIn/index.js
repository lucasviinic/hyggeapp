import React, { useState } from 'react';
import { Text } from 'react-native'
import { useAuth } from '../../contexts/auth';
import { useForm, Controller } from "react-hook-form";

import {
  Container,
  FormArea,
  TextField,
  TextInput,
  Button
} from './styles'

import Logo from '../../assets/logo.svg'
import IconVisiblePassword from '../../assets/icon-visible-password.svg'
import IconInvisiblePassword from '../../assets/icon-invisible-password.svg'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login({ navigation }) {

  const {signed, user, signIn} = useAuth();

  console.log(signed)
  console.log(user)

  function handleSignIn() {
    signIn();
  }

  const [visiblePassword, setVisiblePassword] = useState(true)

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: null,
      password: null
    }
  });

  const onSubmit = data => {
    console.log(data)
  }

  function TextBox({placeholder, value, onChangeText, password, onBlur, type}) {
    return (
      <TextField>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={password}
          onBlur={onBlur}
        />
        {type === 'password'
          ? (
              <TouchableOpacity 
                style={{
                  marginTop: "auto", 
                  marginBottom: "auto",
                  marginRight: "5%",
                }} 
                onPress={() => setVisiblePassword(!visiblePassword)}>
                {visiblePassword ? <IconInvisiblePassword /> : <IconVisiblePassword />}
              </TouchableOpacity>
            )
          : null
        }
      </TextField>
    )
  }

  function LoginButton({style, onPress}) {
    return (
      <Button style={{...style}} onPress={onPress}>
          <Text style={{fontSize: 16, marginBottom: "auto", marginTop: "auto", 
                      shadowColor: "#000", shadowOffset: {width: 2, height: 3}, 
                      shadowOpacity: 1, shadowRadius: 3.62, elevation: 6.5
          }}>Sign In</Text>
      </Button>
    );
  };

  return(
    <Container>
      <TouchableOpacity style={{marginTop: "9%", marginLeft: "70%"}}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={{fontSize: 20, fontWeight: "bold", color: "#3D3D3D"}}>Sign Up</Text>
      </TouchableOpacity>
      <FormArea>
        <Logo width={220} marginLeft={"auto"} marginRight={"auto"} marginBottom={-60} />
        
        <Controller
          control={control}
          rules={{
          required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextBox placeholder="Digite seu nome de usuário" 
              value={value} 
              onChangeText={onChange} 
              onBlur={onBlur} 
            />
          )}
          name="username"
        />
        <Controller
          control={control}
          rules={{
          required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextBox placeholder="Digite sua senha" 
              value={value} 
              onChangeText={onChange} 
              onBlur={onBlur} 
              password={visiblePassword}
              type={'password'}
            />
          )}
          name="password"
        />
        <LoginButton
          style={{
            marginTop: 45, 
            width: '60%', 
            height: 42,
            marginBottom: 90
          }}
          onPress={handleSignIn}
          navigation={navigation} 
        />
      </FormArea>
    </Container>
  )
}