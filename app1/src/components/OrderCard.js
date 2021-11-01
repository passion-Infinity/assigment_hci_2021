import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Star from './Star';

export default function OrderCard({data, navigation, isReturnedPage}) {
  const [show, setShow] = useState(false);
  const [reject, setReject] = useState(false);
  const rating = () => {
    setShow(true);
  };
  const cancel = () => {
    setReject(true);
  };
  const rentalAgain = () => {
    navigation.navigate('CardItemDetail', {itemData: data});
  };
  const returnScreen = () => {
    navigation.navigate('ReturnDeviceScreen', {itemData: data});
  };
  return (
    <View style={styles.order_card_wrapper}>
      <Modal
        animationType={'fade'}
        transparent
        visible={show}
        onRequestClose={() => {
          setShow(false);
        }}>
        <View style={styles.center_view}>
          <View style={styles.modal}>
            <Text
              style={{
                marginTop: 5,
                marginLeft: 10,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Đánh giá sản phẩm
            </Text>
            <View
              style={{
                position: 'relative',
                top: 20,
                left: 60,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setShow(false);
                }}>
                <Star ratings={4.5} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType={'fade'}
        transparent
        visible={reject}
        onRequestClose={() => {
          setReject(false);
        }}>
        <View style={styles.center_view}>
          <View style={styles.modal_1}>
            <View style={styles.modal_header}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#fff',
                  fontWeight: 'bold',
                }}>
                Bạn muốn hủy đơn hàng?
              </Text>
            </View>
            <View style={styles.modal_body}>
              <FontAwesome5
                style={{
                  position: 'relative',
                  top: 15,
                }}
                name="frown"
                color="red"
                size={45}
              />
              <View style={styles.modal_content}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 15,
                  }}>
                  Bạn có muốn cho chúng tôi biết lý do bạn muốn hủy đơn hàng là
                  gì?
                </Text>
                <TouchableOpacity activeOpacity={0.4}>
                  <Text
                    style={{
                      marginTop: 5,
                      color: 'blue',
                      textDecorationLine: 'underline',
                    }}>
                    Viết phản hồi
                  </Text>
                </TouchableOpacity>
              </View>
              {isReturnedPage ? null : (
                <View style={styles.button_wrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      setReject(false);
                    }}
                    activeOpacity={0.4}
                    style={[styles.button, styles.cancel]}>
                    <Text style={[styles.button_text, styles.cancel_text]}>
                      Đóng
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setReject(false);
                    }}
                    activeOpacity={0.4}
                    style={styles.button}>
                    <Text style={styles.button_text}>Xác nhận</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
      </Modal>
      {!isReturnedPage && (
        <View style={styles.top}>
          {/* <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: '#8e9194',
            lineHeight: 40,
            marginLeft: 12,
          }}>
          {data.orderStatusName}
        </Text> */}
          {data.orderStatusName == 'Đang thuê' ? (
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: 'green',
                lineHeight: 40,
                marginLeft: 12,
              }}>
              {data.orderStatusName}
            </Text>
          ) : (
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: '#8e9194',
                lineHeight: 40,
                marginLeft: 12,
              }}>
              {data.orderStatusName}
            </Text>
          )}
        </View>
      )}

      <View style={styles.content}>
        <View style={styles.image_wrapper}>
          <Image style={styles.image} source={data.orderImage} />
        </View>
        <View style={styles.info}>
          <Text numberOfLines={2} style={styles.name}>
            {data.orderName}
          </Text>
          <Text style={styles.quantity}>Số lượng: {data.orderQuantity}</Text>
          <Text style={styles.price}>Tổng tiền: {data.orderTotal}</Text>
          {isReturnedPage ? null : (
            <Text style={styles.time}>Thời gian: {data.orderTime} </Text>
          )}
          <View
            style={{
              width: 220,
              marginTop: 5,
            }}>
            {isReturnedPage ? null : (
              <Text style={styles.address}>
                Địa chỉ: Đường khánh bình 33, Uyên Hưng, Tân Uyên, Bình Dương{' '}
              </Text>
            )}
          </View>
        </View>
      </View>
      {isReturnedPage ? null : (
        <View style={styles.bottom}>
          {(data.orderStatus == 'da_thue' ||
            data.orderStatus == 'dang_thue') && (
            <TouchableOpacity
              onPress={rating}
              activeOpacity={0.4}
              style={styles.button}>
              <Text style={styles.button_text}>Đánh giá</Text>
            </TouchableOpacity>
          )}
          {data.orderStatus == 'dang_xu_ly' && (
            <TouchableOpacity
              onPress={cancel}
              activeOpacity={0.8}
              style={[styles.button, styles.cancel1]}>
              <Text style={[styles.button_text, styles.cancel_text]}>
                Hủy đơn
              </Text>
            </TouchableOpacity>
          )}
          {data.orderStatus == 'da_thue' && (
            <TouchableOpacity
              onPress={rentalAgain}
              activeOpacity={0.8}
              style={styles.button}>
              <Text style={[styles.button_text]}>Thuê lại</Text>
            </TouchableOpacity>
          )}
          {data.orderStatus == 'dang_thue' && (
            <TouchableOpacity
              onPress={returnScreen}
              activeOpacity={0.8}
              style={styles.button}>
              <Text style={[styles.button_text]}>Trả máy</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  order_card_wrapper: {
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 10,
  },
  top: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  content: {
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    marginTop: 15,
  },
  image_wrapper: {
    width: '40%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  info: {
    width: '56%',
    height: '100%',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  quantity: {
    marginTop: 3,
    fontSize: 15,
  },
  price: {
    marginTop: 3,
    fontSize: 15,
  },
  time: {
    marginTop: 3,
    fontSize: 14,
  },
  bottom: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 70,
    paddingBottom: 20,
    justifyContent: 'space-evenly',
  },
  button: {
    width: '45%',
    height: 40,
    borderWidth: 1,
    borderColor: '#106dc9',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_text: {
    color: '#106dc9',
  },
  cancel: {
    borderColor: '#c4141c',
  },
  cancel1: {
    width: '85%',
    borderColor: '#c4141c',
  },
  cancel_text: {
    color: '#c4141c',
  },
  modal: {
    width: 380,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  center_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000099',
  },
  button_wrapper: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 25,
    paddingBottom: 15,
    justifyContent: 'space-evenly',
  },
  modal_1: {
    width: 380,
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    borderRadius: 3,
  },
  modal_header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: 'red',
    borderRadius: 3,
  },
  modal_body: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal_content: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  address: {},
});
