import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {color} from 'react-native-reanimated';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Confirm({navigation, route}) {
  const itemData = route.params.itemData;
  return (
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
        <Text
          style={{
            fontSize: 22,
            color: '#333',
            fontWeight: '900',
            marginLeft: 30,
          }}>
          Thanh toán
        </Text>
      </View>
      <ScrollView>
        <View style={styles.body}>
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
          <View style={styles.info_order}>
            <View
              style={{
                borderRadius: 10,
              }}>
              <Text style={styles.title}>Thông tin đơn hàng</Text>
            </View>
            <View style={styles.customer}>
              <Text style={styles.label}>Tên thiết bị: </Text>
              <Text style={styles.customer_value}>{itemData.title}</Text>
            </View>
            <View style={styles.customer}>
              <Text style={styles.label}>Số lượng: </Text>
              <Text style={styles.customer_value}>8</Text>
            </View>
            <View style={styles.customer}>
              <Text style={styles.label}>Tình trạng thiết bị: </Text>
              <Text style={styles.customer_value}>
                Bình thường, không trày xước
              </Text>
            </View>
            <View style={styles.customer}>
              <Text style={styles.label}>Phương thức thanh toán: </Text>
              <Text style={styles.customer_value}>
                Thanh toán khi nhận hàng
              </Text>
            </View>
            <View style={styles.customer}>
              <Text style={styles.label}>Hình thức giao hàng: </Text>
              <Text style={styles.customer_value}>Giao hàng tiết kiệm</Text>
            </View>
            <View style={styles.customer}>
              <Text style={styles.label}>Phí vận chuyển: </Text>
              <Text style={styles.customer_value}>100.000đ</Text>
            </View>
            {/* <View style={styles.customer}>
              <Text style={styles.label}>Áp dụng khuyến mãi: </Text>
              <Text style={styles.customer_value}>30%</Text>
            </View> */}
            <View style={styles.customer}>
              <Text style={styles.label}>Thời gian giao hàng: </Text>
              <Text style={styles.customer_value}>20/11/2021</Text>
            </View>
            <View style={styles.customer}>
              <Text style={styles.label}>Thời gian trả hàng: </Text>
              <Text style={styles.customer_value}>18/12/2021</Text>
            </View>
          </View>
          <View style={styles.note_wrapper}>
            <Text style={styles.note_title}>*Ghi chú:</Text>
            <Text>
              - Khách hàng vui lòng kiểm tra thiết bị trước khi nhận hàng
            </Text>
            <Text>
              - Khi trả hàng, tình trạng thiết bị phải giống như trong đơn hàng
            </Text>
            <Text>- Thời gian thuê cập nhật từ lúc nhận hàng</Text>
            <Text>
              - Khi hết thời gian thuê, nhân viên sẽ trực tiếp đến địa chỉ của
              khách hàng để lấy sản phẩm{' '}
            </Text>
            <Text>
              - Nếu máy bị hư hỏng hay không còn nguyên vẹn như ban đầu, lúc trả
              máy thì khách hàng có trách nhiệm bồi thường thiết bị theo quy
              định.
            </Text>
          </View>
          <View style={styles.submit_wrapper}>
            <View style={styles.row}>
              <Text style={styles.total_text}>Thành tiền</Text>
              <Text style={styles.total_price}>4.500.000đ</Text>
            </View>
            <View style={styles.btn_submit}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Success');
                }}>
                <Text style={styles.btn_submit_text}>Xác nhận thanh toán</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  header: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
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
  info_customer_wrapper: {
    marginTop: 10,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#aaa',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: '#4ab6f7',
    paddingLeft: 12,
    paddingVertical: 12,
    borderRadius: 3,
    color: '#fff',
  },
  customer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    paddingTop: 5,
    borderRadius: 3,
    paddingBottom: 5,
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
  info_order: {
    marginTop: 20,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#aaa',
  },
  note_wrapper: {
    marginTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    paddingVertical: 15,
  },
  note_title: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  submit_wrapper: {
    marginTop: 10,
    height: 120,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  total_text: {
    fontSize: 17,
  },
  total_price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  btn_submit: {
    width: '90%',
    height: 40,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  btn_submit_text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});
