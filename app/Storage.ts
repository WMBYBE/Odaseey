import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveTasks = async (key, tasks) => {
  try {
    const jsonValue = JSON.stringify(tasks);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Saving error:', e);
  }
};

export const getTasks = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Loading error:', e);
    return [];
  }
};

export async function getLastReset(type: 'daily' | 'weekly') {
    const data = await AsyncStorage.getItem(`lastReset-${type}`);
    return data ? new Date(data) : null;
  }
  
  export async function setLastReset(type: 'daily' | 'weekly') {
    await AsyncStorage.setItem(`lastReset-${type}`, new Date().toISOString());
  }