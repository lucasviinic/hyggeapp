import React from "react";
import { View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import ProductList from "../pages/ProductList";

import PlusIcon from '../assets/plus-icon.svg'
import HomeIcon from '../assets/home-icon.svg'
import ProductListIcon from '../assets/list-icon.svg'

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function AuthRoutes() {

  const HomeTabs = () => {
    return (
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
  
          switch (route.name) {
            case 'Home':
              return <HomeIcon width={30} height={30} fill={color} />;
              break;
            case 'Pedidos':
              return <ProductListIcon width={21} height={21} fill={color} />;
              break;
          }
        },
        tabBarActiveTintColor: '#3D3D3D',
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: '#FFFFFF',
        }
      })}>
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{ 
            headerShown: false
          }} 
        />
        <Tab.Screen
          name="Personalizar"
          component={Home}
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
          component={ProductList}
          options={{ 
            headerShown: false
          }} 
        />
      </Tab.Navigator>
    );
  }

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
      <AuthStack.Screen name="ProductList" component={ProductList} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  )
}

