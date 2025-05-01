import React from 'react';
import {StyleSheet, Button, View, Text, Alert, TextInput, TouchableOpacity, Image, ImageBackground} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { router } from 'expo-router';

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    width: "100%",
    textAlign: "center",
  },
  soon: {
    fontSize: 40,
    width: "100%",
    textAlign: "center",
    padding: 100,
  },
  Character: {
    height: 'auto'
  },
});

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
      <Text style={styles.title}>Progress</Text>
      <ImageBackground resizeMode='contain'
                    source={require('../../assets/images/login.png')}
                    />
            <Text style={styles.soon}>Coming Soon!</Text>
        
    </View>
  );

}