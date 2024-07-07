
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TaskScreen } from './TodoAppScreens/TaskScreen/index.js';
import { GetStarted } from './TodoAppScreens/GetStarted/index.js';
import {Splash } from './TodoAppScreens/Splash/index.js';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='GetStarted' component={GetStarted} />
        <Stack.Screen name='TaskScreen' component={TaskScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;