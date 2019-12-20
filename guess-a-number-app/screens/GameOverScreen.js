import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

const GameOverScreen = ({ userNumber, totalRounds, onNewGame }) => {
  return (
    <View style={styles.screen}>
      <TitleText>Congratulations! Game is over!</TitleText>
      <BodyText>Total Rounds: {totalRounds}</BodyText>
      <BodyText>User Number: {userNumber}</BodyText>
      <Button
        title="New Game"
        color={Colors.primary}
        onPress={onNewGame}
      />
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
