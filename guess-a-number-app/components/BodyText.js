import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = ({ children, style }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

export default BodyText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
    fontSize: 16
  }
});
