import React from 'react';
import {StyleSheet, Button, View, ViewStyle, Text, Alert, TextInput, SectionList, StatusBar, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { FlashList } from "@shopify/flash-list";
import { router } from 'expo-router';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#553fcf',
    marginHorizontal: 16,
    padding: 20,
    marginVertical: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomWidth: 1,
    width: "90%",
    alignItems: 'center',
    borderColor: 'Black',
    borderWidth: 2,
  },
  DailyTasks: {
    borderColor: 'Black',
    borderWidth: 2,
  },
  item: {
    color: 'white',
    fontSize: 20,
  },
  header: {
    fontSize: 32,
    width: "100%",
    textAlign: "center",
  },
  timer: {
    fontSize: 16,
    width: "100%",
    textAlign: "center",
  },
  title: {
    fontSize: 60,
    width: "100%",
    textAlign: "center",
  },
});

export default function Index() {

const Daily = ['Task 1', 'Task 2', 'Task 3', 'Task 4' ];
const Weekly = ['Task 1', 'Task 2',];

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        backgroundColor: '#fcf5e9'
      }}
    > 
    <Text style={styles.title}>Tasks</Text>

    {/* Daily Tasks */}
    <Text style={styles.header}>Daily Tasks</Text>
    <Text style={styles.timer}>Resets in XX:XX:XX</Text>           
    <FlashList
      data={ Daily}
      numColumns={2}
      renderItem={({ item }) => (
      <View style={styles.container}>
      <Text style={styles.item}>{item}</Text>
      </View>
        )}
      estimatedItemSize={6}
    />

    {/* Weekly Tasks */}
  <Text style={styles.header}>Weekly Tasks</Text>
  <Text style={styles.timer}>Resets in XX:XX:XX</Text>   
  <FlashList
      data={ Weekly}
      numColumns={2}
      renderItem={({ item }) => (
        <View style={styles.container}>
      <Text style={styles.item}>{item}</Text>
      </View>
        )}
      estimatedItemSize={6}
    />


      <Button onPress={() => router.navigate('/[Main Page]/Tasks/progress')} title="Progress"></Button>
      <Button onPress={() => router.navigate('/[Main Page]/Tasks/update')} title="Update"></Button>
    </View>
  );


}