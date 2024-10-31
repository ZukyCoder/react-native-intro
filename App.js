import { useState } from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
const [modalIsVisible, setModalIsVisible] = useState(false);
const [courseGoals, setCourseGoals] = useState([]);

function startAddGoalHandler() {
  setModalIsVisible(true);  
} 

function addGoalHandler(enteredGoal) {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      {text: enteredGoal, id: Math.random().toString()}
    ]);
    endGoalHandler();
  }

  function endGoalHandler() {
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    console.log("DELETE");
    console.log(id);
    setCourseGoals(currentGoals => {
    return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.buttonContainer}>
          <Button title="Add New Goal" color="#a065ec" onPress={startAddGoalHandler} />
        </View>
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endGoalHandler}/>
        <View style={styles.goalsContainer}>
          <FlatList 
          data={courseGoals} 
          renderItem={(itemData) => {
            return (<GoalItem text={itemData.item.text} 
            id={itemData.item.id}   
            onDeleteItem={deleteGoalHandler} />);}} 
          keyExtractor={(item, index) => {
            return item.id}} 
          alwaysBounceVertical={false}/>
        </View>    
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#311b6b',
  },
  buttonContainer: {
    backgroundColor: '#e4d0ff',
    borderRadius: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
