import React, { useEffect, useState } from 'react';
import {StyleSheet, Button, View, Text, TouchableOpacity, Modal} from 'react-native';
import { FlashList } from "@shopify/flash-list";
import moment from 'moment';
import { getLastReset, getTasks, saveTasks, setLastReset } from '../../Storage'; 
import { Task } from '../../types/task';
import { dailyTaskPool, weeklyTaskPool } from '../../data/taskPool'; 

export default function Index() {

  const [dailyTasks, setDailyTasks] = useState<Task[]>([]);
  const [weeklyTasks, setWeeklyTasks] = useState<Task[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [remainingTimeDay, setRemainingTimeDay] = useState(getTimeRemainingDay());
  const [remainingTimeWeek, setRemainingTimeWeek] = useState(getTimeRemainingWeek());
  const [selectedTaskType, setSelectedTaskType] = useState<'daily' | 'weekly' | null>(null);
  
  function getRandomTasks(pool: Omit<Task, 'id'>[], count: number): Task[] {
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).map((task, index) => ({
      ...task,
      id: Date.now() + index,
    }));
  }

  useEffect(() => {
    const seedTasksIfEmpty = async () => {
      const existingDaily = await getTasks('daily') as Task[];
       const existingWeekly = await getTasks('weekly') as Task[];
  
      if (existingDaily.length === 0) {
        const randomDailyTasks = getRandomTasks(dailyTaskPool, 4); 
        await saveTasks('daily', randomDailyTasks);
        setDailyTasks(randomDailyTasks); 
      }
  
      if (existingWeekly.length === 0) {
        const randomWeeklyTasks = getRandomTasks(weeklyTaskPool, 2); 
        await saveTasks('weekly', randomWeeklyTasks);
        setWeeklyTasks(randomWeeklyTasks); 
      }
    };
  
    seedTasksIfEmpty();
  }, []);

  useEffect(() => {
    const loadTasks = async () => {
      const loadedDaily = await getTasks('daily') as Task[];
      const loadedWeekly = await getTasks('weekly') as Task[];
      setDailyTasks(loadedDaily);
      setWeeklyTasks(loadedWeekly);
    };
    loadTasks();
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTimeDay(getTimeRemainingDay());
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const checkAndResetTasks = async () => {
      const now = new Date();
  
      const lastDailyReset = await getLastReset('daily');
      if (!lastDailyReset || now.toDateString() !== new Date(lastDailyReset).toDateString()) {
        const newDailyTasks = getRandomTasks(dailyTaskPool, 4);
        await saveTasks('daily', newDailyTasks);
        await setLastReset('daily');
        setDailyTasks(newDailyTasks);
      } else {
        const existingDaily = await getTasks('daily') as Task[];
        setDailyTasks(existingDaily);
      }
  
      const lastWeeklyReset = await getLastReset('weekly');
      const nowWeek = moment(now).week();
      const lastWeek = lastWeeklyReset ? moment(lastWeeklyReset).week() : -1;
  
      if (!lastWeeklyReset || nowWeek !== lastWeek) {
        const newWeeklyTasks = getRandomTasks(weeklyTaskPool, 2);
        await saveTasks('weekly', newWeeklyTasks);
        await setLastReset('weekly');
        setWeeklyTasks(newWeeklyTasks);
      } else {
        const existingWeekly = await getTasks('weekly') as Task[];
        setWeeklyTasks(existingWeekly);
      }
    };
  
    checkAndResetTasks();
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

  const handleTaskPress = (task: Task, type: 'daily' | 'weekly') => {
    setSelectedTask(task);
    setSelectedTaskType(type); 
    setModalVisible(true);
  
  };

  const handleCompleteTask = async (task: Task, type: 'daily' | 'weekly') => {
    if (task) {
      const updatedTask = { ...task, completed: true };

      console.log('Updated task:', updatedTask);
  
      if (type === 'daily') {
        const updatedTasks = dailyTasks.map((t) =>
          t.id === updatedTask.id ? updatedTask : t
        );
        await saveTasks('daily', updatedTasks); 
        setDailyTasks(updatedTasks);             
      }
  
      if (type === 'weekly') {
        const updatedTasks = weeklyTasks.map((t) =>
          t.id === updatedTask.id ? updatedTask : t
        );
        await saveTasks('weekly', updatedTasks); 
        setWeeklyTasks(updatedTasks);            
      }
  
      setModalVisible(false);  
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };
//---------------TESTING ONLY-------------------------------------------
  const rerollTasks = async () => {
    const newDaily = getRandomTasks(dailyTaskPool, 4);
    const newWeekly = getRandomTasks(weeklyTaskPool, 2);
  
    await saveTasks('daily', newDaily);
    await saveTasks('weekly', newWeekly);
  
    setDailyTasks(newDaily);
    setWeeklyTasks(newWeekly);
  };
  //------------------------------------------------------------------------
  return (
    <View style={styles.page}> 
    <Text style={styles.title}>Tasks</Text>

    {/* Daily */}
    <Text style={styles.header}>Daily Tasks</Text>
    <Text style={styles.timer}>
        {String(remainingTimeDay.hours).padStart(2, '0')}:
        {String(remainingTimeDay.minutes).padStart(2, '0')}:
        {String(remainingTimeDay.seconds).padStart(2, '0')}
      </Text>      

    <View style={styles.list}>
    <FlashList 
      data={ dailyTasks}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity style={[styles.container, item.completed && styles.completedTask,]}  onPress={() => handleTaskPress(item, 'daily')}>
          <Text style={styles.item}>{item.title}</Text>
        </TouchableOpacity>
        )}
      estimatedItemSize={6}
    />
</View> 
    {/* Weekly */}
  <Text style={styles.header}>Weekly Tasks</Text>
  <Text style={styles.timer}>{String(remainingTimeWeek.days).padStart(1, '0')}:
      {String(remainingTimeWeek.hours).padStart(2, '0')}:
        {String(remainingTimeWeek.minutes).padStart(2, '0')}:
        {String(remainingTimeWeek.seconds).padStart(2, '0')}</Text>   
  <FlashList
      data={ weeklyTasks}
      numColumns={2}
      renderItem={({ item }) => (
      <TouchableOpacity style={[styles.container, item.completed && styles.completedTask,]} onPress={() => handleTaskPress(item, 'weekly')}>
        <Text style={styles.item}>{item.title}</Text>
      </TouchableOpacity>
        )}
      estimatedItemSize={10}
    />

<Button title="Reroll Tasks" onPress={rerollTasks} />

      <Modal visible={modalVisible} animationType="slide" onRequestClose={closeModal}>
        <View style={styles.modalContent}>
          {selectedTask && (
            <>
              <Text style={styles.modalTitle}>{selectedTask.title}</Text>
              <Text style={styles.modalDescription}>{selectedTask.description}</Text>
              <Text style={styles.modalXp}>XP Reward: {selectedTask.xpReward}</Text>
              <Text style={styles.modalStatus}>
                {selectedTask.completed ? 'Completed' : 'Not Completed'}
              </Text>
              {!selectedTask.completed && (
                <Button title="Mark as Complete"  onPress={() => handleCompleteTask(selectedTask!, selectedTaskType!)} />
              )}
              <Button title="Close" onPress={closeModal} />
            </>
          )}
        </View>
      </Modal>
    </View>
  );


}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fcf5e9',
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#553fcf',
    marginHorizontal: 10,
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 2,
    alignItems: 'center',
  },
  list: {
    borderColor: 'Black',
    borderWidth: 10,
    padding: 5,
    marginHorizontal: 10,
    height: "35%",
  },
  item: {
    color: 'white',
    fontSize: 20,
  },
  header: {
    fontSize: 32,
    width: '100%',
    textAlign: 'center',
    marginVertical: 10,
    
  },
  timer: {
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 60,
    width: '100%',
    textAlign: 'center',
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalTitle: {
    fontSize: 32,
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalXp: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalStatus: {
    fontSize: 18,
    marginBottom: 10,
  },
  completedTask: {
    backgroundColor: '#8BC34A',
    opacity: 0.7, 
  },
});
