import React from 'react';
import {StyleSheet, View, Text, FlatList, Pressable, Image, Platform, Alert} from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { characterImages } from '../data/CharacterImages'


export default function Index() {
  //Array of the characters, key matches up to the character.ts file
  const DATA = [
    { id: '1', key: 'Hazen', title: 'Hazen' },
    { id: '2', key: 'Lemmy', title: 'Lemmy' },
    { id: '3', key: 'Nix', title: 'Nix' },
    { id: '4', key: 'Troy', title: 'Troy' },
  ];

  //function for character select, sets character key 
  const handleCharacterSelect = async (key: string) => {
    try {
      await AsyncStorage.setItem('selectedCharacterKey', key);
      router.replace('../'); //send back to main menu
    } catch (error) {
      console.error('Error saving character:', error);
    }
  };

  //renders a pressable object for every character that runs the character select function
  const renderItem = ({ item }: any) => {
    return (
      <Pressable onPress={() => handleCharacterSelect(item.key)}>
        <Image style={styles.character} source={characterImages[item.key]} />
        <Text style={styles.title} >{item.title}</Text>
      </Pressable>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fcf5e9',
      }}
    >
      <Text style={{ fontSize: 32, margin: 20 }}>Characters</Text>
      <FlatList
        numColumns={Platform.OS === 'web' ? 3 : 2} //3 runs over on mobile but looks better on web, 2 displays if not a web platform
        data={DATA} //character array
        renderItem={renderItem} //renders items 
        keyExtractor={(item) => item.id} //gets the id of the character
      />
    </View>
  )
}

const styles = StyleSheet.create({
  character: {
    flex: 1,
    padding: 50,
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius: 40,
    borderColor: 'Black',
    width: '90%',
    height: '90%',
    borderWidth: 8,
    },
    title:{
      justifyContent: "center"
    }
  });