import React, {useState, useEffect} from 'react'

import Lupa from '../../assets/lupa.svg'
import {
    SearchField,
    TextInput
} from './styles'

export default function Search({value, navigation}){
  const [text, onChangeText] = useState(value)

  return(
    <SearchField style={{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 1,
      shadowRadius: 2,

      elevation: 3,
    }}>
      <TextInput 
        value={text}
        onChangeText={onChangeText}
        placeholder='O que você quer comprar?' 
      />
      <Lupa width={20} marginRight={15} onPress={() => navigation.navigate('ProductInfo', text)} />
    </SearchField>
  )
}