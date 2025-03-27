import React from 'react';
import {StyleSheet, Button, View, Text, Alert, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function Index() {
          const router = useRouter();
    const [text, onChangeText] = React.useState('Username');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Odassey</Text>
      <Button onPress={() => router.navigate('/login')} title="Login"></Button>;
    </View>
  );

}
