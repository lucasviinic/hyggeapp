import React, {useState} from 'react'

import {
    SearchField,
    TextInput
} from './styles'

export default function TextField({placeholder, password, value}){
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
        placeholder={placeholder}
        secureTextEntry={password}
      />
    </SearchField>
  )
}