import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import api from '../../services/Api'

import SearchField from '../../components/SearchField'
import CountryFlag from '../../assets/country-flags/united-33135'

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
  TextEspecification,
  PriceText,
  CountryText,
  NextButton
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
            <View style={{flex: 1}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ImageField />
                    <InfoView>
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
                                    <TextEspecification>•   Apple M1 chip with 8‑core CPU, 7‑core GPU, and 16‑core Neural Engine</TextEspecification>
                                    <TextEspecification>•   8GB unified memory</TextEspecification>
                                    <TextEspecification>•   256GB SSD storage¹</TextEspecification>
                                    <TextEspecification>•   Retina display with True Tone</TextEspecification>
                                    <TextEspecification>•   Magic Keyboard</TextEspecification>
                                    <TextEspecification>•   Touch ID</TextEspecification>
                                    <TextEspecification>•   Force Touch trackpad</TextEspecification>
                                    <TextEspecification>•   Two Thunderbolt / USB 4 ports</TextEspecification>
                                </View>
                            </Section>

                            <View style={{flexDirection: 'row', height: 120}}>
                                <View style={{width: "40%", marginRight: 35}}>
                                    <SectionTitle>
                                        <SubTitle style={{fontSize: 17, color: "#73B3FF", marginBottom: 2}}>Preço</SubTitle>
                                        <Line style={{shadowColor: "#000", shadowOffset: {width: 2, height: 4}, 
                                                    shadowOpacity: 1, shadowRadius: 9.62, elevation: 3.5, }}/>
                                    </SectionTitle>
                                    <PriceText>$1,299.00</PriceText>
                                </View>
                                <View style={{width: "50%"}}>
                                    <SectionTitle>
                                        <View style={{flexDirection: 'row', marginBottom: 2}}>
                                            <SubTitle style={{fontSize: 17, color: "#73B3FF"}}>País</SubTitle>
                                            <View style={{marginLeft: 5, marginTop: "auto", marginBottom: "auto"}}><CountryFlag /></View>
                                        </View>
                                        <Line style={{shadowColor: "#000", shadowOffset: {width: 2, height: 4}, 
                                                    shadowOpacity: 1, shadowRadius: 9.62, elevation: 3.5, }}/>
                                    </SectionTitle>
                                    <CountryText>Estados Unidos</CountryText>
                                </View>
                            </View>

                            <NextButton style={{
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 1,
                                shadowRadius: 6.62,

                                elevation: 5,
                                }}>
                                <Text style={{fontSize: 16, marginBottom: "auto", marginTop: "auto", 
                                            shadowColor: "#000", shadowOffset: {width: 2, height: 3}, 
                                            shadowOpacity: 1, shadowRadius: 3.62, elevation: 6.5
                                }}>Seguir</Text>
                            </NextButton>
                    </InfoView>
                </ScrollView>
            </View>
            
        </Container>
    )
}