import React from 'react';
import { Text, Dimensions } from 'react-native';
import Video from 'react-native-video';

import Logo from '../../assets/logo_hygge.svg';

import {
  Container,
  FormView,
  SignInButton,
  SignUpButton,
  Footer,
  Copyright,
} from './styles'

const { height } = Dimensions.get("window");

export default function Home({ navigation }) {

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
      <FormView>
        <Logo width={195} marginLeft={"auto"} marginRight={"auto"} marginBottom={-60} />
        <SignInButton onPress={() => navigation.navigate('SignIn')}>
          <Text style={{fontSize: 19, color: '#41EB85'}}>SIGN IN</Text>
        </SignInButton>
        <SignUpButton onPress={() => navigation.navigate('SignUp')}>
          <Text style={{fontSize: 19, color: '#fff'}}>SIGN UP</Text>
        </SignUpButton>
      </FormView>
      <Footer>
        <Copyright>© 2022 Käufer</Copyright>
      </Footer>
    </Container>
  )
}