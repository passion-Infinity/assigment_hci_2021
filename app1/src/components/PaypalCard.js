import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {method} from '../models/method';

export default function Paypal() {
  return (
    <View style={styles.wrapper}>
      {method.map((item, index) => {
        return (
          <View style={styles.img_wrapper} key={item.id}>
            <Image style={styles.img} source={item.image} />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  img_wrapper: {
    width: 40,
    height: 40,
    marginRight: 20,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
