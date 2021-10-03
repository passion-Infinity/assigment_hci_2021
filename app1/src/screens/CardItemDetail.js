import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

export default function CardItemDetail({route}) {
  const itemData = route.params.itemData;
  const navTitleView = useRef(null);

  const hiddenFunc = () => {
    console.log('fsdafsad');
  };

  const displayFunc = () => {
    navTitleView.current.fadeOut(100);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageHeaderScrollView
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
          <Animatable.View style={styles.navTitleView} ref={navTitleView}>
            <Text style={styles.navTitle}>{itemData.title}</Text>
          </Animatable.View>
        )}>
        <TriggeringView
          style={styles.section}
          onHide={hiddenFunc}
          onDisplay={displayFunc}>
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
            <Text style={styles.price}>${itemData.price} / month</Text>
            <Text style={styles.cost}>${itemData.cost} / month</Text>
          </View>
          <Text style={styles.sale_info}>{itemData.saleInfo}</Text>
        </TriggeringView>
        <View style={styles.main_content}>
          <View style={[styles.sectionLarge]}>
            <Text style={styles.section_title}>Bảng giá chi tiết</Text>
            {/* <Text style={styles.sectionContent}>{itemData.description}</Text> */}
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
                <Text style={styles.infomation_detail}>Giá: 300.000</Text>
              </View>
            </View>
            <View style={[styles.infomation_wrapper]}>
              <Text style={styles.infomation_title}>1 Tuần</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingRight: 15,
                  marginTop: 3,
                }}>
                <Text style={styles.infomation_detail}>Giá: 300.000</Text>
                <Text style={{color: 'red', fontWeight: '500'}}>
                  Áp dụng khuyến mãi giảm 5%
                </Text>
              </View>
            </View>
            <View
              style={[styles.infomation_wrapper, styles.infomation_highlight]}>
              <Text style={styles.infomation_title}>1 Tháng</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingRight: 15,
                  marginTop: 3,
                }}>
                <Text style={styles.infomation_detail}>Giá: 300.000</Text>
                <Text style={{color: 'red', fontWeight: '500'}}>
                  Áp dụng khuyến mãi giảm 10%
                </Text>
              </View>
            </View>
            <View style={[styles.infomation_wrapper]}>
              <Text style={styles.infomation_title}>3 Tháng</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingRight: 15,
                  marginTop: 3,
                }}>
                <Text style={styles.infomation_detail}>Giá: 300.000</Text>
                <Text style={{color: 'red', fontWeight: '500'}}>
                  Áp dụng khuyến mãi giảm 15%
                </Text>
              </View>
            </View>
            <View
              style={[styles.infomation_wrapper, styles.infomation_highlight]}>
              <Text style={styles.infomation_title}>6 Tháng</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingRight: 15,
                  marginTop: 3,
                }}>
                <Text style={styles.infomation_detail}>Giá: 300.000</Text>
                <Text style={{color: 'red', fontWeight: '500'}}>
                  Áp dụng khuyến mãi giảm 30%
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.information_device}>
            <Text style={styles.section_title}>Cấu hình máy chi tiết</Text>
            <View
              style={[
                styles.information_device_wrapper,
                styles.infomation_highlight,
              ]}>
              <Text style={styles.information_device_name}>CPU:</Text>
              <Text style={styles.information_device_desc}>
                i5, 1135G7, 2.4GHz
              </Text>
            </View>
            <View style={[styles.information_device_wrapper]}>
              <Text style={styles.information_device_name}>RAM:</Text>
              <Text style={styles.information_device_desc}>
                i5, 1135G7, 2.4GHz, ke fasdfasdf fasdfasdfasdf fasdfsdaf
              </Text>
            </View>
            <View
              style={[
                styles.information_device_wrapper,
                styles.infomation_highlight,
              ]}>
              <Text style={styles.information_device_name}>Ổ cứng:</Text>
              <Text style={styles.information_device_desc}>
                i5, 1135G7, 2.4GHz, ke fasdfasdf fasdfasdfasdf fasdfsdaf
              </Text>
            </View>
            <View style={[styles.information_device_wrapper]}>
              <Text style={styles.information_device_name}>Màn hình:</Text>
              <Text style={styles.information_device_desc}>
                i5, 1135G7, 2.4GHz, ke fasdfasdf fasdfasdfasdf fasdfsdaf
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.categories}>
              {itemData.aims.map((category, index) => (
                <View style={styles.categoryContainer} key={index}>
                  <FontAwesome name="tag" size={16} color="#fff" />
                  <Text style={styles.category}>{category}</Text>
                </View>
              ))}
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
});
