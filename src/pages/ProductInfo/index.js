import React, { useLayoutEffect, useEffect, useState } from 'react';
import { Text } from 'react-native'
import api from '../../services/Api'

import SearchField from '../../components/SearchField'

import {
  Container,
  ImageField,
  Info,
  SectionTitle
} from './styles'

export default function ProductInfo({ route, navigation }) {

    const [product, setProduct] = useState(null)

    async function loadProduct(value){
        api.get(`/search/?s=${value}`)
        .then(response => setProduct(response.data))
        .catch(err => console.log(err))

        return product != null ? loadProduct() : product
    }

    useEffect(() => {
        loadProduct(route.params)
    }, [])

    return(
        <Container>
            <SearchField navigation={navigation} value={route.params} />
            <ImageField />
            <Info>
                <Text style={{
                    marginTop: 15, 
                    fontSize: 31, 
                    color: "#FFFFFF", 
                    textShadowColor: "#000000",
                    textShadowOffset: {width: 1, height: 3.5},
                    textShadowRadius: 20
                }}>MacBook Pro</Text>
                <SectionTitle>
                    <Text style={{fontSize: 16, color: "#73B3FF"}}>Sobre</Text>
                </SectionTitle>
            </Info>
        </Container>
    )
}