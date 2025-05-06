import React from 'react';
import {StyleSheet, View, Text, FlatList, Pressable, Image, Platform, Alert} from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { characterImages } from '../data/CharacterImages'


export default function Index() {
  const DATA = [
    { id: '1', key: 'Kiwi', title: 'Kiwi' },
    { id: '2', key: 'Monkey', title: 'Monkey' },
  ];
  const handleCharacterSelect = async (key: string) => {
    try {
      await AsyncStorage.setItem('selectedCharacterKey', key);
      router.replace('../');
    } catch (error) {
      console.error('Error saving character:', error);
    }
  };

  const renderItem = ({ item }: any) => {
    return (
      <Pressable onPress={() => handleCharacterSelect(item.key)}>
        <Image style={styles.character} source={characterImages[item.key]} />
        <Text>{item.title}</Text>
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
        numColumns={Platform.OS === 'web' ? 3 : 2}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  character: {
  padding: 50,
  marginVertical: 8,
  marginHorizontal: 20,
  borderRadius: 40,
  borderColor: 'Black',
  borderWidth: 8,
  },
});