import React, { useState } from 'react';
import { Modal, View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = ({ visible, onAddGoal, onCancel }) => {
  const [goal, setGoal] = useState('');

  const handleGoalChange = changedGoal => setGoal(changedGoal);

  const handleAddPress = () => {
    const newGoal = goal.trim();
    if (newGoal.length <= 0) {
      return;
    }

    onAddGoal(newGoal);
    setGoal('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your goal"
          style={styles.input}
          value={goal}
          onChangeText={handleGoalChange}
        />

        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="red"
              onPress={onCancel}
            />
          </View>

          <View style={styles.button}>
            <Button
              title="Add"
              onPress={handleAddPress}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    width: '45%'
  }
});
