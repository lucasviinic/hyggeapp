import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';
import PlusIcon from './assets/plus-icon.svg'

import HomeScreen from './pages/Home';
import ProductListScreen from './pages/ProductList';
import ProductInfoScreen from './pages/ProductInfo';
import LoginScreen from './pages/Login';
import SignupScreen from './pages/Signup';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
  
        switch (route.name) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Pedidos':
            iconName = 'list';
            break;
        }
  
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#3D3D3D',
      tabBarStyle: {
        borderTopWidth: 0,
        backgroundColor: '#FFFFFF',
      }
    })}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
          headerShown: false
        }} 
      />
      <Tab.Screen
        name="Personalizar"
        component={HomeScreen}
        options={() => ({
          tabBarIcon: () => (
            <View style={{
              backgroundColor: '#55DD93', 
              width: 50,
              height: 50,
              borderRadius: 50,
              marginBottom: 22,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <PlusIcon />
            </View>
          ),
          headerShown: false
        })}
      />
      <Tab.Screen 
        name="Pedidos" 
        component={ProductListScreen}
        options={{ 
          headerShown: false
        }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="ProductInfo" component={ProductInfoScreen} options={{ headerShown: false }} />
      </Stack.Navigator>      
    </NavigationContainer>

  );
}
