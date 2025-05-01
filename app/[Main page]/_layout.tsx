import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';


export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />
        <Drawer.Screen
          name="Tasks/index" 
          options={{
            drawerLabel: 'Tasks',
            title: 'Task',
          }}
        />
        <Drawer.Screen
          name="Settings/index" 
          options={{
            drawerLabel: 'Settings',
            title: 'Change Settings',
          }}
        />
        <Drawer.Screen
          name="Tasks/update" 
          options={{
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}