import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllOrdersScreen from './AllOrdersScreen';
import WaitingForPaymentScreen from './WaitingForPaymentScreen';
import ProcessingScreen from './ProcessingScreen';
import TransportingScreen from './TransportingScreen';
import RentingScreen from './RentingScreen';
import RentedScreen from './RentedScreen';
import CanceledScreen from './CanceledScreen';

const Tab = createMaterialTopTabNavigator();

export default function HistoryTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 13, fontWeight: '600'},
        tabBarItemStyle: {width: 150},
        tabBarScrollEnabled: true,
        tabBarPressColor: '#ddd',
        tabBarInactiveTintColor: '#827e7e',
        tabBarActiveTintColor: '#2191ed',
      }}>
      {/* <Tab.Screen
        name="AllOrdersScreen"
        component={AllOrdersScreen}
        options={{
          tabBarLabel: 'Tất cả đơn',
        }}
      /> */}
      {/* <Tab.Screen
        name="WaitingForPaymentScreen"
        component={WaitingForPaymentScreen}
        options={{
          tabBarLabel: 'Chờ thanh toán',
        }}
      /> */}
      <Tab.Screen
        name="Processing"
        component={ProcessingScreen}
        options={{
          tabBarLabel: 'Đang xử lý',
        }}
      />
      <Tab.Screen
        name="Transporting"
        component={TransportingScreen}
        options={{
          tabBarLabel: 'Đang vận chuyển',
        }}
      />
      <Tab.Screen
        name="Renting"
        component={RentingScreen}
        options={{
          tabBarLabel: 'Đang thuê',
        }}
      />
      <Tab.Screen
        name="Rented"
        component={RentedScreen}
        options={{
          tabBarLabel: 'Đã thuê',
        }}
      />
      <Tab.Screen
        name="Canceled"
        component={CanceledScreen}
        options={{
          tabBarLabel: 'Đã hủy',
        }}
      />
    </Tab.Navigator>
  );
}
