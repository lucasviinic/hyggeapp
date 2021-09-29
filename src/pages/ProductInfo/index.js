import React, { useEffect, useState } from 'react';
import { Text, ScrollView, View } from 'react-native'
import api from '../../services/Api'

import SearchField from '../../components/SearchField'

import {
  Container,
  ImageField,
  InfoView,
  SectionTitle,
  ProductName,
  Line,
  SubTitle,
  TextResume, 
  Section,
  TextEspecification
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
            <InfoView>
                <ScrollView>
                    <ProductName>MacBook Pro</ProductName>
                    
                    <Section>
                        <SectionTitle>
                            <SubTitle style={{fontSize: 17, color: "#73B3FF"}}>Sobre</SubTitle>
                            <Line style={{shadowColor: "#000", shadowOffset: {width: 2, height: 4}, 
                                        shadowOpacity: 1, shadowRadius: 9.62, elevation: 3.5, }}/>
                        </SectionTitle>
                        <TextResume>Apple M1 Chip with 8-Core CPU and 7-Core GPU 256GB Storage</TextResume>
                    </Section>
                    
                    <Section>
                        <SectionTitle>
                            <SubTitle style={{fontSize: 17, color: "#73B3FF"}}>Especificações</SubTitle>
                            <Line style={{shadowColor: "#000", shadowOffset: {width: 2, height: 4}, 
                                        shadowOpacity: 1, shadowRadius: 9.62, elevation: 3.5, }}/>
                        </SectionTitle>
                        <View style={{paddingTop: 10, paddingBottom: 10}}>
                            <TextEspecification>• Apple M1 chip with 8‑core CPU, 7‑core GPU, and 16‑core Neural Engine</TextEspecification>
                            <TextEspecification>• 8GB unified memory</TextEspecification>
                            <TextEspecification>• 256GB SSD storage¹</TextEspecification>
                            <TextEspecification>• Retina display with True Tone</TextEspecification>
                            <TextEspecification>• Magic Keyboard</TextEspecification>
                            <TextEspecification>• Touch ID</TextEspecification>
                            <TextEspecification>• Force Touch trackpad</TextEspecification>
                            <TextEspecification>• Two Thunderbolt / USB 4 ports</TextEspecification>
                        </View>
                    </Section>
                </ScrollView>
            </InfoView>
        </Container>
    )
}