import { Task } from '../types/task';

export const dailyTaskPool: Omit<Task, 'id'>[] = [
    { title: 'Brush Teeth', description: 'Brush your teeth to maintain hygiene.', xpReward: 10, completed: false },
    { title: 'Drink Water', description: 'Drink 8 glasses of water.', xpReward: 5, completed: false },
    { title: 'Stretch', description: 'Stretch for 5 minutes.', xpReward: 8, completed: false },
    { title: 'Write Journal', description: 'Write in your journal.', xpReward: 15, completed: false },
    { title: 'Read Book', description: 'Read for 10 minutes.', xpReward: 12, completed: false },
    { title: 'Meditate', description: '5 minutes of meditation.', xpReward: 10, completed: false },
  ];
  
export const weeklyTaskPool: Omit<Task, 'id'>[] = [
    { title: 'Clean Room', description: 'Organize your space.', xpReward: 50, completed: false },
    { title: 'Grocery Shopping', description: 'Buy essential groceries.', xpReward: 30, completed: false },
    { title: 'Exercise', description: 'Workout at least 3 times.', xpReward: 60, completed: false },
    { title: 'Call Family', description: 'Check in with family.', xpReward: 25, completed: false },
  ];