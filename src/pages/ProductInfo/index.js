import React, { useLayoutEffect, useEffect, useState } from 'react';
import { Text } from 'react-native'
import api from '../../services/Api'

import {
  Container,
  Options
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

    useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => (
        <Options>
        <Text style={{color: "#FFFFFF", fontSize: 17, marginRight: 18}} onPress={() => navigation.navigate('Signup')}>Sign-up</Text>
        <Text style={{color: "#FFFFFF", fontSize: 17}} onPress={() => navigation.navigate('Login')}>Login</Text>
        </Options>
        ),
    });
    }, [navigation]);

    return(
        <Container>
            <Text className="texto" style={{color: "#FFFFFF", marginTop: "auto", marginBottom: "auto" }}>
            {product ? product.name : "Carregando..."}
            </Text>
        </Container>
    )
}