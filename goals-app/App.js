import React, { useState } from 'react';
import { View, Button, Text, FlatList, StyleSheet } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [goalList, setGoalList] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddGoal = goal => {
    setGoalList(currentGoalList => {
      return [
        ...currentGoalList,
        { id: Date.now().toString(), title: goal }
      ];
    });
    setShowAddModal(false);
  };

  const handleDeleteGoal = goalId => {
    setGoalList(currentGoalList => {
      return currentGoalList.filter(goal => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button
        title="Add New Goal"
        onPress={() => setShowAddModal(true)}
      />

      <GoalInput
        visible={showAddModal}
        onAddGoal={handleAddGoal}
        onCancel={() => setShowAddModal(false)}
      />

      {goalList.length > 0 ?
        <FlatList
          data={goalList}
          keyExtractor={item => item.id}
          renderItem={({ item: goal }) =>
            <GoalItem goal={goal} onDelete={handleDeleteGoal} />
          }
        />
        :
        <Text style={styles.message}>No goals</Text>
      }


    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  message: {
    marginVertical: 10,
    padding: 10,
    borderColor: 'blue',
    backgroundColor: 'lightblue',
    borderWidth: 1,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
