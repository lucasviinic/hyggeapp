import React from "react";
import { Text } from "react-native";

import { Button } from './styles';

export default ({text, style, navigation}) => {
  return (
    <Button style={{...style}} onPress={() => navigation.navigate('HomeTabs')}>
        <Text style={{fontSize: 16, marginBottom: "auto", marginTop: "auto", 
                    shadowColor: "#000", shadowOffset: {width: 2, height: 3}, 
                    shadowOpacity: 1, shadowRadius: 3.62, elevation: 6.5
        }}>{text}</Text>
    </Button>
  );
};