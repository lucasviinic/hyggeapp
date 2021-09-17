import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './pages/Home';
import ProductListScreen from './pages/ProductList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ 
            title: null,
            headerTintColor: 'rgba(255, 255, 255, 0.8)',
            headerStyle: {
              backgroundColor: '#5638A9',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
        <Stack.Screen 
        name="ProductList" 
        component={ProductListScreen}
        options={{
          headerTintColor: 'rgba(255, 255, 255, 0.8)',
          headerStyle: {
            backgroundColor: '#5638A9',
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
