import React, { useState, useRef, useEffect } from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import NumberView from '../components/NumberView';
import Card from '../components/Card';
import TitleText from '../components/TitleText';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = ({ userNumber, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userNumber)
  );
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(rounds);
    }
  }, [currentGuess, userNumber]);

  const handleNextGuess = direction => {
    if ((direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)) {
      Alert.alert('Bad Input', 'Please provide correct input.');
      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const newGuess = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(newGuess);
    setRounds(curRounds => curRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <TitleText>My Guess</TitleText>
      <NumberView>{currentGuess}</NumberView>
      <Card style={styles.buttonGroup}>
        <Button
          title="Lower"
          color={Colors.primary}
          onPress={handleNextGuess.bind(this, 'lower')}
        />
        <Button
          title="Greater"
          color={Colors.primary}
          onPress={handleNextGuess.bind(this, 'greater')}
        />
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  }
});
