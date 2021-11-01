import React from 'react';
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
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function RulesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>
          ĐIỀU KHOẢN VÀ ĐIỀU KIỆN CHO THUÊ LAPTOP
        </Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Khi nhận sản phẩm</Text>
        <View style={styles.content}>
          <Text style={styles.item}>
            - Kiểm tra tình trạng sản phẩm có giống như trong hợp đồng thuê, nếu
            không giống trong hợp đồng thì không nhận sản phẩm hoặc liên hệ cửa
            hàng
          </Text>
          <Text style={styles.item}>- Thanh toán đầy đủ khi nhận sản phẩm</Text>
        </View>
        <Text style={styles.title}>Khi đang thuê sản phẩm</Text>
        <View style={styles.content}>
          <Text style={styles.item}>
            - Không hoàn trả chi phí khi muốn dừng thuê hoặc trả máy khi chưa
            hết hạng hợp đồng
          </Text>
        </View>
        <Text style={styles.title}>Khi hết hạn hợp đồng</Text>
        <View style={styles.content}>
          <Text style={styles.item}>
            - Tất cả sản phẩm phải giống như tình trạng ban đầu trong hợp đồng
            thuê
          </Text>
          <Text style={styles.item}>
            - Nếu có hư hỏng, khách hàng có trách nhiệm bồi thường theo hợp đồng
            quy định
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  header_text: {
    fontSize: 25,
    fontWeight: '500',
    paddingTop: 15,
    textAlign: 'center',
  },
  body: {
    paddingHorizontal: 8,
    paddingTop: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    paddingLeft: 12,
    marginBottom: 15,
  },
  item: {
    marginTop: 4,
  },
});
