import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

import HomeScreen from './pages/Home';
import ProductListScreen from './pages/ProductList';
import ProductInfoScreen from './pages/ProductInfo';
import LoginScreen from './pages/Login';
import SignupScreen from './pages/Signup';

const Stack = createNativeStackNavigator();

function HomeScreenTest() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ProductInfo" component={ProductInfoScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

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
        component={HomeScreenTest} 
        options={{ 
          headerShown: false
        }} 
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
        <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
      </Stack.Navigator>      
    </NavigationContainer>

  );
}
