import React, {useState} from 'react'

import Lupa from '../../assets/lupa.svg'
import {
    SearchField,
    TextInput
} from './styles'

export default function Search({value, navigation}){
  const [text, onChangeText] = useState(value)

  return(
    <SearchField>
      <TextInput 
        value={text}
        onChangeText={onChangeText}
        placeholder='O que você está procurando?' 
      />
      <Lupa width={20} marginRight={15} onPress={() => navigation.navigate('ProductList', text)} />
    </SearchField>
  )
}