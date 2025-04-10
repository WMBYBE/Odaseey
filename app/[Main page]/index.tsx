import React from 'react';
import {StyleSheet, Button, View, Text, Alert, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
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
      <Text>Test</Text>
      <Button onPress={() => router.navigate('[Main Page]/Progress')} title="Progress"></Button>
      <Button onPress={() => router.navigate('[Main Page]/Tasks')} title="Task"></Button>
      <Button onPress={() => router.navigate('[Main Page]/Settings')} title="Settings"></Button>
      <Button onPress={() => router.navigate('[Main Page]/Characters')} title="Characters"></Button>
    </View>
  );

}