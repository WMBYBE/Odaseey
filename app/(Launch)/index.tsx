import React from 'react';
import {StyleSheet, Button, View, Text, Alert, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function Index() {
    const [text, onChangeText] = React.useState('Username');
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
