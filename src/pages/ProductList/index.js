import React, {useLayoutEffect} from "react";
import { ScrollView, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchField from '../../components/SearchField'
import ProductBox from "../../components/ProductBox";
import Footer from "../../components/Footer";

import { Container, Options } from "./styles";

export default function ProductList({ route, navigation }){

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Options>
          <Text style={{color: "#FFFFFF", fontSize: 17, marginRight: 18}} onPress={() => alert('Tela de Cadastro')}>Sign-up</Text>
          <Text style={{color: "#FFFFFF", fontSize: 17}} onPress={() => alert('Tela de Login')}>Login</Text>
        </Options>
      ),
    });
  }, [navigation]);

  return(
    <Container>
        <SearchField navigation={navigation} value={route.params} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
        </ScrollView>
        <Footer />
    </Container>
  )
}