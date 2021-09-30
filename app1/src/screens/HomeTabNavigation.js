import React from 'react';
import Home from './Home';
import Chat from './Chat';
import History from './History';
import Personnal from './Personnal';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export default function HomeTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      barStyle={{
        backgroundColor: '#fff',
        height: 70,
        justifyContent: 'center',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="clipboard-list" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="comments" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Personnal"
        component={Personnal}
        options={{
          tabBarLabel: 'Personnal',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="user-alt" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
