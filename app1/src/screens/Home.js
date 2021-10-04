import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {popularProducts} from '../models/products';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={{
          position: 'absolute',
          width: '100%',
          height: 200,
        }}
        source={require('../assets/images/bgheaderwave.jpg')}
      />
      <View style={styles.header}>
        <View style={styles.header_top}>
          <Pressable>
            <FontAwesome5 name={'list'} size={25} color={'#333'} />
          </Pressable>
          <Pressable>
            <FontAwesome5 name={'bell'} size={25} color={'#333'} />
          </Pressable>
        </View>
        <View style={styles.header_bottom}>
          <Text style={styles.header_title}>
            Sự hài lòng của quý khách là niềm vinh hạnh của chúng tôi.
          </Text>
        </View>
      </View>
      <View style={styles.main_content}>
        <View style={styles.search_wrapper}>
          <FontAwesome5
            style={styles.icon_search}
            name={'search'}
            size={20}
            color={'#777'}
          />
          <TextInput
            style={styles.search}
            placeholder="Tìm kiếm..."
            maxLength={300}
          />
        </View>
        <ScrollView>
          <View style={styles.event_wrapper}>
            <View style={styles.event_header}>
              <Image
                source={require('../assets/images/banner4.png')}
                resizeMode="cover"
                style={{
                  width: 380,
                  height: 180,
                  borderRadius: 20,
                  marginLeft: 6,
                }}
              />
            </View>
            <View style={styles.event_content}></View>
          </View>
          <View style={styles.category}>
            {/* <ScrollView horizontal> */}
            <View>
              <Text style={styles.product_title}>Bạn thuê máy cho việc?</Text>
              <View style={styles.category_content}>
                <View style={styles.category_wrapper}>
                  <View style={styles.category_item}>
                    <Pressable
                      onPress={() =>
                        navigation.navigate('CardItemList', {
                          title: 'Máy tính cho công việc thiết kế',
                          category: 'design',
                        })
                      }>
                      <Image
                        source={require('../assets/images/paint-palette64.png')}
                      />
                    </Pressable>
                  </View>
                  <Text style={styles.category_text}>Thiết kế</Text>
                </View>
                <View style={styles.category_wrapper}>
                  <View style={styles.category_item}>
                    <Pressable>
                      <Image
                        source={require('../assets/images/laptrinh64.png')}
                      />
                    </Pressable>
                  </View>
                  <Text style={styles.category_text}>Lập trình</Text>
                </View>
                <View style={styles.category_wrapper}>
                  <View style={styles.category_item}>
                    <Pressable
                      onPress={() =>
                        navigation.navigate('CardItemList', {
                          title: 'Máy tính cho việc học tập',
                          category: 'school',
                        })
                      }>
                      <Image
                        source={require('../assets/images/student64.png')}
                      />
                    </Pressable>
                  </View>
                  <Text style={styles.category_text}>Học tập</Text>
                </View>
                <View style={styles.category_wrapper}>
                  <View style={styles.category_item}>
                    <Pressable>
                      <Image source={require('../assets/images/game64.png')} />
                    </Pressable>
                  </View>
                  <Text style={styles.category_text}>Chơi game</Text>
                </View>
                <View style={styles.category_wrapper}>
                  <View style={styles.category_item}>
                    <Pressable>
                      <Image source={require('../assets/images/relax64.png')} />
                    </Pressable>
                  </View>
                  <Text style={styles.category_text}>Văn phòng</Text>
                </View>
                <View style={styles.category_wrapper}>
                  <View style={styles.category_item}>
                    <Pressable>
                      <Image
                        source={require('../assets/images/chuyennghiep64.png')}
                      />
                    </Pressable>
                  </View>
                  <Text style={styles.category_text}>Lập trình</Text>
                </View>
                <View style={styles.category_wrapper}>
                  <View style={styles.category_item}>
                    <Pressable>
                      <Image source={require('../assets/images/other32.png')} />
                    </Pressable>
                  </View>
                  <Text style={styles.category_text}>Khác</Text>
                </View>
              </View>
            </View>

            {/* </ScrollView> */}
          </View>

          {/* Hot product */}
          <View style={styles.product}>
            <Text style={styles.product_title}>Sản phẩm mới</Text>
            <View style={styles.hot_list}>
              {popularProducts.map((item, index) => {
                return (
                  <View style={styles.hot_item} key={index}>
                    <View style={styles.hot_item_top}>
                      <Text style={styles.hot_item_title}>{item.name}</Text>
                      <Text style={styles.hot_item_info}>New</Text>
                    </View>
                    <Text style={styles.hot_item_price}>{item.price}</Text>
                    <Image
                      source={item.image}
                      style={styles.hot_img}
                      resizeMode="contain"
                    />
                  </View>
                );
              })}
            </View>
          </View>

          {/* Popular product */}
          <View style={styles.product}>
            <Text style={styles.product_title}>Sản phẩm Nổi bật</Text>
            <ScrollView style={styles.popular_scro} horizontal>
              <View style={styles.popular_item}>
                <View popular_item_content>
                  <Text style={styles.popular_item_name}>
                    Macbook Pro max 2019
                  </Text>
                  <Text style={styles.popular_item_price}>
                    5.000.000 đ/tháng
                  </Text>
                  <Text style={styles.popular_item_sale}>
                    <FontAwesome5 name={'fire'} size={22} color="#ff5121" />
                    Giảm 20% khi thuê trong 6 tháng liên tiếp
                  </Text>
                </View>
                <Image
                  source={require('../assets/images/popular_product1.png')}
                  style={styles.popular_img}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.popular_item}>
                <View popular_item_content>
                  <Text style={styles.popular_item_name}>
                    Macbook Pro max 2019
                  </Text>
                  <Text style={styles.popular_item_price}>
                    5.000.000 đ/tháng
                  </Text>
                  <Text style={styles.popular_item_sale}>
                    <FontAwesome5 name={'fire'} size={22} color="#ff5121" />
                    Giảm 20% khi thuê trong 6 tháng liên tiếp
                  </Text>
                </View>
                <Image
                  source={require('../assets/images/popular_product1.png')}
                  style={styles.popular_img}
                  resizeMode="contain"
                />
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 15,
    paddingBottom: 100,
    paddingHorizontal: 15,
    backgroundColor: '#ffca28',
    // borderBottomLeftRadius: 60,
    // borderBottomRightRadius: 60,
    opacity: 0.9,
  },
  header_top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header_bottom: {
    width: '80%',
    marginTop: 20,
  },
  header_title: {
    fontSize: 25,
    color: '#333',
    fontWeight: '700',
    paddingLeft: 10,
  },
  main_content: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#eeeeee',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: 'relative',
    top: -50,
  },
  search_wrapper: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: -20,
  },
  icon_search: {
    position: 'absolute',
    zIndex: 2,
    top: 11,
    left: 55,
  },
  search: {
    width: '80%',
    height: 45,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingLeft: 45,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    backgroundColor: '#fff',
  },
  event_wrapper: {
    marginBottom: 20,
  },
  category: {
    paddingLeft: 10,
    backgroundColor: '#fff',
    paddingBottom: 15,
    borderRadius: 10,
  },
  category_content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  category_wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  category_item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#e0d0e0',
    marginRight: 25,
    marginTop: 20,
  },
  category_text: {
    marginRight: 20,
    marginTop: 3,
    fontWeight: '500',
  },
  product_title: {
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 30,
  },
  product: {
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingBottom: 30,
  },

  hot_list: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  hot_item: {
    width: 180,
    height: 270,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  hot_img: {
    width: 160,
    height: 160,
  },
  hot_item_top: {
    flexDirection: 'row',
  },
  hot_item_title: {
    flex: 3,
    marginLeft: 10,
    marginTop: 30,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  hot_item_info: {
    flex: 1,
    backgroundColor: '#fbc02d',
    height: 30,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 20,
    textAlign: 'center',
    paddingTop: 3,
  },
  hot_item_price: {
    fontSize: 16,
    fontWeight: '500',
    marginRight: 20,
    marginBottom: 15,
  },
  popular_item: {
    width: 360,
    height: 240,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginTop: 30,
    marginRight: 15,
    borderRadius: 10,
    borderBottomWidth: 6,
    borderLeftWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  popular_img: {
    flex: 2,
    width: 320,
    height: 160,
    marginTop: 40,
  },
  popular_item_name: {
    width: 150,
    fontSize: 20,
    fontWeight: '500',
    marginTop: 40,
    paddingLeft: 10,
    paddingRight: 15,
  },
  popular_item_price: {
    paddingLeft: 10,
    fontSize: 16,
    marginTop: 3,
  },
  popular_item_sale: {
    width: 150,
    paddingLeft: 10,
    color: '#999',
    fontSize: 18,
    marginTop: 10,
  },
  popular_scro: {
    paddingBottom: 10,
  },
});
