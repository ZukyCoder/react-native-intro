import { useState } from 'react';
import { StyleSheet, 
  Text,
   View,
   Button, 
   TextInput,
   FlatList
 } from 'react-native';

export default function App() {
const [enteredGoal, setEnteredGoal] = useState('');
const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler() {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      enteredGoal
    ]);
  }

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput} 
        placeholder='Your course goal!' 
        onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} 
        renderItem={(itemData) => <View style={styles.goalItem}><Text style={styles.goalText}>{itemData.item}</Text></View>} alwaysBounceVertical={false}/>
      </View>    
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: 'cornflowerblue',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    padding: 8,
    marginRight: 8 
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white'
  }
});
