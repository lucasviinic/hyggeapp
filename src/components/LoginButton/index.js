import React from "react";

import { Button, Text } from './styles';

export default function LoginButton({style, onPress, navigation}) {
    return (
      <Button style={{...style}} onPress={onPress} navigation={navigation}>
          <Text>Sign In</Text>
      </Button>
    );
};