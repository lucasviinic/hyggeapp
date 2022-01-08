import React from 'react';
import { Button } from 'react-native'
import { useAuth } from '../../contexts/auth';

import {
  Content
} from './styles'

export default function Profile({ navigation }) {

  const { signOut } = useAuth();

  return(
    <Content>
      {/* Botão temporário para efetuar o logout */}
      <Button onPress={() => signOut()} title="Sair" />
    </Content>
  )
}