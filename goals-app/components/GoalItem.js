import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({ goal, onDelete }) => {
  return (
    <TouchableOpacity onPress={onDelete.bind(this, goal.id)}>
      <View style={styles.listItem}>
        <Text>{goal.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 10
  }
});
