/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from './screens/GetStarted';
import CardItemList from './screens/CardItemList';
import Splash from './Splash';
import HomeTabNavigation from './screens/HomeTabNavigation';
import {Image, Text, View} from 'react-native';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeTabNavigation"
          component={HomeTabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CardItemList"
          component={CardItemList}
          options={({route}) => ({
            tabBarStyle: {
              backgroundColor: 'tomato',
            },
            // title: route.params.title,
            headerShown: false,
            // headerBackTitleVisible: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
