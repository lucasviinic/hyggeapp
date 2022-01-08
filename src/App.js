import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './contexts/auth';
import { AppProvider } from './contexts/app';

import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppProvider>
          <Routes />   
        </AppProvider>      
      </AuthProvider>
    </NavigationContainer>
  );
}
