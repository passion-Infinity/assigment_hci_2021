/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import GetStarted from './screens/GetStarted';
import Splash from './Splash';
import Home from './screens/Home';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

// function HomeTab() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />
//     </Tab.Navigator>
//   );
// }

export default class App extends React.Component {
  constructor(props) {
    super();
  }

  render() {
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
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
