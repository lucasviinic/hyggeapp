import React, {useEffect} from "react";
import { FlatList, View } from 'react-native'
import { useApp } from '../../contexts/app';

import SearchField from '../../components/SearchField'
import ProductBox from "../../components/ProductBox";

import { Container } from "./styles";

export default function ProductList({ route, navigation }){

  const { products, loadProducts } = useApp();

  useEffect(() => {
    loadProducts();
  }, []);

  return(
    <Container>
      <SearchField navigation={navigation} value={route.params} />
      <View>
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ProductBox navigation={navigation} item={item} />}
        />
      </View>
    </Container>
  )
}