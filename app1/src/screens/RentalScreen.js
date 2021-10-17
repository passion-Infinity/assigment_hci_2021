import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
} from 'react-native';
import {paypal} from '../models/paypal';
import Paypal from '../components/PaypalCard';

export default function RentalScreen({navigation, route}) {
  const itemData = route.params.itemData;
  const [checked, setChecked] = useState(0);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <View style={styles.btn_back}>
              <FontAwesome5 name="chevron-left" color="#333" size={20} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <View style={styles.form_info}>
            <View style={styles.form_info_top}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: '600',
                  color: '#fff',
                }}>
                Nhập thông tin thuê
              </Text>
              <View style={styles.form_info_header_icon}>
                <FontAwesome5 name="hourglass-half" color="#000" size={20} />
              </View>
            </View>
            <View style={styles.form_input}>
              <TextInput
                style={styles.input}
                placeholder="Địa chỉ khách hàng"
              />
            </View>
            <View style={styles.form_input}>
              <TextInput style={styles.input} placeholder="Số điện thoại" />
            </View>
            <View style={styles.form_date}>
              <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.date_item}>
                  <FontAwesome5 name="calendar-alt" color="#333" size={20} />
                  <Text>Ngày thuê</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.date_item}>
                  <FontAwesome5 name="calendar-alt" color="#333" size={20} />
                  <Text>Ngày trả</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.product_info}>
            <Text style={styles.product_info_title}>Thông tin sản phẩm</Text>
            <View style={styles.product}>
              <View style={styles.image_wrapper}>
                <Image style={styles.image} source={itemData.image} />
              </View>
              <View style={styles.product_item}>
                <Text style={styles.name}>{itemData.title}</Text>
                <Text style={styles.price}>{itemData.price}</Text>
              </View>
            </View>
          </View>
          <View style={styles.paypal_wrapper}>
            <Text style={styles.paypal_title}>Phương thức thanh toán</Text>
            <View style={styles.paypal_method}>
              {paypal.map((item, index) => {
                return (
                  <View key={item.id}>
                    {checked === index ? (
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.btn_radio}>
                        <Image
                          style={styles.img_radio}
                          source={require('../assets/images/radio_checked.png')}
                        />
                        <Text style={styles.text_radio}>{item.name}</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.btn_radio}
                        onPress={() => {
                          setChecked(index);
                        }}>
                        <Image
                          style={styles.img_radio}
                          source={require('../assets/images/radio_unchecked.png')}
                        />
                        <Text style={styles.text_radio}>{item.name}</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                );
              })}
            </View>
          </View>
          {checked ? (
            <View style={{width: '100%', height: 55}}></View>
          ) : (
            <Paypal />
          )}
          <View style={styles.btn_submit}>
            <TouchableOpacity>
              <Text style={styles.btn_submit_text}>Tiến hành thanh toán</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  btn_back: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  body: {
    width: '100%',
    marginTop: 7,
    alignItems: 'center',
  },
  form_info: {
    width: '90%',
    height: 300,
    backgroundColor: '#b05cff',
    borderRadius: 20,
    alignItems: 'center',
  },
  form_info_top: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  form_info_header_icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form_input: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 18,
    paddingLeft: 15,
    fontSize: 16,
  },
  form_date: {
    width: '80%',
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date_item: {
    width: 120,
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 17,
  },
  product_info: {
    width: '90%',
    marginTop: 20,
  },
  image_wrapper: {
    width: '32%',
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  product: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  product_item: {
    width: '65%',
    marginLeft: 10,
  },
  product_info_title: {
    marginBottom: 12,
    fontSize: 18,
    fontWeight: '600',
  },
  name: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 5,
  },
  price: {
    color: 'red',
    fontWeight: '500',
    fontSize: 15,
  },
  btn_radio: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3,
  },
  img_radio: {
    width: 13,
    height: 13,
    resizeMode: 'contain',
    marginRight: 10,
  },
  text_radio: {
    fontSize: 16,
    fontWeight: '300',
  },
  paypal_wrapper: {
    marginTop: 25,
    width: '90%',
  },
  paypal_title: {
    marginBottom: 12,
    fontSize: 17,
    fontWeight: '600',
  },
  btn_submit: {
    width: '90%',
    height: 40,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'absolute',
    bottom: -70,
  },
  btn_submit_text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});
