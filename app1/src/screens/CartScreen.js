import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {data} from '../models/data';
import {brand} from '../models/brand';
import {products} from '../models/products';
import Card from '../components/Card';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {priceSelection} from '../models/priceSelection';
import CalendarsScreen from './Calendar';

export default function CartScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_icon}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <FontAwesome5 name="times" color="#fff" size={30} />
          </TouchableOpacity>
        </View>
        <Text style={styles.header_title}>Giỏ hàng</Text>
      </View>
      <View style={styles.info}>
        <View style={styles.customer_header}>
          <View style={styles.customer_header_left}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
              }}>
              Địa chỉ nhận hàng
            </Text>
          </View>
          <View style={styles.customer_header_right}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('UpdatePerson');
              }}>
              <Text
                style={{
                  fontSize: 15,
                  textDecorationLine: 'underline',
                  color: '#247cff',
                }}>
                Thay đổi
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.customer_name_phone}>
          Nguyễn Văn An - 0378998462
        </Text>
        <View style={{width: '85%', marginTop: 5}}>
          <Text style={styles.customer_address}>
            Đường Khánh Bình 33, Uyên Hưng, Tân Uyên, Bình Dương
          </Text>
        </View>
      </View>
      <View style={styles.cart_card}>
        <View style={styles.cart_card_item}>
          <View style={styles.cart_card_item_image}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
              }}
              source={require('../assets/images/2.jpg')}
            />
          </View>
          <View style={styles.cart_card_item_content}>
            <View
              style={{
                position: 'absolute',
                top: 40,
                right: 20,
              }}>
              <FontAwesome5 name="times" color="#ddd" size={25} />
            </View>
            <View style={styles.cart_card_item_content_name}>
              <Text style={{fontWeight: '500', fontSize: 15}}>
                Razer 13.4" Razer Book Laptop (Mercury White)
              </Text>
            </View>
            <Text style={styles.cart_card_item_content_price}>
              89.000 đ/ngày
            </Text>
            <View style={styles.control_quantity}>
              <Text style={styles.btn_quantity}>-</Text>
              <Text style={styles.quantity_text}>2</Text>
              <Text style={styles.btn_quantity}>+</Text>
            </View>
          </View>
        </View>
        <View style={styles.cart_card_item}>
          <View style={styles.cart_card_item_image}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
              }}
              source={require('../assets/images/3.jpg')}
            />
          </View>
          <View style={styles.cart_card_item_content}>
            <View
              style={{
                position: 'absolute',
                top: 40,
                right: 20,
              }}>
              <FontAwesome5 name="times" color="#ddd" size={25} />
            </View>
            <View style={styles.cart_card_item_content_name}>
              <Text style={{fontWeight: '500', fontSize: 15}}>
                Razer 13.4" Razer Book Laptop (Mercury White)
              </Text>
            </View>
            <Text style={styles.cart_card_item_content_price}>
              100.000 đ/ngày
            </Text>
            <View style={styles.control_quantity}>
              <Text style={styles.btn_quantity}>-</Text>
              <Text style={styles.quantity_text}>2</Text>
              <Text style={styles.btn_quantity}>+</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('RentalScreen1', {itemData: products[0]});
        }}
        activeOpacity={0.4}
        style={styles.button}>
        <Text
          style={{
            fontSize: 16,
            color: '#fff',
            fontWeight: '500',
          }}>
          Tiến hành thuê
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#24afff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header_icon: {
    width: '40%',
    paddingLeft: 20,
  },
  header_title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '500',
  },
  info: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  customer_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  customer_name_phone: {
    fontSize: 15,
    fontWeight: '500',
    paddingHorizontal: 10,
  },
  customer_address: {
    fontSize: 15,
    paddingHorizontal: 10,
  },
  cart_card: {
    width: '100%',
  },
  cart_card_item: {
    width: '100%',
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderColor: '#aaa',
    paddingTop: 15,
  },
  cart_card_item_image: {
    width: '30%',
    height: 90,
  },
  cart_card_item_content: {
    width: '66%',
    marginLeft: 3,
    position: 'relative',
  },
  cart_card_item_content_price: {
    fontSize: 15,
    color: 'red',
    fontWeight: '600',
    marginTop: 5,
  },
  control_quantity: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  btn_quantity: {
    width: 35,
    height: 25,
    fontSize: 25,
    lineHeight: 27,
    textAlign: 'center',
    backgroundColor: '#ddd',
  },
  quantity_text: {
    width: 40,
    height: 25,
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'center',
    backgroundColor: '#eee',
  },
  button: {
    position: 'absolute',
    width: '85%',
    height: 45,
    color: '#fff',
    backgroundColor: '#db231d',
    top: 725,
    left: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
