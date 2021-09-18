import React from "react";
import {Text, ImageBackground} from 'react-native'

import {Box, ImageField, ProductInfoField} from './styles'

export default function ProductBox(){

  const image = {uri: 'https://a-static.mlcdn.com.br/1500x1500/macbook-pro-16-apple-intel-core-i9-16gb-ram-1tb-ssd-prateado/magazineluiza/226562700/3f635a608a835ce9879bfac34927b2c3.jpg'}

  return(
    <Box style={{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 1,
      shadowRadius: 6.62,

      elevation: 5,
    }}>
      <ImageField>
        <ImageBackground source={image} resizeMode="cover" style={{flex: 1}}/>
      </ImageField>
      <ProductInfoField>
        <Text style={{fontSize: 18, color: "#FFFFFF", opacity: 0.8}}>MacBook Pro 16” Apple Intel Core i9 16GB...</Text>
      </ProductInfoField>
    </Box>
  )
}