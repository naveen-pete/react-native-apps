import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GameOverScreen = ({ userNumber, totalRounds, onNewGame }) => {
  return (
    <View style={styles.screen}>
      <Text>Congratulations! Game is over!</Text>
      <Text>Total Rounds: {totalRounds}</Text>
      <Text>User Number: {userNumber}</Text>
      <Button title="New Game" onPress={onNewGame} />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
