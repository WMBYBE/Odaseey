import React from 'react';
import {StyleSheet, Button, View, Text, Alert, TextInput, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { characterImages } from '../data/CharacterImages'


export default function Index() {
  const [selectedCharacter, setSelectedCharacter] = useState<string>('placeholder');

useEffect(() => {
  const loadCharacter = async () => {
    const stored = await AsyncStorage.getItem('selectedCharacterKey');
    if (stored && characterImages[stored]) {
      setSelectedCharacter(stored);
    }
  };
  loadCharacter();
}, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#fcf5e9',
      }}
    >
  <SafeAreaProvider>
    <SafeAreaView style={styles.Character}>
    <TouchableOpacity>
    <Image resizeMode="contain" source={characterImages[selectedCharacter]} />
      </TouchableOpacity>
    </SafeAreaView>
  </SafeAreaProvider>


      <View style={[styles.button1]}>
        <TouchableOpacity style={[styles.button]} onPress={() => router.navigate('[Main Page]/Unlocks')}>
          <Text style={[styles.buttonText]} >{"Unlocks"}</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.button2]}>
        <TouchableOpacity style={[styles.button]} onPress={() => router.navigate('[Main Page]/Tasks')}>
          <Text style={[styles.buttonText]} >{"Tasks"}</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.button3]}>
        <TouchableOpacity style={[styles.button]} onPress={() => router.navigate('[Main Page]/Settings')}>
          <Text style={[styles.buttonText]} >{"Settings"}</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.button4]}>
        <TouchableOpacity style={[styles.button]} onPress={() => router.navigate('[Main Page]/Characters')}>
          <Text style={[styles.buttonText]} >{"Characters"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: '#553fcf',
    marginHorizontal: 16,
    padding: 20,
    marginVertical: 20,
    borderRadius: 50,
    borderColor: 'Black',
    borderWidth: 2,
    width: '90%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 32,
  },
  button1: { position: 'absolute', top: 0, left: 0 },
  button2: { position: 'absolute', top: 0, right: 1 },
  button3: { position: 'absolute', bottom: 0, left: 0 },
  button4: { position: 'absolute', bottom: 0, right: 0 },
  title: {
    fontSize: 60,
    width: '100%',
    textAlign: 'center',
  },
  Character: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});