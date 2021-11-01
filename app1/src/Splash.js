import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

export default class Splash extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <View style={styles.splash_screeen}>
        <LottieView
          source={require('./assets/animation/Splash.json')}
          autoPlay
          loop={false}
          speed={1}
          onAnimationFinish={() => {
            console.log('animation is finish');
            this.props.navigation.replace('GetStarted1');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  splash_screeen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a576b8',
  },
});
