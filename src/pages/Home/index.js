import React from 'react';
import { Text } from 'react-native'

import Logo from '../../assets/logo.svg'
import Lupa from '../../assets/lupa.svg'

import {
  Container,
  Footer,
  SearchArea,
  SearchField,
  TextInput
} from './styles'

export default function Home() {
    return(
        <Container>
            <SearchArea>
                <Logo width={200} marginLeft={"auto"} marginRight={"auto"} marginBottom={-60} />
                <SearchField>
                    <Lupa width={20} marginLeft={15} />
                    <TextInput placeholder='O que você está procurando?' />
                </SearchField>
            </SearchArea>
            <Footer>
                <Text style={{color: "#EBEBEB", fontSize: 12}}>Copyright © 2021 - Käufer</Text>
            </Footer>
        </Container>
    )
}