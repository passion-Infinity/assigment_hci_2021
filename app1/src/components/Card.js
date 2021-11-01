import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import StarRating from './StarRating';

export default function Card(props) {
  const itemData = props.itemData;
  const navigation = props.navigation;
  const onClickCart = () => {
    props.getItemData(itemData);
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardImgWrapper}>
        <Image
          source={itemData.image}
          resizeMode="cover"
          style={styles.cardImg}
        />
      </View>
      <View style={styles.cardInfo}>
        <View style={styles.cardInfo_wrapper}>
          <Text style={styles.cardTitle}>{itemData.title}</Text>
          {/* <StarRating ratings={itemData.ratings} reviews={itemData.reviews} /> */}
          <Text numberOfLines={2} style={styles.cardDetails}>
            {itemData.description}
          </Text>
          <Text style={styles.price}>{itemData.price}</Text>
          <Text
            style={{
              marginTop: 5,
              color: 'red',
            }}>
            {itemData.month6.content && itemData.month6.content}
          </Text>
        </View>
        <View style={styles.btn_wrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CardItemDetail', {itemData: itemData});
            }}>
            <Text style={styles.btn}>Chi tiết</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('RentalScreen', {itemData: itemData});
              onClickCart();
              props.openPopup(true);
            }}>
            <Text style={[styles.btn, {marginLeft: 10}]}>Thêm vào giỏ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginRight: 8,
    marginLeft: 5,
    height: 200,
    marginVertical: 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
  },
  cardImgWrapper: {
    flex: 1,
    marginRight: 10,
  },
  cardImg: {
    height: '65%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  cardInfo: {
    flex: 1.5,
    padding: 10,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardDetails: {
    fontSize: 14,
    color: '#444',
  },
  btn: {
    width: 110,
    paddingVertical: 8,
    backgroundColor: 'blue',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 20,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
  btn_wrapper: {
    flexDirection: 'row',
    position: 'relative',
    top: 40,
    left: -22,
  },
  cardInfo_wrapper: {
    height: 100,
  },
});
