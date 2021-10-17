import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  Image,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Login({navigation}) {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [check, setCheck] = useState(false);
  const isShowPass = () => {
    setVisiblePassword(!visiblePassword);
  };
  const isCheck = () => {
    setCheck(!check);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={[styles.logo, {position: 'relative', left: 20}]}
            source={require('../assets/images/logo.png')}
          />
          <Text style={styles.shop_name}>Forento's</Text>
          <Text style={styles.shop_cate}>Dịch vụ cho thuê</Text>
          <Text style={styles.welcome}>Chào mừng!</Text>
          <Text style={styles.login_title}>Đăng nhập để tiếp tục</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.input_wrapper}>
            <FontAwesome5
              style={styles.icon}
              name={'user-alt'}
              size={18}
              color={'#888'}
            />
            <TextInput
              style={styles.input_form}
              placeholder="Tên đăng nhập"></TextInput>
          </View>
          <View style={styles.input_wrapper}>
            <FontAwesome5
              style={styles.icon}
              name={'lock'}
              size={18}
              color={'#888'}
            />
            <FontAwesome5
              style={{
                position: 'absolute',
                right: 18,
                top: 11,
                zIndex: 5,
                elevation: 20,
              }}
              onPress={isShowPass}
              name={visiblePassword ? 'eye' : 'eye-slash'}
              color={'#888'}
              size={18}
            />
            <TextInput
              secureTextEntry={!visiblePassword}
              style={styles.input_form}
              placeholder="Mặt khẩu"></TextInput>
          </View>
          <View style={styles.control}>
            <View style={styles.control_left}>
              <FontAwesome5
                style={{
                  marginRight: 8,
                }}
                onPress={isCheck}
                name={check ? 'check-square' : 'square'}
                size={20}
                color={check ? '#000' : '#999'}
              />
              <Text
                style={{
                  fontWeight: '400',
                  color: '#999',
                }}>
                Duy trì đăng nhập
              </Text>
            </View>
            <View style={styles.control_right}>
              <Text
                style={{
                  color: '#ff9800',
                  fontWeight: '500',
                }}>
                Quên mặt khẩu
              </Text>
            </View>
          </View>
          <View style={styles.button_wrapper}>
            <Pressable>
              <Text style={styles.button}>Đăng nhập</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.footer}>
          <Text
            style={{
              color: '#ff9800',
              fontSize: 16,
              fontWeight: '700',
              marginRight: 8,
            }}>
            Người dùng mới?
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text
              style={{
                color: '#ff9800',
                fontSize: 16,
                fontWeight: '700',
              }}>
              Đăng ký
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.social}>
          <Text style={[styles.social_icon, styles.icon_fb]}>f</Text>
          <Image source={require('../assets/images/google32.png')} />
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
    marginTop: 20,
    marginBottom: 10,
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
    marginTop: 30,
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
    marginTop: 30,
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
});
