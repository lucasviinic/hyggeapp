import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './pages/Home';
import ProductListScreen from './pages/ProductList';
import LoginScreen from './pages/Login';
import SignupScreen from './pages/Signup'

import Menu from './assets/menu';

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
            headerTitle: () => <Menu />,
            headerTintColor: 'rgba(255, 255, 255, 0.8)',
            headerStyle: {
              backgroundColor: '#543B89',
            }
          }} />
        <Stack.Screen 
        name="ProductList" 
        component={ProductListScreen}
        options={{
          title: null,
          headerTintColor: 'rgba(255, 255, 255, 0.8)',
          headerStyle: {
            backgroundColor: '#543B89',
          }
        }} />
        <Stack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{
          title: null,
          headerTintColor: 'rgba(255, 255, 255, 0.8)',
          headerStyle: {
            backgroundColor: '#543B89',
          }
        }} />
        <Stack.Screen 
        name="Signup" 
        component={SignupScreen}
        options={{
          title: null,
          headerTintColor: 'rgba(255, 255, 255, 0.8)',
          headerStyle: {
            backgroundColor: '#543B89',
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
