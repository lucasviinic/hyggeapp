import React, {useEffect} from "react";
import { FlatList, View, Text } from 'react-native'
import { useApp } from '../../contexts/app';

import SearchField from '../../components/SearchField'
import ProductBox from "../../components/ProductBox";

import { Container, Filters } from "./styles";

export default function ProductList({ route, navigation }){

  const { products, loadProducts } = useApp();

  //executa loadPorducts a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      loadProducts();
    }, 15000);

    return () => clearInterval(interval);
  }, [])

  return(
    <Container>
      <SearchField navigation={navigation} value={route.params} />
      <Filters>
        <Text>View destinada aos filtros</Text>
      </Filters>
      <View style={{flex: 1}}>
        {products && products.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <ProductBox navigation={navigation} item={item} />}
        />
        ) : (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Nenhum produto encontrado</Text>
          </View>
        )}
      </View>
    </Container>
  )
}