import React from 'react';
import { useAuth } from '../../contexts/auth';

import ProfilePictureIcon from '../../components/ProfilePictureIcon';
import SearchField from '../../components/SearchField'
import Logo from '../../assets/logo-home.svg'

import {
  Container,
  SearchArea,
} from './styles'

export default function Dashboard({ navigation }) {

  const { signed, user } = useAuth();

  console.log('signed: ', signed);
  console.log('user: ', user);

  return(
    <Container>
      <ProfilePictureIcon navigation={navigation} />
      <SearchArea>
        <Logo width={220} marginLeft={"auto"} marginRight={"auto"} marginBottom={-60} />
        <SearchField navigation={navigation} />
      </SearchArea>
    </Container>
  )
}