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
import GetStarted1 from './screens/GetStarted1';
import CardItemList from './screens/CardItemList';
import CardItemDetail from './screens/CardItemDetail';
import CalendarsScreen from './screens/Calendar';
import Splash from './Splash';
import Login from './screens/Login';
import HomeTabNavigation from './screens/HomeTabNavigation';
import RentalScreen from './screens/RentalScreen';
import RentalScreen1 from './screens/RentalScreen1';
import Register from './screens/Register';
import Confirm from './screens/ConfirmScreen';
import Success from './screens/Success';
import HistoryTabNavigation from './screens/HistoryTabNavigation';
import UpdatePerson from './screens/UpdatePerson';
import CartScreen from './screens/CartScreen';
import RulesScreen from './screens/RulesScreen';
import ReturnDeviceScreen from './screens/ReturnDeviceScreen';
import ConfirmReturnScreen from './screens/ConfirmReturnScreen';

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
          name="GetStarted1"
          component={GetStarted1}
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
        <Stack.Screen
          name="Calendar"
          component={CalendarsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CardItemDetail"
          component={CardItemDetail}
          options={({route}) => ({
            // headerBackTitleVisible: false,
            // headerTitle: false,
            // headerTransparent: true,
            // headerTintColor: '#fff',
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RentalScreen"
          component={RentalScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RentalScreen1"
          component={RentalScreen1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Confirm"
          component={Confirm}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UpdatePerson"
          component={UpdatePerson}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RulesScreen"
          component={RulesScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ReturnDeviceScreen"
          component={ReturnDeviceScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ConfirmReturn"
          component={ConfirmReturnScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
