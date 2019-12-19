import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ children, style }) => {
  return (
    <View style={{ ...styles.card, ...style }}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    elevation: 10,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  }
});