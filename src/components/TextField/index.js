import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native'

import {
  TextField,
  TextInput
} from './styles'

import IconVisiblePassword from '../../assets/icon-visible-password.svg'
import IconInvisiblePassword from '../../assets/icon-invisible-password.svg'

export default ({placeholder, value, onChangeText, password, onBlur}) => {

  const [visiblePassword, setVisiblePassword] = useState(true)

  return (
    <TextField>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={password ? visiblePassword : null}
        onBlur={onBlur}
      />
      {password
        ? (
            <TouchableOpacity 
              style={{
                marginTop: "auto", 
                marginBottom: "auto",
                marginRight: "5%",
              }} 
              onPress={() => setVisiblePassword(!visiblePassword)}>
              {visiblePassword ? <IconInvisiblePassword /> : <IconVisiblePassword />}
            </TouchableOpacity>
          )
        : null
      }
    </TextField>
  )
}