import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Colors from '../constants/colors';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberView from '../components/NumberView';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const handleChangeText = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const handleResetPress = () => {
    setEnteredValue('');
    setSelectedNumber(undefined);
    setConfirmed(false);
  };

  const handleConfirmPress = () => {
    const number = parseInt(enteredValue);

    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert(
        'Invalid number!',
        'Enter a number between 1 and 99',
        [{ text: 'Ok', style: 'destructive', onPress: handleResetPress }]
      );
      return;
    }

    setSelectedNumber(number);
    setEnteredValue('');
    setConfirmed(true);

    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = <Card style={styles.summaryContainer}>
      <Text>You selected</Text>
      <NumberView>{selectedNumber}</NumberView>
      <Button title="Start Game" />
    </Card>;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Enter a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            value={enteredValue}
            onChangeText={handleChangeText}
          />
          <View style={styles.buttonGroup}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={Colors.secondary}
                onPress={handleResetPress}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                color={Colors.primary}
                onPress={handleConfirmPress}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonGroup: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingHorizontal: 15
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  button: {
    width: '40%'
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
});
