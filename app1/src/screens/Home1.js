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

export default function Home1({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_left}>
          <View style={styles.header_left_icon}>
            <FontAwesome5 name="user" color="#3968e3" size={20} />
          </View>
        </View>
        <View style={styles.header_rigth}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '300',
              color: '#fff',
              fontWeight: '400',
            }}>
            Xin chào, Quý khách
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: '#fff',
            }}>
            Dịch vụ thuê laptop Forento
          </Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.rules}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RulesScreen');
            }}
            activeOpacity={0.4}
            style={[
              styles.rules_card,
              {
                backgroundColor: '#2873d4',
              },
            ]}>
            <View style={styles.rules_card_icon}>
              <FontAwesome5 name="book" color="#2873d4" size={20} />
            </View>
            <Text style={styles.rules_card_name}>Quy định thuê sản phẩm</Text>
          </TouchableOpacity>
          <View
            style={[
              styles.rules_card,
              {
                backgroundColor: '#29c48b',
              },
            ]}>
            <View style={styles.rules_card_icon}>
              <FontAwesome5 name="store" color="#29c48b" size={20} />
            </View>
            <Text style={styles.rules_card_name}>Thông tin cửa hàng</Text>
          </View>
          <View
            style={[
              styles.rules_card,
              {
                backgroundColor: '#f75252',
              },
            ]}>
            <View style={styles.rules_card_icon}>
              <FontAwesome5 name="phone-volume" color="#f75252" size={25} />
            </View>
            <Text style={styles.rules_card_name}>Tư vấn trực tuyến</Text>
          </View>
        </View>
        <View style={styles.purpose}>
          <View style={styles.purpose_title_wrapper}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
              }}>
              Bạn thuê máy cho việc?
            </Text>
          </View>
          <View style={styles.purpose_card}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CardItemList', {
                  title: 'Học tập, công việc văn phòng',
                  category: 'school',
                })
              }
              activeOpacity={0.4}
              style={styles.purpose_item}>
              <View style={styles.purpose_item_icon}>
                <FontAwesome5 name="graduation-cap" color="#3968e3" size={25} />
              </View>
              <View style={styles.purpose_item_title}>
                <Text style={styles.purpose_item_text}>
                  Học tập, công việc văn phòng
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CardItemList', {
                  title: 'Thiết kế đồ họa, chỉnh sửa video',
                  category: 'design',
                })
              }
              activeOpacity={0.4}
              style={styles.purpose_item}>
              <View style={styles.purpose_item_icon}>
                <FontAwesome5 name="paint-brush" color="#3968e3" size={25} />
              </View>
              <View style={styles.purpose_item_title}>
                <Text style={styles.purpose_item_text}>
                  Thiết kế đồ họa, chỉnh sửa video
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CardItemList', {
                  title: 'Lập trình phần mềm',
                  category: 'school',
                })
              }
              activeOpacity={0.4}
              style={styles.purpose_item}>
              <View style={styles.purpose_item_icon}>
                <FontAwesome5 name="layer-group" color="#3968e3" size={25} />
              </View>
              <View style={styles.purpose_item_title}>
                <Text style={styles.purpose_item_text}>Lập trình phần mềm</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CardItemList', {
                  title: 'Làm server, máy chủ',
                  category: 'design',
                })
              }
              activeOpacity={0.4}
              style={styles.purpose_item}>
              <View style={styles.purpose_item_icon}>
                <FontAwesome5 name="server" color="#3968e3" size={25} />
              </View>
              <View style={styles.purpose_item_title}>
                <Text style={styles.purpose_item_text}>
                  Làm server, máy chủ
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CardItemList', {
                  title: 'Làm server, máy chủ',
                  category: 'design',
                })
              }
              activeOpacity={0.4}
              style={styles.purpose_item}>
              <View style={styles.purpose_item_icon}>
                <FontAwesome5 name="gamepad" color="#3968e3" size={25} />
              </View>
              <View style={styles.purpose_item_title}>
                <Text style={styles.purpose_item_text}>Chơi game</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    paddingTop: 15,
    alignItems: 'center',
    backgroundColor: '#24afff',
    alignItems: 'center',
    paddingBottom: 20,
  },
  header_left: {
    width: '22%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_left_icon: {
    width: '55%',
    height: '100%',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  body: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  rules: {
    width: '95%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  rules_card: {
    width: 110,
    height: 150,

    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  rules_card_icon: {
    width: '48%',
    height: '35%',
    borderWidth: 0.5,
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  rules_card_name: {
    paddingHorizontal: 10,
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
  purpose: {
    width: '100%',
    alignItems: 'center',
    marginTop: 25,
  },
  purpose_title_wrapper: {
    width: '90%',
  },
  purpose_card: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  purpose_item: {
    width: '90%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#ece8fc',
    backgroundColor: '#e8edfa',
    borderRadius: 5,
    paddingLeft: 15,
    marginTop: 20,
    borderWidth: 0.3,
  },
  purpose_item_text: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
    marginLeft: 20,
  },
});
