import React from "react";
import {Text} from 'react-native'

import {Box, ImageField, ProductInfoField} from './styles'

export default function ProductBox(){
  return(
    <Box>
      <ImageField>
        <Text style={{fontSize: 22, color: "#FFFFFF", opacity: 0.3}}>Image Field</Text>
      </ImageField>
      <ProductInfoField>
        <Text style={{fontSize: 22, color: "#FFFFFF", opacity: 0.3}}>Product {"\n"}Info Field</Text>
      </ProductInfoField>
    </Box>
  )
}