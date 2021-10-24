import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native';

function GetStarted1({navigation}) {
  const handleSubmit = () => {
    navigation.navigate('HomeTabNavigation');
  };

  return (
    <View style={styles.container}>
      <View style={styles.image_wrapper}>
        <Image
          style={styles.image}
          source={require('../assets/images/gt2.jpg')}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Forento</Text>
        <Text style={styles.desc}>Dịch vụ thuê Laptop</Text>
      </View>
      <View style={styles.footer}>
        <Text>Chú trọng sản phẩm chất lượng &amp;</Text>
        <Text>Luôn đề cao sự hài lòng của khách hàng</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btn}
        onPress={handleSubmit}>
        <Text style={styles.btn_text}>Trang chủ</Text>
      </TouchableOpacity>
    </View>
  );
}

export default GetStarted1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececed',
    alignItems: 'center',
  },
  image_wrapper: {
    position: 'absolute',
    width: '100%',
    height: 300,
    opacity: 0.8,
    top: 200,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  header: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    top: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
  },
  desc: {
    fontWeight: '400',
    fontSize: 20,
  },
  footer: {
    position: 'relative',
    top: 500,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
  },
  btn: {
    position: 'relative',
    width: '88%',
    top: 560,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3483eb',
    paddingVertical: 10,
    borderRadius: 20,
  },
  btn_text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
