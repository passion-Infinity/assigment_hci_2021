import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
} from 'react-native';
import {data} from '../models/data';
import {brand} from '../models/brand';
import {products} from '../models/products';
import Card from '../components/Card';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {priceSelection} from '../models/priceSelection';
import CalendarsScreen from './Calendar';

export default function CardItemList({navigation, route}) {
  const category = route.params.category;
  const dataFilter = products.filter(value => value.category === category);
  const renderItem = ({item}) => {
    return (
      <Card
        itemData={item}
        onPress={() => navigation.navigate('CardItemDetail', {itemData: item})}
      />
    );
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [isSelectedPrice, setIsSelectedPrice] = useState(0);

  return (
    <View style={styles.container}>
      <Modal
        animationType={'fade'}
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.center_view}>
          <View style={styles.modal}>
            <View style={styles.body}>
              <View style={styles.filter_price}>
                <Text style={styles.filter_title}>Price monthly</Text>
                <View style={styles.filter_price_list}>
                  {priceSelection.map((item, index) => {
                    return (
                      <View key={item.id}>
                        {isSelectedPrice === index ? (
                          <Pressable
                            onPress={() => {
                              setIsSelectedPrice(index);
                            }}>
                            <Text
                              style={[
                                styles.filter_price_item,
                                styles.filter_price_item_active,
                              ]}>
                              {item.label}
                            </Text>
                          </Pressable>
                        ) : (
                          <Pressable
                            onPress={() => {
                              setIsSelectedPrice(index);
                            }}>
                            <Text style={[styles.filter_price_item]}>
                              {item.label}
                            </Text>
                          </Pressable>
                        )}
                      </View>
                    );
                  })}
                </View>
              </View>
              <View style={styles.filter_day}>
                <Text style={styles.filter_title}>Date options</Text>
                <View style={styles.filter_day_wrapper}>
                  <Text style={styles.filter_day_label}>From date:</Text>
                  <TextInput
                    maxLength={10}
                    style={styles.filter_day_input}
                    placeholder="dd/MM/yyyy"
                  />
                  <Pressable
                    onPress={() => {
                      setCalendarVisible(true);
                    }}>
                    <Text style={styles.filter_open_calendar}>
                      Open calendar
                    </Text>
                  </Pressable>
                </View>
                <View style={styles.filter_day_wrapper}>
                  <Text style={styles.filter_day_label}>To date:</Text>
                  <TextInput
                    maxLength={10}
                    style={styles.filter_day_input}
                    placeholder="dd/MM/yyyy"
                  />
                  <Pressable
                    onPress={() => {
                      setCalendarVisible(true);
                    }}>
                    <Text style={styles.filter_open_calendar}>
                      Open calendar
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
            <View style={styles.btn}>
              <Pressable
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Text style={[styles.btn_action, styles.btn_cancel]}>
                  Cancel
                </Text>
              </Pressable>
              <Pressable>
                <Text style={[styles.btn_action, styles.btn_apply]}>Aply</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType={'fade'}
        transparent
        visible={calendarVisible}
        onRequestClose={() => {
          setCalendarVisible(false);
        }}>
        <View style={styles.center_view}>
          <View style={styles.modal_calendar}>
            <CalendarsScreen />
            <View style={styles.btn}>
              <Pressable
                onPress={() => {
                  setCalendarVisible(false);
                }}>
                <Text style={[styles.btn_action, styles.btn_cancel]}>
                  Cancel
                </Text>
              </Pressable>
              <Pressable>
                <Text style={[styles.btn_action, styles.btn_apply]}>Aply</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.header_card}>
        <View style={styles.header_card_top}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <FontAwesome5 name={'chevron-left'} size={25} color="#999" />
          </Pressable>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              marginLeft: 20,
              color: '#333',
            }}>
            Chọn thiết bị
          </Text>
        </View>
        <FontAwesome5 name={'search'} size={22} color="#999" />
      </View>
      <View style={styles.category}>
        <Text style={styles.title}>Nhãn hiệu</Text>
        <View style={styles.brand_list}>
          <FlatList
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={brand}
            renderItem={({item}) => (
              <View style={styles.brand_item}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#999',
                    textAlign: 'center',
                  }}>
                  {item.name}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
      <View style={styles.filter}>
        <Text style={styles.title}>Thiết bị khả dụng</Text>
        <Pressable
          onPress={() => {
            setModalVisible(true);
          }}>
          <FontAwesome5 name={'filter'} size={20} color={'#333'} />
        </Pressable>
      </View>
      <View style={styles.body}>
        <FlatList
          data={dataFilter}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  header_card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  header_card_top: {
    flexDirection: 'row',
  },
  category: {
    paddingLeft: 10,
    paddingBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  brand_item: {
    width: 90,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    borderWidth: 1,
    borderBottomWidth: 3,
    borderColor: '#ddd',
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 25,
    paddingLeft: 10,
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
  body: {
    flex: 3,
    paddingHorizontal: 20,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15,
    paddingBottom: 20,
  },
  btn_action: {
    width: 90,
    textAlign: 'center',
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  btn_apply: {
    marginLeft: 10,
    backgroundColor: '#1976d2',
    color: '#fff',
  },
  btn_cancel: {
    backgroundColor: '#ddd',
  },
  filter_price: {
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  filter_title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  filter_price_list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filter_price_item: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: '#90caf9',
    color: '#333',
    marginRight: 10,
    marginTop: 10,
  },
  filter_price_item_active: {
    backgroundColor: '#ff8a65',
    color: '#fff',
  },
  filter_day: {
    marginTop: 30,
    paddingLeft: 10,
  },
  filter_day_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  filter_day_label: {
    width: 80,
    marginRight: 15,
    fontSize: 16,
  },
  filter_day_input: {
    width: 120,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
  },
  filter_open_calendar: {
    marginLeft: 20,
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: '#ffca28',
    borderRadius: 10,
  },
  modal_calendar: {
    width: 400,
    height: 500,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});
