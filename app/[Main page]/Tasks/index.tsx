import React, { useEffect, useState } from 'react';
import {StyleSheet, Button, View, ViewStyle, Text, Alert, TextInput, SectionList, StatusBar, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { FlashList } from "@shopify/flash-list";
import { router } from 'expo-router';
import moment from 'moment';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#553fcf',
    marginHorizontal: 10,
    padding: 15,
    marginVertical: 5,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    width: "90%",
    alignItems: 'center',
    borderColor: 'Black',
    borderWidth: 2,
  },
  list: {
    borderColor: 'Black',
    borderWidth: 10,
    padding: 15,
    marginHorizontal: 10
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

  //const Daily = await db.getFirstAsync('SELECT ta.task_id, t.title 
  // FROM Task_Assignments ta 
  // JOIN tasks t ON ta.task_id = t.task_id
  // WHERE due_date = not tommorow?
  // AND task_frequency = 'Daily';);

  //const Weekly = await db.getFirstAsync('SELECT ta.task_id, t.title 
  // FROM Task_Assignments ta 
  // JOIN tasks t ON ta.task_id = t.task_id
  // WHERE due_date = not Next week??;
  // AND task_frequency = 'Weekly';);
const Daily = ['Task 1', 'Task 2', 'Task 3', 'Task 4' ];
const Weekly = ['Task 1', 'Task 2',];

const [remainingTimeDay, setRemainingTimeDay] = useState(getTimeRemainingDay());

useEffect(() => {
  const intervalId = setInterval(() => {
    setRemainingTimeDay(getTimeRemainingDay());
  }, 1000);

  return () => clearInterval(intervalId);
}, []);

function getTimeRemainingDay() {
  const now = moment();
  const endOfDay = moment().endOf('day');
  const diff = endOfDay.diff(now);
  const duration = moment.duration(diff);

  return {
    hours: duration.hours(),
    minutes: duration.minutes(),
    seconds: duration.seconds(),
  };
}

const [remainingTimeWeek, setRemainingTimeWeek] = useState(getTimeRemainingWeek());

useEffect(() => {
  const intervalId = setInterval(() => {
    setRemainingTimeWeek(getTimeRemainingWeek());
  }, 1000);

  return () => clearInterval(intervalId);
}, []);

function getTimeRemainingWeek() {
  const now = moment();
  const endOfWeek = moment().endOf('week');
  const diff = endOfWeek.diff(now);
  const duration = moment.duration(diff);

  return {
    days: duration.days(),
    hours: duration.hours(),
    minutes: duration.minutes(),
    seconds: duration.seconds(),
  };
}

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
    <Text style={styles.timer}>
        {String(remainingTimeDay.hours).padStart(2, '0')}:
        {String(remainingTimeDay.minutes).padStart(2, '0')}:
        {String(remainingTimeDay.seconds).padStart(2, '0')}
      </Text>           
    <View style={styles.list}>
    <FlashList 
      data={ Daily}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.container} onPress={() => Alert.alert('Task selected')}>
          <Text style={styles.item}>{item}</Text>
        </TouchableOpacity>
        )}
      estimatedItemSize={6}
    />
</View> 
    {/* Weekly Tasks */}
  <Text style={styles.header}>Weekly Tasks</Text>
  <Text style={styles.timer}>{String(remainingTimeWeek.days).padStart(1, '0')}:
      {String(remainingTimeWeek.hours).padStart(2, '0')}:
        {String(remainingTimeWeek.minutes).padStart(2, '0')}:
        {String(remainingTimeWeek.seconds).padStart(2, '0')}</Text>   
  <FlashList
      data={ Weekly}
      numColumns={2}
      renderItem={({ item }) => (
      <TouchableOpacity style={styles.container} onPress={() => Alert.alert('Task selected')}>
        <Text style={styles.item}>{item}</Text>
      </TouchableOpacity>
        )}
      estimatedItemSize={6}
    />


      <TouchableOpacity onPress={() => router.navigate('/[Main Page]/Tasks/progress')}>
        <Text>{"Progress"}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.navigate('/[Main Page]/Tasks/update')}>
        <Text>{"Update"}</Text>
      </TouchableOpacity>
    </View>
  );


}