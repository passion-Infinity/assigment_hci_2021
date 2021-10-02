import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import StarRating from './StarRating';

const Card = ({itemData, onPress}) => {
  return (
    // <TouchableOpacity onPress={onPress}>
    <View style={styles.card}>
      <View style={styles.cardImgWrapper}>
        <Image
          source={itemData.image}
          resizeMode="cover"
          style={styles.cardImg}
        />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{itemData.title}</Text>
        {/* <StarRating ratings={itemData.ratings} reviews={itemData.reviews} /> */}
        <Text numberOfLines={2} style={styles.cardDetails}>
          {itemData.description}
        </Text>
        <Text style={styles.price}>${itemData.price}/month</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.btn}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginRight: 8,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
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
    borderRadius: 20,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '65%',
    width: '100%',
    alignSelf: 'center',
    position: 'relative',
    top: -40,
    borderRadius: 20,
  },
  cardInfo: {
    position: 'relative',
    top: -10,
    flex: 2,
    padding: 10,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    height: 50,
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
  btn: {
    position: 'relative',
    width: '55%',
    paddingVertical: 16,
    backgroundColor: 'blue',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    top: 17,
    right: -110,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  price: {
    position: 'absolute',
    top: 120,
    left: -85,
    fontSize: 18,
    fontWeight: '600',
  },
});
