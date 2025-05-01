import * as React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
//import { initDatabase } from './initDB'; // adjust path if needed

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
  },
  // expo: {
  //     androidStatusBar: {
  //       backgroundColor: '#C2185B',
  //       translucent: false,
  //       hidden: false
  //     }
  // },
  // androidStatusBar: {
  //     backgroundColor: '#ffffff',
  //     barStyle: 'dark-content',
  //     translucent: true,
  //     hidden: false
  // },
});

export default function App() {
// useEffect(() => {
//   initDatabase();
//  }, []);

  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Notice that the status bar has light text!</Text>
      <StatusBar style="dark" />
    </View>
  );
}
