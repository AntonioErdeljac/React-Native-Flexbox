import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.boxContainer, styles.boxOne]}>
          <Text>A</Text>
          <Text>A</Text>
          <Text>A</Text>
        </View>
        <View style={[styles.boxContainer, styles.boxTwo]}>
          <Text>B</Text>
        </View>
        <View style={[styles.boxContainer, styles.boxThree]}>
          <Text>C</Text>
          <Text>C</Text>
          <Text>C</Text>
          <Text>C</Text>
          <Text>C</Text>
          <Text>C</Text>
          <Text>C</Text>
          <Text>C</Text>
          <Text>C</Text>
          <Text>C</Text>
          <Text>C</Text>
          <Text>C</Text>
          <Text>C</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  boxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxOne: {
    flex: 3,
    backgroundColor: '#FFEEE4',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },
  boxTwo: {
    flex: 1,
    backgroundColor: '#F17F42'
  },
  boxThree: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: '#CE6D39'
  }
})