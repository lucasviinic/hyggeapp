import React, {useLayoutEffect} from "react";
import { ScrollView, Text } from 'react-native'
import LinearGradient from "react-native-linear-gradient";

import SearchField from '../../components/SearchField'
import ProductBox from "../../components/ProductBox";

import { Container } from "./styles";

export default function ProductList({ route, navigation }){
  return(
    <LinearGradient style={{flex: 1, width: "100%"}} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#2D2C33', '#41404A']}>
      <Container>
        <SearchField navigation={navigation} value={route.params} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <ProductBox />
          <ProductBox />
          <ProductBox />
        </ScrollView>
      </Container>
    </LinearGradient>

  )
}