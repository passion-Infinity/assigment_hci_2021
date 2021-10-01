import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default function Personnal() {
  return (
    <View style={styles.container}>
      <Image
        style={{
          position: 'absolute',
          width: '100%',
          height: 160,
        }}
        source={require('../assets/images/bgheaderstart.jpg')}
      />
      <View style={styles.header}>
        <View style={styles.name}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '600',
            }}>
            Nguyễn Lâm Công Danh
          </Text>
        </View>
        <View style={styles.profile_wrapper}>
          <Image
            source={require('../assets/images/profile.jpg')}
            resizeMode="contain"
            style={{
              width: '80%',
              height: '80%',
              borderRadius: 1000,
            }}
          />
        </View>
      </View>
      <View style={styles.body}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 180,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffca28',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    opacity: 0.85,
  },
  name: {
    width: '70%',
    paddingLeft: 10,
  },
  profile_wrapper: {
    width: '30%',
    paddingLeft: 20,
  },
});
