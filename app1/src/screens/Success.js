import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const online = 'Thanh toán online thành công';
const offline = 'Đơn hàng của quý khách đang được xử lý';

export default function Success({navigation, route}) {
  const method = route.params.method;
  return (
    <View style={styles.container}>
      <View style={styles.icon_wrapper}>
        <FontAwesome5 name="check" color="green" size={40} />
      </View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '500',
          marginTop: 15,
        }}>
        {method === 'online' ? online : offline}
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('HomeTabNavigation');
        }}
        activeOpacity={0.8}
        style={styles.btn}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: '#fff',
          }}>
          Quay về trang chủ
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon_wrapper: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'green',
  },
  btn: {
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#34eba1',
    marginTop: 30,
    borderRadius: 5,
  },
});
