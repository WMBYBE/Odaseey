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
      }}
    >
      <Text>Tasks</Text>
      <Button onPress={() => router.navigate('/[Main Page]/Tasks/progress')} title="Progress"></Button>
      <Button onPress={() => router.navigate('/[Main Page]/Tasks/update')} title="Update"></Button>
    </View>
  );

}