import React, { useState } from 'react';
import { Text, View, Dimensions } from 'react-native'
import Video from 'react-native-video';
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
const { width, height } = Dimensions.get("window");

export default function Login({ navigation }) {

  const {signed, user, signIn} = useAuth();

  console.log('signed: ', signed)
  console.log('user: ', user)

  const [visiblePassword, setVisiblePassword] = useState(true)

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: 'teste1',
      password: '1234'
    }
  });

  const onSubmit = data => {
    signIn(data)
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

      <Video
          source={require("../../assets/background-videos/video04.mp4")}
          style={{
            height: height,
            position: "absolute",
            top: 0,
            left: 0,
            alignItems: "stretch",
            bottom: 0,
            right: 0
          }}
          muted={true}
          repeat={true}
          resizeMode={"cover"}
          rate={1.0}
          ignoreSilentSwitch={"obey"}
      />

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
          onPress={handleSubmit(onSubmit)}
          navigation={navigation} 
        />
      </FormArea>
      <View style={{marginBottom: '10%', marginTop: -50}}>
          <Text style={{color: '#FFFFFFCC', fontSize: 13}}>© 2022 Käufer</Text>
      </View>
    </Container>
  )
}