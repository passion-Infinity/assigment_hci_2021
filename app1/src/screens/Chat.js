import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Chat() {
  return (
    <View style={styles.container}>
      <Text>Announcement screen</Text>
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
