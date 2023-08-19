import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Example from '@/screens/Example';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Example} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
