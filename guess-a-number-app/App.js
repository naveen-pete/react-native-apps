import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const handleNewGame = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const handleGameOver = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  const renderScreen = () => {
    if (userNumber && guessRounds <= 0) {
      return <GameScreen
        userNumber={userNumber}
        onGameOver={handleGameOver}
      />;
    } else if (guessRounds > 0) {
      return <GameOverScreen
        userNumber={userNumber}
        totalRounds={guessRounds}
        onNewGame={handleNewGame}
      />;
    }

    return <StartGameScreen onStartGame={handleStartGame} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
