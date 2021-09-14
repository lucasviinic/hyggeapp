import React from 'react'

import Lupa from '../../assets/lupa.svg'
import {
    SearchField,
    TextInput
} from './styles'

export default function Search(){
    return(
        <SearchField>
            <Lupa width={20} marginLeft={15} />
            <TextInput placeholder='O que você está procurando?' />
        </SearchField>
    )
}