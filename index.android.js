/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class rn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          First React Native App
        </Text>
        <Image source={require('./assets/avatar.jpeg')} style={styles.profile} />
        <Text>
          Abdul Latif Syafii
        </Text>
        <Text>
          Gagliano
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  profile: {
    width: 150,
    height: 150,
    borderRadius: 75,
  }
});

AppRegistry.registerComponent('rn', () => rn);
