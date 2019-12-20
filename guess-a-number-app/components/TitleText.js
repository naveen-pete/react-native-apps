import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = ({ children, style }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

export default TitleText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans-bold',
    fontSize: 20
  }
});
