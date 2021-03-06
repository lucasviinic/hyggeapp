import React from "react";
import {Text, ImageBackground, TouchableOpacity, Alert} from 'react-native'

import {
  Box, 
  ImageField, 
  ProductInfoField,
  Informations,
  Price,
  Country,
  Status,
  ResumeText
} from './styles'

export default function ProductBox({ item, navigation }) {

  const image = {uri: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1633027804000'}

  return(
    <Box>
      <ImageField onPress={() => Alert.alert('Em construção', 'Exibe um modal com as fotos disponíveis')}>
        <ImageBackground source={image} resizeMode='cover' style={{flex: 1}}/>
      </ImageField>
      <ProductInfoField>
        <TouchableOpacity>
          <ResumeText>{item.name.slice(0, 13)}...</ResumeText>
        </TouchableOpacity>
        <Informations>
          <Price>
            <Text style={{fontSize: 11.5}}>Preço</Text>
            <Text style={{fontSize: 17}}>R$ {item.final_price}</Text>
          </Price>
          <Country>
            <Text style={{fontSize: 11.5}}>País</Text>
            <Text style={{fontSize: 17}}>{item.country_code}</Text>
          </Country>
          <Status>
            <Text style={{fontSize: 11.5}}>Status</Text>
            <Text style={{fontSize: 17, color: '#41EB85'}}>{item.status}</Text>
          </Status>
        </Informations>
      </ProductInfoField>
    </Box>
  )
}