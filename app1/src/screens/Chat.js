import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default function Chat() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/message.png')} />
      <Text
        style={{
          marginTop: 20,
        }}>
        Không có tin nhắn nào
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
