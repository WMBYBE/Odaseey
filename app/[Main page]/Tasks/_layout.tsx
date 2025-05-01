import React from 'react';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="progress"
        options={{
          presentation: 'modal',
          animation: 'fade',
          headerShown: false,
        }}
      />
    </Stack>
  );
}