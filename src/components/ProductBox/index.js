import React from "react";
import {Text, ImageBackground, TouchableOpacity} from 'react-native'
import LinearGradient from "react-native-linear-gradient";

import {
  Box, 
  ImageField, 
  ProductInfoField,
  Price,
  ResumeText
} from './styles'

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
      shadowRadius: 2,

      elevation: 3,
    }}>
      <ImageField>
        <ImageBackground source={image} resizeMode="cover" style={{flex: 1}}/>
      </ImageField>
      <ProductInfoField>
        <TouchableOpacity>
          <ResumeText style={{fontSize: 18, color: "#2D2D2D", opacity: 0.8}}>MacBook Pro 16” Apple Intel Core i9 16GB...</ResumeText>
        </TouchableOpacity>
        <Price>
          <Text style={{fontSize: 17, fontWeight: "bold", color: "#4ED37B"}}>R$: 16.000</Text>
          <Text style={{fontSize: 17, fontWeight: "bold", color: "#4ED37B"}}> ↓ 20%</Text>
        </Price>
      </ProductInfoField>
    </Box>
  )
}