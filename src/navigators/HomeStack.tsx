import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import HomeScreen from '../screens/HomeScreen';

const Stack=createNativeStackNavigator()

const StackNavigator:FC = () => {
  return (
   <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen}  />
   </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
