import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import StarRating from '../components/StarRating';
import Star from '../components/Star';

export default function History() {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType={'fade'}
        transparent
        visible={show}
        onRequestClose={() => {
          setShow(false);
        }}>
        <View style={styles.center_view}>
          <View style={styles.modal}>
            <Text
              style={{
                marginTop: 5,
                marginLeft: 10,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Đánh giá sản phẩm
            </Text>
            <View
              style={{
                position: 'relative',
                top: 20,
                left: 60,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setShow(false);
                }}>
                <Star ratings={4.5} />
              </TouchableOpacity>
            </View>
            {/* <View style={styles.btn}>
              <Pressable
                onPress={() => {
                  setShow(false);
                }}>
                <Text style={[styles.btn_action, styles.btn_cancel]}>Đóng</Text>
              </Pressable>
              <Pressable>
                <Text style={[styles.btn_action, styles.btn_apply]}>
                  Áp dụng
                </Text>
              </Pressable>
            </View> */}
          </View>
        </View>
      </Modal>

      <View style={styles.main_item}>
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
        <View style={styles.btn_comment_wrapper}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setShow(true);
            }}>
            <Text style={styles.btn_comment}>Đánh giá</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.main_item}>
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
        <View style={styles.btn_comment_wrapper}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setShow(true);
            }}>
            <Text style={styles.btn_comment}>Đánh giá</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  main_item: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingBottom: 20,
    marginBottom: 10,
  },
  btn_comment_wrapper: {
    width: '90%',
    borderRadius: 10,
    marginTop: 8,
  },
  btn_comment: {
    backgroundColor: 'tomato',
    height: 40,
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  wrapper: {
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  image_wrapper: {
    width: '35%',
    height: 140,
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
  center_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000099',
  },
  modal: {
    width: 380,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  body: {
    flex: 3,
    paddingHorizontal: 10,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15,
    paddingBottom: 20,
    position: 'relative',
    top: 55,
    left: 95,
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
});
