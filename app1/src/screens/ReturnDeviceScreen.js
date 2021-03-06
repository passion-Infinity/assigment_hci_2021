import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Modal,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import OrderCard from '../components/OrderCard';
import CalendarsScreen from './Calendar';
import {allOrders} from '../models/order';

export default function ReturnDeviceScreen({route, navigation}) {
  const data = route.params.itemData;
  const data1 = allOrders[3];
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [date, setDate] = useState('');
  const handleDate = val => {
    setDate(val);
  };

  const closePopup = val => {
    setCalendarVisible(val);
  };

  const [reject, setReject] = useState(false);

  console.log(date);

  return (
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
            <CalendarsScreen handleDate={handleDate} closePopup={closePopup} />
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
                Bạn muốn trả máy trước thời hạn?
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
                  Bạn thực sự muốn trả máy trước thời hạn?
                </Text>
              </View>

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
                    navigation.navigate('ConfirmReturn');
                  }}
                  activeOpacity={0.4}
                  style={styles.button}>
                  <Text style={styles.button_text}>Xác nhận</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.header_icon}>
          <FontAwesome5 name="arrow-left" color="#fff" size={20} />
        </TouchableOpacity>
        <Text style={styles.header_title}>Xác nhận trả máy trước thời hạn</Text>
      </View>
      <ScrollView>
        <View style={styles.body}>
          {/* <View style={styles.order}>
          <View style={styles.order_title}>
            <Text style={styles.order_title_text}>Đơn hàng</Text>
          </View>
          <View style={styles.order_item}>
            <View style={styles.order_item_title}>
              <Text></Text>
            </View>
            <View style={styles.order_item_content}>
              <View style={styles.order_item_content_image}>
                <Image />
              </View>
              <View style={styles.order_item_content_info}>
                <Text style={styles.order_item_content_info_name}></Text>
                <Text style={styles.order_item_content_info_name}></Text>
                <Text style={styles.order_item_content_info_name}></Text>
              </View>
            </View>
          </View>
        </View> */}
          <View style={styles.info_customer_wrapper}>
            <View
              style={{
                borderRadius: 10,
              }}>
              <Text style={styles.title}>Thông tin khách hàng</Text>
            </View>
            <View style={styles.customer}>
              <Text style={styles.label}>Khách hàng: </Text>
              <Text style={styles.customer_value}>Nguyễn Văn A</Text>
            </View>
            <View style={styles.customer}>
              <Text style={styles.label}>Địa chỉ nhận hàng: </Text>
              <Text style={styles.customer_value}>
                Tổ 4 khu 8, phường Uyên hưng, thị xã Tân Uyên, Bình Dương
              </Text>
            </View>
            <View style={styles.customer}>
              <Text style={styles.label}>Số điện thoại: </Text>
              <Text style={styles.customer_value}>0123456789</Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              marginTop: 15,
            }}>
            <Text style={styles.title}>Đơn hàng</Text>
            <Text
              style={{
                paddingLeft: 20,
                fontSize: 15,
                color: 'red',
              }}>
              Tình trạng: đang thuê
            </Text>
            <Text
              style={{
                paddingLeft: 20,
                fontSize: 15,
                marginTop: 3,
              }}>
              Thời gian thuê: 10/11/2021 - 10/12/201
            </Text>
          </View>
          <OrderCard
            data={data}
            isReturnedPage={true}
            navigation={navigation}
          />
          <OrderCard
            data={data1}
            isReturnedPage={true}
            navigation={navigation}
          />
          <View style={styles.form_date}>
            <View style={styles.form_date_item}>
              <Text style={styles.form_date_item_title}>Thời gian trả:</Text>
              <TouchableOpacity
                onPress={() => {
                  setCalendarVisible(true);
                }}
                activeOpacity={0.8}>
                <View style={styles.form_date_item_select}>
                  <FontAwesome5 name="calendar-alt" color="#333" size={20} />
                  {date ? (
                    <Text style={{marginLeft: 5}}>{date}</Text>
                  ) : (
                    <Text style={{marginLeft: 5}}>Chọn thời gian</Text>
                  )}
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.feedback}>
            <View style={styles.feedback_title}>
              <Text style={styles.feedback_title_text}>Phản hồi</Text>
            </View>
            <View style={styles.feedback_content}>
              <TextInput
                style={styles.feedback_content_input}
                placeholder="Lý do bạn trả máy trước thời hạn?"
              />
            </View>
          </View>
          <View style={styles.note}>
            <View style={styles.note_title}>
              <Text style={styles.note_title_text}>Lưu ý:</Text>
            </View>
            <View style={styles.note_content}>
              <Text>
                Khách hàng sẽ không được hoàn lại tiền khi trả máy trước thời
                hạn
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              setReject(true);
            }}
            activeOpacity={0.4}
            style={styles.btn_submit}>
            <Text style={styles.btn_submit_text}>Xác nhận trả</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
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
    width: '15%',
    paddingLeft: 20,
  },
  header_title: {
    width: '70%',
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
  order: {
    width: '100%',
  },
  customer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    paddingTop: 5,
    borderRadius: 3,
    paddingBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 12,
    paddingVertical: 12,
    borderRadius: 3,
    color: '#000',
  },
  label: {
    fontSize: 15,
    marginRight: 8,
    width: '35%',
  },
  customer_value: {
    width: '60%',
    marginBottom: 8,
    fontSize: 15,
    fontWeight: '600',
  },
  form_date: {
    width: '90%',
    height: 60,
    marginTop: 30,
    backgroundColor: '#24afff',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 20,
  },
  form_date_item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  form_date_item_title: {
    marginRight: 20,
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  form_date_item_select: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  feedback: {
    width: '100%',
    marginTop: 20,
    paddingLeft: 20,
  },
  feedback_title: {},
  feedback_title_text: {
    fontSize: 16,
    fontWeight: '600',
  },
  feedback_content: {
    marginTop: 10,
    width: '90%',
    height: 80,
    borderWidth: 0.5,
    paddingLeft: 10,
    borderRadius: 5,
  },
  btn_submit: {
    width: '90%',
    height: 40,
    backgroundColor: '#db231d',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 30,
  },
  btn_submit_text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
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
  note: {
    width: '95%',
    marginTop: 15,
  },
  note_title: {
    marginBottom: 3,
  },
  note_title_text: {
    color: 'red',
    fontSize: 16,
    fontWeight: '600',
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
});
