import { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

function    GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');
    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    }
    function addGoalHandler() {
        props.onAddGoal(enteredGoal);
        //setEnteredGoal('');
    }

    return (
    <View style={stylesInput.inputContainer}>
        <TextInput 
        style={stylesInput.textInput} 
        placeholder='Your course goal!' 
        onChangeText={goalInputHandler}
        //value={enteredGoal}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
    )
};

export default GoalInput;

const stylesInput = StyleSheet.create({
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
        marginRight: 8,
        padding: 8 
    }
});