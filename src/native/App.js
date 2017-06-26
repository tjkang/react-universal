import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Hello from '../shared/HelloComponent';

export default class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Hello />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

