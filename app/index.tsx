import React from 'react';
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
      }}
    >

      <Text>Odassey</Text>
    </View>
  );
}
