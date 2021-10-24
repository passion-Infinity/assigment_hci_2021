import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import OrderCard from '../components/OrderCard';
import {allOrders} from '../models/order';

export default function AllOrdersScreen({navigation}) {
  const renderItem = ({item}) => {
    return <OrderCard data={item} navigation={navigation} />;
  };

  return (
    <View style={styles.container}>
      <FlatList data={allOrders} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    paddingBottom: 90,
  },
});
