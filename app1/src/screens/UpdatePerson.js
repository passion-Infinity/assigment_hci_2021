import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Pressable,
  TextInput,
  Keyboard,
  Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function UpdatePerson({navigation}) {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const isShowPass = () => {
    setVisiblePassword(!visiblePassword);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={[styles.logo, {position: 'relative', left: 60}]}
            source={require('../assets/images/logo.png')}
          />
          <Text
            style={{
              fontSize: 20,
            }}>
            Cập nhật thông tin khách hàng
          </Text>
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.hoten}>Họ tên</Text>
            <View style={styles.input_wrapper}>
              <FontAwesome5
                style={styles.icon}
                name={'user-alt'}
                size={18}
                color={'#888'}
              />
              <TextInput
                style={styles.input_form}
                placeholder="Nguyen Van A"></TextInput>
            </View>
          </View>
          <View>
            <Text style={styles.hoten}>Địa chỉ</Text>
            <View style={styles.input_wrapper}>
              <FontAwesome5
                style={styles.icon}
                name={'user-alt'}
                size={18}
                color={'#888'}
              />
              <TextInput
                style={styles.input_form}
                placeholder="Đường Lạc hồng 12, TPHCM"></TextInput>
            </View>
          </View>
          <View>
            <Text style={styles.hoten}>Số điện thoại</Text>
            <View style={styles.input_wrapper}>
              <FontAwesome5
                style={styles.icon}
                name={'user-alt'}
                size={18}
                color={'#888'}
              />
              <TextInput
                style={styles.input_form}
                placeholder="086997863"></TextInput>
            </View>
          </View>
          <View>
            <Text style={styles.hoten}>Email</Text>
            <View style={styles.input_wrapper}>
              <FontAwesome5
                style={styles.icon}
                name={'user-alt'}
                size={18}
                color={'#888'}
              />
              <TextInput
                style={styles.input_form}
                placeholder="Hãy nhập email để trải nhiệm tốt hơn"></TextInput>
            </View>
          </View>
          <View
            style={{
              marginVertical: 10,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 16,
                  color: 'blue',
                  fontWeight: '500',
                  textDecorationLine: 'underline',
                }}>
                Đổi mật khẩu
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_wrapper}>
            <Pressable>
              <Text style={styles.button}>Cập nhật</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
  },
  shop_name: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#ff9800',
  },
  shop_cate: {
    fontSize: 18,
    color: '#ff9800',
    fontWeight: '300',
    marginLeft: 20,
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ff9800',
    marginTop: 20,
    marginLeft: 18,
  },
  login_title: {
    fontSize: 20,
    fontWeight: '400',
    color: '#ff9800',
  },
  content: {
    marginTop: 30,
  },
  input_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_form: {
    width: 350,
    height: 45,
    borderRadius: 50,
    paddingLeft: 48,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  icon: {
    position: 'absolute',
    top: 11,
    left: 15,
    zIndex: 5,
    elevation: 20,
  },
  control: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  control_left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button_wrapper: {
    marginTop: 16,
  },
  button: {
    width: 350,
    height: 45,
    borderRadius: 50,
    backgroundColor: '#ef6c00',
    textAlign: 'center',
    lineHeight: 45,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  social: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  social_icon: {
    backgroundColor: 'tomato',
    width: 35,
    height: 35,
    marginRight: 20,
    textAlign: 'center',
    lineHeight: 35,
    color: '#fff',
    fontSize: 28,
    fontWeight: '600',
    borderRadius: 50,
  },
  icon_fb: {
    backgroundColor: '#0d47a1',
  },
  hoten: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '600',
  },
});
