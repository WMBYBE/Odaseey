import React from 'react';
import {StyleSheet, Button, View, Text, Alert, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function Index() {
    const [text, onChangeText] = React.useState('Username');
    const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Button onPress={() => router.push('/login')} title="Login"></Button>
      <Text>hjolasdhouweyrhfhu</Text>
      <Text>hjolasdhouweyrhfhu</Text>
      <Button onPress={() => router.push('/home')} title="Home"></Button>
      <Text>Odaseey</Text>
    </View>
  );
}
