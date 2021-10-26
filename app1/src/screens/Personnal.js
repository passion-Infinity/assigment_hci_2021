import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Personnal({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={{
          position: 'absolute',
          width: '100%',
          height: 160,
        }}
        source={require('../assets/images/bgheaderstart.jpg')}
      />
      <View style={styles.header}>
        <View style={styles.name}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '600',
            }}>
            Bạn chưa đăng nhập
          </Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Pressable
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={{marginRight: 5, color: 'red', fontWeight: 'bold'}}>
                Đăng nhập
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('Register');
              }}>
              <Text style={{color: '#000', fontWeight: '600'}}>
                {' '}
                / Tạo tài khoản
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.profile_wrapper}>
          <Image
            source={require('../assets/images/profile.jpg')}
            resizeMode="contain"
            style={{
              width: '80%',
              height: '80%',
              borderRadius: 1000,
            }}
          />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.my_order_wrapper}>
          <View style={styles.my_order_top}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '400',
              }}>
              Đơn hàng của tôi
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HistoryTabNavigation');
              }}
              activeOpacity={0.4}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#0091cc',
                }}>
                Xem lịch sử
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.my_order_bottom}>
            <View style={styles.order_status}>
              <Text style={styles.text_icon}>
                <FontAwesome5 name={'receipt'} color={''} size={20} />
              </Text>
              <Text style={styles.text_content}>Chờ thanh toán</Text>
            </View>
            <View style={styles.order_status}>
              <Text style={styles.text_icon}>
                <FontAwesome5 name={'dolly'} color={''} size={20} />
              </Text>
              <Text style={styles.text_content}>Đang xử lý</Text>
            </View>
            <View style={styles.order_status}>
              <Text style={styles.text_icon}>
                <FontAwesome5 name={'truck-moving'} color={''} size={20} />
              </Text>
              <Text style={styles.text_content}>Đang vận chuyển</Text>
            </View>
            <View style={styles.order_status}>
              <Text style={styles.text_icon}>
                <FontAwesome5 name={'book-reader'} color={''} size={20} />
              </Text>
              <Text style={styles.text_content}>Chờ đánh giá</Text>
            </View>
          </View>
        </View>
        <View style={styles.my_action}>
          <View style={styles.my_action_item}>
            <View style={styles.my_action_item_left}>
              <FontAwesome5 name={'gem'} color={'#039be5'} size={20} />
              <Text
                style={{
                  marginLeft: 10,
                  fontWeight: '500',
                  fontSize: 16,
                }}>
                Tích lũy
              </Text>
            </View>
            <FontAwesome5 name={'chevron-right'} size={20} color="#888" />
          </View>
          <View style={styles.my_action_item}>
            <View style={styles.my_action_item_left}>
              <FontAwesome5 name={'star'} color="gold" size={20} />
              <Text
                style={{
                  marginLeft: 10,
                  fontWeight: '500',
                  fontSize: 16,
                }}>
                Đánh giá sản phẩm
              </Text>
            </View>
            <FontAwesome5 name={'chevron-right'} size={20} color={'#888'} />
          </View>
          <View style={styles.my_action_item}>
            <View style={styles.my_action_item_left}>
              <FontAwesome5
                name={'cart-arrow-down'}
                color={'#039be5'}
                size={20}
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('HistoryTabNavigation');
                }}
                activeOpacity={0.4}>
                <Text
                  style={{
                    marginLeft: 10,
                    fontWeight: '500',
                    fontSize: 16,
                  }}>
                  Lịch sử thuê sản phẩm
                </Text>
              </TouchableOpacity>
            </View>
            <FontAwesome5 name={'chevron-right'} size={20} color={'#888'} />
          </View>
        </View>
        <View style={styles.my_info}>
          <View style={styles.my_action_item}>
            <View style={styles.my_action_item_left}>
              <FontAwesome5 name={'user'} color={'#039be5'} size={20} />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('UpdatePerson');
                }}>
                <Text
                  style={{
                    marginLeft: 10,
                    fontWeight: '500',
                    fontSize: 16,
                  }}>
                  Cập nhật thông tin cá nhân
                </Text>
              </TouchableOpacity>
            </View>
            <FontAwesome5 name={'chevron-right'} size={20} color={'#888'} />
          </View>
          {/* <View style={styles.my_action_item}>
            <View style={styles.my_action_item_left}>
              <FontAwesome5 name={'sign-out-alt'} color={'#039be5'} size={20} />
              <Text
                style={{
                  marginLeft: 10,
                  fontWeight: '500',
                  fontSize: 16,
                }}>
                Đăng xuất
              </Text>
            </View>
            <FontAwesome5 name={'chevron-right'} size={20} color={'#888'} />
          </View> */}
          <View style={styles.my_action_item}>
            <View style={styles.my_action_item_left}>
              <FontAwesome5 name={'cog'} color={'#039be5'} size={20} />
              <Text
                style={{
                  marginLeft: 10,
                  fontWeight: '500',
                  fontSize: 16,
                }}>
                Cài đặt
              </Text>
            </View>
            <FontAwesome5 name={'chevron-right'} size={20} color={'#888'} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 180,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffca28',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    opacity: 0.85,
  },
  name: {
    width: '70%',
    paddingLeft: 10,
  },
  profile_wrapper: {
    width: '30%',
    paddingLeft: 20,
  },
  my_order_wrapper: {
    backgroundColor: '#fff',
    paddingBottom: 15,
  },
  my_order_top: {
    marginTop: 30,
    marginBottom: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  my_order_bottom: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-around',
  },
  order_status: {
    width: 80,
    textAlign: 'center',
  },
  text_icon: {
    width: 50,
    height: 50,
    backgroundColor: '#e3f2fd',
    textAlign: 'center',
    lineHeight: 50,
    borderRadius: 100,
    color: '#039be5',
    position: 'relative',
    left: 14,
  },
  text_content: {
    maxWidth: 70,
    textAlign: 'center',
    position: 'relative',
    left: 5,
  },
  my_action: {
    marginTop: 15,
  },
  my_action_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  my_action_item_left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  my_info: {
    marginTop: 20,
  },
});
