import React from 'react';
import { Text, View, Dimensions } from 'react-native'
import Video from 'react-native-video';
import { useAuth } from '../../contexts/auth';
import { useForm, Controller } from "react-hook-form";

import {
  Container,
  FormArea,
  Footer,
  Copyright
} from './styles'

import LoginButton from '../../components/LoginButton';
import TextField from '../../components/TextField';

import Logo from '../../assets/logo_hygge.svg'

const { height } = Dimensions.get("window");

export default function Login({ navigation }) {

  const { signIn } = useAuth();

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: 'lucasviinic',
      password: '1234'
    }
  });

  const onSubmit = data => {
    signIn(data)
  }

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
        <Logo width={195} marginLeft={"auto"} marginRight={"auto"} marginBottom={-60} />
        <Controller
          control={control}
          rules={{
          required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField placeholder="Digite seu nome de usuário" 
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
            <TextField placeholder="Digite sua senha" 
              value={value} 
              onChangeText={onChange} 
              onBlur={onBlur} 
              password={true}
            />
          )}
          name="password"
        />
        <LoginButton onPress={handleSubmit(onSubmit)} navigation={navigation} />
      </FormArea>
      <Footer>
        <Copyright>© 2022 Käufer</Copyright>
      </Footer>
    </Container>
  )
}