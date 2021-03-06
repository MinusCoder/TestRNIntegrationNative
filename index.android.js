'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules
} from 'react-native';

const GotoActivity = NativeModules.GotoActivity;
class HelloWorld extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello, World</Text>
        <TouchableOpacity style={styles.button} onPress={() => {this.onPress()}}>
            <Text style={styles.gotoNative}>Goto Native</Text>
        </TouchableOpacity>
      </View>
    )
  }

  onPress() {
    GotoActivity.gotoMainActivity();
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  gotoNative: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black'
  },
  button: {
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#F37C21',
  }
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);