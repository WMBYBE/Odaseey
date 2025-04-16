import React from 'react';
import { router } from 'expo-router';
import {StyleSheet,ImageBackground, Button, View, Text, Alert, TextInput, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#553fcf',
    marginHorizontal: 16,
    padding: 20,
    marginVertical: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomWidth: 1,
    width: '100%',
    height: "80%",
    alignItems: 'center',
    borderColor: 'Black',
    borderWidth: 2,
    justifyContent: "center",
  },

  Input: {
    backgroundColor: '#553fcf',
    marginHorizontal: 16,
    padding: 20,
    marginVertical: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    width: '40%',
    height: "10%",
    alignItems: 'center',
    borderColor: 'Black',
    borderWidth: 2,
    justifyContent: "center",
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    padding: 10,
    width: '100%',
    height: '100%',
  },


  buttonText: {
    color: 'white',
    fontSize: 32,
  },
});
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


        <TextInput style={styles.Input}
            onChangeText={onChangeText}
          placeholder="Username"
          />
          <TextInput style={styles.Input}
            onChangeText={onChangeText}
            placeholder="Password"
          />

      <View>
        <TouchableOpacity style={[styles.button]} onPress={() => Alert.alert('logged in')}>
          <Text style={[styles.buttonText]} >{"Login"}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={[styles.button]} onPress={() => router.navigate('/signup')}>
          <Text style={[styles.buttonText]} >{"Sign Up"}</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={require('../../assets/images/login.png')} // Path to your image
        style={styles.backgroundImage}
        resizeMode="contain" // or "stretch", "contain", "repeat", "center"
      >
      </ImageBackground>
    </View>
  );
}