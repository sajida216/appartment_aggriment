import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../components/List';
import Rooms from '../../components/Room/rooms';
import Chatbox from '../../components/Room/Eachroom';

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Rooms" component={Rooms} />
        <Stack.Screen name="Chatbox" component={Chatbox} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
