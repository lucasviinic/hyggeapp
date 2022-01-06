import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../pages/Home';
import ProductList from "../pages/ProductList";

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
  <AuthStack.Navigator>
    <AuthStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <AuthStack.Screen name="ProductList" component={ProductList} options={{ headerShown: false }} />
  </AuthStack.Navigator>
}

