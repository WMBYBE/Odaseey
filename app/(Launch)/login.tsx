import React from 'react';
import { router } from 'expo-router';
import {StyleSheet, Button, View, Text, Alert, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

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
      <TextInput
          onChangeText={onChangeText}
         placeholder="username"
        />
         <TextInput
                  onChangeText={onChangeText}
                  placeholder="password"
                />
       <Button
                title="Login"
                onPress={() => Alert.alert('logged in')}
              />
      <Button
              title="Create Account"
              onPress={() => router.navigate('/signup')}
            />
    </View>
  );
}