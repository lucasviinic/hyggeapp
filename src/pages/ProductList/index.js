import React from "react";
import {ScrollView} from 'react-native'

import SearchField from '../../components/SearchField'
import ProductBox from "../../components/ProductBox";

import { 
    Container
} from "./styles";

export default function ProductList(){
  return(
    <Container>
        <SearchField />
        <ScrollView>
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
        </ScrollView>
    </Container>
  )
}