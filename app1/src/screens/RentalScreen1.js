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
  ScrollView,
  Modal,
} from 'react-native';
import {paypal, delivery} from '../models/paypal';
import Paypal from '../components/PaypalCard';
import CalendarsScreen from './Calendar';

export default function RentalScreen1({navigation, route}) {
  const itemData = route.params.itemData;
  const [checked, setChecked] = useState(0);
  const [checked1, setChecked1] = useState(0);
  const [calendarVisible, setCalendarVisible] = useState(false);

  const [rentedDate, setRentedDate] = useState('');
  const [returnedDate, setReturnedDate] = useState('');
  const [isRental, setIsRental] = useState(false);
  const [isReturn, setIsReturn] = useState(false);

  const handleRentedDate = val => {
    setRentedDate(val);
  };
  const handleReturnedDate = val => {
    setReturnedDate(val);
  };

  const closePopup = val => {
    setCalendarVisible(val);
  };

  const openPopup = () => {
    setCalendarVisible(true);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Modal
          animationType={'fade'}
          transparent
          visible={calendarVisible}
          onRequestClose={() => {
            setCalendarVisible(false);
          }}>
          <View style={styles.center_view}>
            <View style={styles.modal_calendar}>
              <CalendarsScreen
                handleRentedDate={handleRentedDate}
                handleReturnedDate={handleReturnedDate}
                closePopup={closePopup}
                isRental={isRental}
                isReturn={isReturn}
              />
            </View>
          </View>
        </Modal>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.header_icon}>
            <FontAwesome5 name="arrow-left" color="#fff" size={20} />
          </TouchableOpacity>
          <Text style={styles.header_title}>Xác nhận thông tin thuê</Text>
        </View>
        <ScrollView style={{width: '100%'}}>
          <View style={styles.body}>
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
            <View style={styles.form_date}>
              <View>
                <Text
                  style={{
                    marginBottom: 5,
                    fontSize: 14,
                    color: '#fff',
                    fontWeight: 'bold',
                    marginLeft: 5,
                  }}>
                  Ngày thuê
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setIsRental(true);
                    setIsReturn(false);
                    openPopup();
                  }}
                  activeOpacity={0.8}>
                  <View style={styles.date_item}>
                    <FontAwesome5 name="calendar-alt" color="#333" size={20} />
                    {rentedDate ? (
                      <Text>{rentedDate}</Text>
                    ) : (
                      <Text>Chọn thời gian</Text>
                    )}
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <Text
                  style={{
                    marginBottom: 5,
                    fontSize: 14,
                    color: '#fff',
                    fontWeight: 'bold',
                    marginLeft: 5,
                  }}>
                  Ngày trả
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setIsReturn(true);
                    setIsRental(false);
                    openPopup();
                  }}
                  activeOpacity={0.8}>
                  <View style={styles.date_item}>
                    <FontAwesome5 name="calendar-alt" color="#333" size={20} />
                    {returnedDate ? (
                      <Text>{returnedDate}</Text>
                    ) : (
                      <Text>Chọn thời gian</Text>
                    )}
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
                  {/* <View>
                    <View style={styles.control_quantity}>
                      <Text style={styles.btn_quantity}>-</Text>
                      <Text style={styles.quantity_text}>8</Text>
                      <Text style={styles.btn_quantity}>+</Text>
                    </View>
                  </View> */}
                </View>
              </View>
            </View>
            {/* <View style={styles.code_sale_wrapper}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  position: 'absolute',
                }}
                source={require('../assets/images/sale-tag.png')}
              />
              <TextInput
                style={styles.code_sale_input}
                placeholder="Mã khuyến mãi"
              />
              <TouchableOpacity style={styles.code_sale_btn}>
                <Text
                  style={{
                    fontWeight: '600',
                    color: '#fff',
                  }}>
                  Áp dụng
                </Text>
              </TouchableOpacity>
            </View> */}
            <View style={styles.paypal_wrapper}>
              <Text style={styles.paypal_title}>Chọn hình thức giao hàng</Text>
              <View style={styles.paypal_method}>
                {delivery.map((item, index) => {
                  return (
                    <View key={item.id}>
                      {checked1 === index ? (
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
                            setChecked1(index);
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
            <View style={styles.payment}>
              <View style={styles.payment_wrapper}>
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '600',
                    }}>
                    Tạm tính
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    marginRight: 8,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                    }}>
                    4.500.000đ
                  </Text>
                </View>
              </View>
              <View style={styles.payment_wrapper}>
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '600',
                    }}>
                    Phí vận chuyển
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    marginRight: 8,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                    }}>
                    100.000đ
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.btn_submit}
          onPress={() => {
            navigation.navigate('Confirm', {itemData: itemData});
          }}>
          <Text style={styles.btn_submit_text}>Thuê</Text>
        </TouchableOpacity>
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
    height: 80,
    backgroundColor: '#24afff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header_icon: {
    width: '20%',
    paddingLeft: 20,
  },
  header_title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '500',
  },
  body: {
    width: '100%',
    marginTop: 7,
    alignItems: 'center',
    paddingBottom: 50,
  },
  form_info: {
    width: '90%',
    height: 430,
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
    backgroundColor: '#db231d',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'relative',
    top: -10,
  },
  btn_submit_text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  payment: {
    backgroundColor: '#eee',
    marginTop: 35,
    paddingBottom: 20,
    paddingHorizontal: 8,
  },
  payment_wrapper: {
    width: '90%',
    flexDirection: 'row',
    marginTop: 15,
  },
  control_quantity: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  btn_quantity: {
    width: 35,
    height: 25,
    fontSize: 30,
    lineHeight: 30,
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
  code_sale_wrapper: {
    width: '90%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 3,
    marginTop: 30,
  },
  code_sale_input: {
    width: '65%',
    paddingLeft: 40,
    fontSize: 15,
    borderRadius: 3,
    fontWeight: '400',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  code_sale_btn: {
    marginLeft: 25,
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 5,
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
  form_date: {
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#9cd4ff',
    borderRadius: 10,
    paddingVertical: 15,
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
  modal_calendar: {
    width: 400,
    height: 450,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  center_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000099',
  },
  modal: {
    width: 380,
    height: 500,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});
