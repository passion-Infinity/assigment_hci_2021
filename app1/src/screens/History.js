import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import StarRating from '../components/StarRating';

export default function History() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.image_wrapper}>
          <Image
            style={styles.image}
            source={require('../assets/images/2.jpg')}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.name}>Lenovo 15.6" IdeaPad 5</Text>
          <StarRating ratings={4.5} reviews={33} />
          <View style={styles.status_wrapper}>
            <Text style={styles.status_title}>Trạng thái:</Text>
            <Text style={[styles.status, {color: 'red'}]}>Đã thuê</Text>
          </View>
          <View style={styles.time_wrapper}>
            <Text>Thời gian: </Text>
            <Text style={styles.time}>10/10/2021 - 10/11/2021</Text>
          </View>
        </View>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.image_wrapper}>
          <Image
            style={styles.image}
            source={require('../assets/images/3.jpg')}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.name}>
            Razer 13.4" Razer Book Laptop (Mercury White)
          </Text>
          <StarRating ratings={5} reviews={90} />
          <View style={styles.status_wrapper}>
            <Text style={styles.status_title}>Trạng thái:</Text>
            <Text style={[styles.status, {color: 'green'}]}>Đang thuê</Text>
          </View>
          <View style={styles.time_wrapper}>
            <Text>Thời gian: </Text>
            <Text style={styles.time}>3/10/2021 - 10/1/2022</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  wrapper: {
    width: '100%',
    height: 140,
    marginTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
  },
  image_wrapper: {
    width: '35%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    width: '62%',
    height: '100%',
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  status_wrapper: {
    marginTop: 8,
    flexDirection: 'row',
  },
  status: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  time_wrapper: {
    marginTop: 12,
    flexDirection: 'row',
  },
  time: {
    marginLeft: 3,
    fontWeight: 'bold',
  },
});
