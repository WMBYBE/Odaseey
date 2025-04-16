import React from 'react';
import {StyleSheet, Button, View, Text, Alert, TextInput, FlatList, Pressable, Image} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function Index() {
  const styles = StyleSheet.create({
    character: {
      flex: 1,
    padding: 150,
    marginVertical: 8,
    marginHorizontal: 20,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    borderColor: 'Black',
    width: '100%',
    height: '100%',
    borderWidth: 8,
    },
  });
  const DATA = [
    {
      id: '1',
      title: 'placeholder',
      image: () => <Image style={[styles.character]} source={require('../../assets/images/Characters/placeholder.png')} />,
    },
    {
      id: '2',
      title: 'placeholder 2',
      image: () => <Image style={[styles.character]} source={require('../../assets/images/Characters/placeholder2.png')} />,
    },
    {
      id: '3',
      title: 'placeholder 3',
      image: () => <Image style={[styles.character]} source={require('../../assets/images/Characters/placeholder.png')} />,
    },
    {
      id: '4',
      title: 'placeholder 4',
      image: () => <Image style={[styles.character]} source={require('../../assets/images/Characters/placeholder2.png')} />,
    },
    {
      id: '5',
      title: 'placeholder',
      image: () => <Image style={[styles.character]} source={require('../../assets/images/Characters/placeholder.png')} />,
    },
    {
      id: '6',
      title: 'placeholder 2',
      image: () => <Image style={[styles.character]} source={require('../../assets/images/Characters/placeholder2.png')} />,
    },
  ];
  return (
    
    <View
      style={{
        flex: 4,
        alignItems: "center",
        backgroundColor: '#fcf5e9',
      }}
    >
      <Text>Characters</Text>
      <FlatList 
      numColumns = {3}
      data={DATA}
      renderItem={({item}) => {
        return (
          <Pressable>
            {item.image()}
            <Text>{item.title}</Text>
          </Pressable>
        );
      }}
    />
    </View>
  );

}