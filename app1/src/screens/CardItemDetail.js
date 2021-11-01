import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

export default function CardItemDetail({navigation, route}) {
  const itemData = route.params.itemData;
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = event => {
    setScrollY(event.nativeEvent.contentOffset.y);
  };
  const [show, setShow] = useState(false);
  const closePopup = () => {
    setShow(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        visible={show}
        transparent
        onRequestClose={closePopup}
        animationType={'slide'}>
        <TouchableOpacity onPress={closePopup} style={styles.modal_container}>
          <View style={styles.modal}>
            <View style={styles.modal_top}>
              <View style={styles.modal_top_left}>
                <View style={styles.modal_top_left_icon}>
                  <Feather name="check-circle" color="green" size={20} />
                </View>
                <Text style={styles.modal_top_left_text}>
                  Sản phẩm đã được thêm vào giỏ
                </Text>
              </View>
              <TouchableOpacity
                onPress={closePopup}
                style={styles.modal_top_right}>
                <FontAwesome name="times" color="#aaa" size={20} />
              </TouchableOpacity>
            </View>
            <View style={styles.modal_body}>
              <View style={styles.modal_body_image}>
                <Image
                  source={itemData.image}
                  style={styles.modal_body_image_item}
                />
              </View>
              <View style={styles.modal_body_content}>
                <Text style={styles.modal_body_content_text}>
                  {itemData.title}
                </Text>
                <Text style={styles.modal_body_content_text}>
                  {itemData.price}
                </Text>
              </View>
            </View>
            <View style={styles.modal_footer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Cart');
                }}
                style={styles.modal_footer_button}>
                <Text style={styles.modal_footer_button_item}>
                  Xem giỏ hàng
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
      <ImageHeaderScrollView
        onScroll={handleScroll}
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        overScrollMode="never"
        overlayColor="tomato"
        maxOverlayOpacity={1}
        minOverlayOpacity={0}
        renderHeader={() => (
          <Image source={itemData.image} style={styles.image} />
        )}
        renderForeground={() => (
          <View style={styles.titleContainer}>
            <Text style={styles.imageTitle}>{itemData.title}</Text>
          </View>
        )}
        renderFixedForeground={() => (
          <Text numberOfLines={2} style={styles.navTitle}>
            {scrollY >= 260 ? (
              <Text style={styles.navTitle}>{itemData.title}</Text>
            ) : (
              <Text></Text>
            )}
          </Text>
        )}>
        <TriggeringView style={styles.section}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.title}>{itemData.title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <FontAwesome name="star" size={16} color="#FF6347" />
              <Text style={{marginHorizontal: 2}}>{itemData.rating}</Text>
              <Text>({itemData.reviews})</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              paddingBottom: 3,
              alignItems: 'center',
            }}>
            <Text style={styles.price}>{itemData.price} </Text>
            <Text style={styles.cost}>{itemData.cost}</Text>
          </View>
          {/* <Text style={styles.sale_info}>
            Áp dụng khuyến mãi {itemData.month6.percent} khi thuê trong 6 tháng
          </Text> */}
          <Text
            style={{
              marginTop: 8,
              fontSize: 16,
              fontWeight: '500',
            }}>
            Tình trạng máy:
          </Text>
          <View
            style={{
              position: 'relative',
              fontSize: 15,
              top: -20,
              left: 130,
            }}>
            <Text>Tốc độ xử lý: 5/10</Text>
            <Text>Độ nguyên vẹn: 92%</Text>
          </View>
          {/* <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('RentalScreen1', {itemData: itemData});
            }}
            style={styles.btn_submit}>
            <Text style={styles.btn_submit_text}>Tiến hành thuê</Text>
          </TouchableOpacity> */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                // navigation.navigate('RentalScreen1', {itemData: itemData});
                setShow(true);
              }}
              style={styles.btn_submit}>
              <Text style={styles.btn_submit_text}>Chọn thuê</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              activeOpacity={0.8}
              // onPress={() => {
              //   navigation.navigate('RentalScreen1', {itemData: itemData});
              // }}
              style={styles.btn_submit}>
              <Text style={styles.btn_submit_text}>Thêm vào giỏ</Text>
            </TouchableOpacity> */}
          </View>
        </TriggeringView>
        <View style={styles.main_content}>
          {/* <View style={[styles.sectionLarge]}>
            <Text style={styles.section_title}>Bảng giá chi tiết</Text>
            <Text style={styles.sectionContent}>{itemData.description}</Text>
            <View
              style={[styles.infomation_wrapper, styles.infomation_highlight]}>
              <Text style={styles.infomation_title}>1 Ngày</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingRight: 15,
                  marginTop: 3,
                }}>
                <Text style={styles.infomation_detail}>
                  Giá: {itemData.price}
                </Text>
              </View>
            </View>
            <View style={[styles.infomation_wrapper]}>
              <Text style={styles.infomation_title}>{itemData.week.name}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingRight: 15,
                  marginTop: 3,
                }}>
                <Text style={styles.infomation_detail}>
                  Giá: {itemData.week.price}
                </Text>
                <Text
                  style={{
                    textDecorationLine: 'line-through',
                    color: '#a0a0a0',
                    fontWeight: '900',
                  }}>
                  {itemData.week.cost}
                </Text>
              </View>
            </View>
            <View
              style={[styles.infomation_wrapper, styles.infomation_highlight]}>
              <Text style={styles.infomation_title}>
                {itemData.month1.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingRight: 15,
                  marginTop: 3,
                }}>
                <Text style={styles.infomation_detail}>
                  Giá: {itemData.month1.price}
                </Text>
                <Text
                  style={{
                    textDecorationLine: 'line-through',
                    color: '#a0a0a0',
                    fontWeight: '900',
                  }}>
                  {itemData.month1.cost}
                </Text>
              </View>
            </View>
            <View style={[styles.infomation_wrapper]}>
              <Text style={styles.infomation_title}>
                {itemData.month3.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingRight: 15,
                  marginTop: 3,
                }}>
                <Text style={styles.infomation_detail}>
                  Giá: {itemData.month3.price}
                </Text>
                <Text
                  style={{
                    textDecorationLine: 'line-through',
                    color: '#a0a0a0',
                    fontWeight: '900',
                  }}>
                  {itemData.month3.cost}
                </Text>
              </View>
            </View>
            <View
              style={[styles.infomation_wrapper, styles.infomation_highlight]}>
              <Text style={styles.infomation_title}>
                {itemData.month6.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingRight: 15,
                  marginTop: 3,
                }}>
                <Text style={styles.infomation_detail}>
                  Giá: {itemData.month6.price}
                </Text>
                <Text
                  style={{
                    textDecorationLine: 'line-through',
                    color: '#a0a0a0',
                    fontWeight: '900',
                  }}>
                  {itemData.month6.cost}
                </Text>
              </View>
            </View>
          </View> */}

          <View style={styles.main_content}>
            <View style={[styles.sectionLarge]}>
              <Text style={styles.section_title}>Giá thuê chi tiết</Text>
              <View style={styles.price_card}>
                <View style={styles.price_card_item}>
                  <Text style={styles.price_card_title}>
                    {itemData.week.name}
                  </Text>
                  {itemData.week.cost ? (
                    <Text style={styles.price_card_default}>
                      {itemData.week.cost}
                    </Text>
                  ) : (
                    <Text></Text>
                  )}
                  <Text style={styles.price_card_sale}>
                    {itemData.week.price}
                  </Text>
                </View>
                <View style={styles.price_card_item}>
                  <Text style={styles.price_card_title}>
                    {itemData.month1.name}
                  </Text>
                  {itemData.month1.cost ? (
                    <Text style={styles.price_card_default}>
                      {itemData.month1.cost}
                    </Text>
                  ) : (
                    <Text></Text>
                  )}
                  <Text style={styles.price_card_sale}>
                    {itemData.month1.price}
                  </Text>
                </View>
                <View style={styles.price_card_item}>
                  <Text style={styles.price_card_title}>
                    {itemData.month3.name}
                  </Text>
                  {itemData.month3.cost ? (
                    <Text style={styles.price_card_default}>
                      {itemData.month3.cost}
                    </Text>
                  ) : (
                    <Text></Text>
                  )}
                  <Text style={styles.price_card_sale}>
                    {itemData.month3.price}
                  </Text>
                </View>
                <View style={styles.price_card_item}>
                  <Text style={styles.price_card_title}>
                    {itemData.month6.name}
                  </Text>
                  {itemData.month6.cost ? (
                    <Text style={styles.price_card_default}>
                      {itemData.month6.cost}
                    </Text>
                  ) : (
                    <Text></Text>
                  )}
                  <Text style={styles.price_card_sale}>
                    {itemData.month6.price}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.information_device}>
            <Text style={styles.section_title}>Thông số kỹ thuật</Text>
            <View style={[styles.information_device_wrapper]}>
              <Text style={styles.information_device_name}>
                Hệ diều hành-OS:
              </Text>
              <Text style={styles.information_device_desc}>Window 10</Text>
            </View>
            <View
              style={[
                styles.information_device_wrapper,
                styles.infomation_highlight,
              ]}>
              <Text style={styles.information_device_name}>
                Bộ vi xử lý-CPU:
              </Text>
              <Text style={styles.information_device_desc}>{itemData.cpu}</Text>
            </View>
            <View style={[styles.information_device_wrapper]}>
              <Text style={styles.information_device_name}>
                Bộ nhớ trong-RAM:
              </Text>
              <Text style={styles.information_device_desc}>{itemData.ram}</Text>
            </View>
            <View
              style={[
                styles.information_device_wrapper,
                styles.infomation_highlight,
              ]}>
              <Text style={styles.information_device_name}>
                Ổ đĩa cứng-HDD:
              </Text>
              <Text style={styles.information_device_desc}>
                {itemData.hardDisk}
              </Text>
            </View>
            <View style={[styles.information_device_wrapper]}>
              <Text style={styles.information_device_name}>Màn hình:</Text>
              <Text style={styles.information_device_desc}>
                {itemData.screen}
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  // navigation.navigate('RentalScreen1', {itemData: itemData});
                  setShow(true);
                }}
                style={styles.btn_submit}>
                <Text style={styles.btn_submit_text}>Chọn thuê</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity
                activeOpacity={0.8}
                // onPress={() => {
                //   navigation.navigate('RentalScreen1', {itemData: itemData});
                // }}
                style={styles.btn_submit}>
                <Text style={styles.btn_submit_text}>Thêm vào giỏ</Text>
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </ImageHeaderScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main_content: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    resizeMode: 'contain',
  },
  title: {
    width: 330,
    fontSize: 23,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: '#FF6347',
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
    marginTop: 12,
    marginLeft: 10,
  },
  sectionLarge: {
    minHeight: 300,
  },
  sale_info: {
    width: 300,
    fontSize: 16,
    fontWeight: '400',
    color: 'tomato',
  },
  price: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  cost: {
    textDecorationLine: 'line-through',
    color: '#777',
    fontSize: 15,
    marginLeft: 15,
  },
  section_title: {
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 10,
  },
  infomation_wrapper: {
    paddingLeft: 20,
    paddingVertical: 12,
  },
  infomation_highlight: {
    backgroundColor: '#eee',
  },
  infomation_title: {
    fontSize: 18,
    fontWeight: '500',
  },
  infomation_detail: {
    fontSize: 15,
  },
  information_device: {
    borderTopWidth: 1,
    borderColor: '#cccccc',
    marginTop: 30,
  },
  information_device_wrapper: {
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    paddingVertical: 7,
  },
  information_device_name: {
    width: 150,
    minHeight: 40,
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 40,
  },
  information_device_desc: {
    maxWidth: 250,
  },
  btn_submit: {
    // position: 'relative',
    marginTop: 20,
    width: '95%',
    height: 45,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    // left: 20,
  },
  btn_submit_text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  price_card: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  price_card_item: {
    width: 150,
    height: 100,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderWidth: 0.6,
    borderColor: 'blue',
  },
  price_card_title: {
    fontSize: 16,
    fontWeight: '300',
  },
  price_card_default: {
    fontSize: 15,
    fontWeight: '600',
    textDecorationLine: 'line-through',
    color: '#aaa',
    paddingVertical: 5,
  },
  price_card_sale: {
    fontSize: 18,
    fontWeight: '600',
  },
  modal_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#00000099',
  },
  modal: {
    width: '100%',
    height: 260,
    backgroundColor: '#fff',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    alignItems: 'center',
  },
  modal_top: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  modal_top_left: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modal_top_left_icon: {
    marginRight: 15,
  },
  modal_top_left_text: {
    fontSize: 16,
    color: 'green',
    fontWeight: '600',
  },
  modal_body: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 25,
  },
  modal_body_image: {
    width: 90,
    height: 90,
  },
  modal_body_image_item: {
    width: '100%',
    height: '100%',
  },
  modal_body_content: {
    width: '72%',
    marginLeft: 20,
  },
  modal_body_content_text: {
    fontSize: 15,
    marginBottom: 5,
  },
  modal_footer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  modal_footer_button: {
    width: '90%',
    height: 42,
    backgroundColor: '#db231d',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  modal_footer_button_item: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
