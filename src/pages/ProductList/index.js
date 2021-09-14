import React from "react";
import { ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchField from '../../components/SearchField'
import ProductBox from "../../components/ProductBox";
import Footer from "../../components/Footer";

import { Container } from "./styles";

export default function ProductList({navigation}){
  return(
    <Container>
        <SearchField navigation={navigation} />
        <ScrollView>
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
        </ScrollView>
        <Footer />
    </Container>
  )
}