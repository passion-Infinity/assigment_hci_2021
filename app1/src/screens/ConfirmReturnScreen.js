import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ConfirmReturnScreen({navigation}) {
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
          textAlign: 'center',
        }}>
        Yêu cầu trả máy trước thời hạn của quý khách đã được ghi nhận và đang
        chờ xét duyệt từ của hàng
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '500',
          marginTop: 15,
          textAlign: 'center',
        }}>
        Cảm ơn quý khác đã sử dụng dịch vụ của Forento
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home1');
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
    width: '93%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
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
