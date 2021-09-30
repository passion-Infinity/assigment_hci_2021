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
import Splash from './Splash';
import HomeTabNavigation from './screens/HomeTabNavigation';

const Stack = createNativeStackNavigator();
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
            name="HomeTabNavigation"
            component={HomeTabNavigation}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
