import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal, Image} from 'react-native';

function    GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');
    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    }
    function addGoalHandler() {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    function cancelGoalHandler() {
        setEnteredGoal('');
        props.onCancel();
    }

    return (
    <Modal visible={props.visible} animationType="slide">
        <View style={stylesInput.inputContainer}>
            <Image source={require('../assets/images/goal.png')} style={stylesInput.imageContainer} />
            <TextInput 
            style={stylesInput.textInput} 
            placeholder='Your course goal!' 
            onChangeText={goalInputHandler}
            value={enteredGoal}
            />
            <View style={stylesInput.buttonContainer}>
            <View style={stylesInput.button}>
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
            <View style={stylesInput.button}>
                <Button title="Cancel" onPress={cancelGoalHandler} />
            </View>
        </View>
        </View>
        
    </Modal>
    )
};

export default GoalInput;

const stylesInput = StyleSheet.create({
    modalContainer: {
        margin: 16,
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        padding: 16
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        marginRight: 8,
        padding: 8 
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
});