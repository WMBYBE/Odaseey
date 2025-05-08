import React from 'react';
import { router } from 'expo-router';
import {StyleSheet,ImageBackground, View, Text, Alert, TextInput, TouchableOpacity} from 'react-native';


const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: "space-between",
    textAlign: 'center',
  },

  Input: {
    backgroundColor: '#553fcf',
    padding: 20,
    marginVertical: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    width: '100%',
    height: "20%",
    alignItems: 'center',
    borderColor: 'Black',
    borderWidth: 2,
    justifyContent: "center",
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 2,
    padding: 10,
    width: '100%',
    height: '100%',
    borderColor: 'black',
    borderWidth: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center'
  },
  border: {
    
    backgroundColor: '#553fcf',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomWidth: 1,
    width: '40%',
    height: "100%",
    borderColor: 'Black',
    borderWidth: 2,
  },
});
export default function Index() {
    const [text, onChangeText] = React.useState('Username');
  return (
    <View
      style={{
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fcf5e9',
      }}
    >
      <Text>Odassey</Text>
      <View>
          <ImageBackground
            source={require('../../assets/images/login.png')}
            style={styles.backgroundImage}
            resizeMode="stretch" // or "stretch", "contain", "repeat", "center"
          >

            <View>
              <TextInput style={styles.Input}
                  onChangeText={onChangeText}
                placeholder="Username"
                />
                <TextInput style={styles.Input}
                  onChangeText={onChangeText}
                  placeholder="Password"
                />
              </View>
              <View style={[styles.button]}>
                <TouchableOpacity style={[styles.border]} onPress={() => Alert.alert('logged in')}>
                  <Text style={[styles.buttonText]} >{"Login"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.border]} onPress={() => router.navigate('/signup')}>
                  <Text style={[styles.buttonText]} >{"Sign Up"}</Text>
                </TouchableOpacity>
            </View>
          </ImageBackground>
      </View>
    </View>
  );
}