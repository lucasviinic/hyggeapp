import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import * as auth from '../services/auth';
import { Alert } from 'react-native';

const AuthContext = createContext({signed: true, user: {}, loading: true, signIn(){}});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(){
      const storageUser = await AsyncStorage.getItem('RNAuth:user');
      const storageToken = await AsyncStorage.getItem('RNAuth:token');

      api.defaults.headers.Authorization = `Bearer ${storageToken}`;

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  async function signIn(data) {
    const response = await auth.signIn(data);

    if ("user" in response.data) {
      setUser(response.data.user);

      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

      await AsyncStorage.setItem('RNAuth:user', JSON.stringify(response.data.user));
      await AsyncStorage.setItem('RNAuth:token', response.data.token);

    } else {
      Alert.alert('Erro', response.data.non_field_errors[0]);
      console.log('Erro no login: ', response.data.non_field_errors[0]);
    }
  }

  function signOut(){
    const username = user.username;
    AsyncStorage.clear().then(() => {
      console.log(`Usuário ${username} deslogado com sucesso!`);
      setUser(null)
    });
  }

  return (
    <AuthContext.Provider value={{signed: !!user, user, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}