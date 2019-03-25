import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Button from './button';
import Circle from './circle';

export default class Game extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <View style={(styles.lineStyle, { flex: 1 })}>
          <Text>Jogador 1</Text>
        </View>
        <View style={(styles.lineStyle, { flex: 2 })}>
          <Button component={<Text>FIM</Text>} />
          <Button component={<Circle />} />
          <Button component={<View />} />
          <Button component={<Circle />} />
          <Button component={<View />} />
          <Button component={<Circle />} />
          <Button component={<View />} />
          <Button component={<Circle />} />
          <Button component={<Text>INICIO</Text>} />
        </View>
        <View style={(styles.lineStyle, { flex: 1 })}>
          <Text>Jogador 2</Text>
        </View>
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
    flexDirection: 'row'
  },
  lineStyle: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
