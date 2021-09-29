import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Details extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Detail Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
