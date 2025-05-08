import React from 'react';
import {Button, View, Text} from 'react-native';
import { router } from 'expo-router';


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fcf5e9'
      }}
    >
      <Text>Odassey</Text>
      <Button onPress={() => router.navigate('/login')} title="Login"></Button>
      <Button onPress={() => router.navigate('[Main page]')} title="Main Page"></Button>
    </View>
  );

}
