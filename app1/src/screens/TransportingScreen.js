import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import OrderCard from '../components/OrderCard';
import {allOrders} from '../models/order';

export default function TransportingScreen({navigation}) {
  const data = allOrders.filter(item => {
    return item.orderStatusName == 'Đang vận chuyển';
  });
  const renderItem = ({item}) => {
    return <OrderCard data={item} navigation={navigation} />;
  };

  return (
    <View style={styles.container}>
      {data.length ? (
        <FlatList data={data} renderItem={renderItem} />
      ) : (
        <View style={styles.content}>
          <View style={styles.image_wrapper}>
            <Image
              style={styles.image}
              source={require('../assets/images/robot256.png')}
            />
          </View>
          <Text style={styles.text}>Chưa có đơn hàng nào</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    paddingBottom: 90,
  },
  content: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_wrapper: {
    width: '30%',
    height: '30%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
  },
});
