import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const NumberView = ({ children }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default NumberView;

const styles = StyleSheet.create({
  view: {
    borderWidth: 2,
    borderColor: Colors.secondary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: Colors.secondary,
    fontSize: 22
  }
});
