import React from 'react';
import Home from './Home';
import Home1 from './Home1';
import Chat from './Chat';
import History from './History';
import Personnal from './Personnal';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Animated, Image, Platform, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HistoryTabNavigation from './HistoryTabNavigation';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();

export default function HomeTabNavigation({navigation}) {
  // return (
  //   <Tab.Navigator
  //     initialRouteName="Home"
  //     activeColor="#e91e63"
  //     barStyle={{
  //       backgroundColor: '#fff',
  //       height: 60,
  //       justifyContent: 'center',
  //       borderTopWidth: 3,
  //       borderColor: '#eee',
  //       borderRadius: 20,
  //     }}>
  //     <Tab.Screen
  //       name="Home"
  //       component={Home}
  //       options={{
  //         tabBarLabel: 'Home',
  //         tabBarIcon: ({focused, color}) => (
  //           <FontAwesome5 name="home" color={color} size={26} />
  //         ),
  //       }}
  //     />
  //     <Tab.Screen
  //       name="History"
  //       component={History}
  //       options={{
  //         tabBarLabel: 'History',
  //         tabBarIcon: ({color}) => (
  //           <FontAwesome5 name="clipboard-list" color={color} size={26} />
  //         ),
  //       }}
  //     />
  //     <Tab.Screen
  //       name="Chat"
  //       component={Chat}
  //       options={{
  //         tabBarLabel: 'Chat',
  //         tabBarIcon: ({color}) => (
  //           <FontAwesome5 name="comments" color={color} size={20} />
  //         ),
  //       }}
  //     />
  //     <Tab.Screen
  //       name="Personnal"
  //       component={Personnal}
  //       options={{
  //         tabBarLabel: 'Personnal',
  //         tabBarIcon: ({color}) => (
  //           <FontAwesome5 name="user-alt" color={color} size={26} />
  //         ),
  //       }}
  //     />
  //   </Tab.Navigator>
  // );

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 20,
          marginHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'center',
          // Max Height...
          height: 60,
          borderRadius: 10,
          // Shadow...
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10,
          },
          paddingHorizontal: 20,
        },
      }}>
      {
        // Tab Screens....
        // Tab ICons....
      }
      <Tab.Screen
        name={'Home1'}
        component={Home1}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <FontAwesome5
                name="home"
                size={focused ? 28 : 22}
                color={focused ? 'red' : 'gray'}></FontAwesome5>
            </View>
          ),
        }}></Tab.Screen>

      <Tab.Screen
        name={'HistoryTabNavigation'}
        component={HistoryTabNavigation}
        options={{
          title: 'Đơn hàng của tôi',
          tabBarIcon: ({focused}) => (
            <View>
              <FontAwesome5
                name="list-alt"
                size={focused ? 28 : 22}
                color={focused ? 'red' : 'gray'}></FontAwesome5>
            </View>
          ),
        }}></Tab.Screen>

      {
        // Extra Tab Screen For Action Button..
      }

      <Tab.Screen
        name={'ActionButton'}
        component={EmptyScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Cart');
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'red',
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: Platform.OS == 'android' ? 50 : 30,
                }}>
                <FontAwesome5 name="shopping-cart" size={30} color={'#fff'} />
              </View>
            </TouchableOpacity>
          ),
        }}></Tab.Screen>

      <Tab.Screen
        name={'Chat'}
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <FontAwesome5
                name="comments"
                size={focused ? 28 : 22}
                color={focused ? 'red' : 'gray'}></FontAwesome5>
            </View>
          ),
        }}></Tab.Screen>

      <Tab.Screen
        name={'Personnal'}
        component={Personnal}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <FontAwesome5
                name="user-alt"
                size={focused ? 28 : 22}
                color={focused ? 'red' : 'gray'}></FontAwesome5>
            </View>
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
}

function EmptyScreen() {
  return (
    <View
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}></View>
  );
}
