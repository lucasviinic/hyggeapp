import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

const AppContext = createContext({products: {}, loadProducts: () => {}});

export const AppProvider = ({children}) => {
  const [products, setProducts] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    async function loadStorageData(){
        const storageToken = await AsyncStorage.getItem('RNAuth:token');
        setToken(storageToken);

        const storageProducts = await AsyncStorage.getItem('RNAuth:products');

        if (storageProducts) {
            setProducts(JSON.parse(storageProducts))
        }
    }

    loadStorageData()
  }, [])

  async function loadProducts() {
    api.defaults.headers.Authorization = `Token ${token}`;
    const response = await api.get('/user/products');

    console.log('response', response.data)
    await AsyncStorage.setItem('RNAuth:products', JSON.stringify(response.data))

    setProducts(response.data)
  }

  return (
    <AppContext.Provider value={{products, loadProducts}}>
        {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);

  return context;
}