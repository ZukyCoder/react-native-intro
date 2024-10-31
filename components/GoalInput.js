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
            placeholderTextColor='darkgrey'
            onChangeText={goalInputHandler}
            value={enteredGoal}
            />
            <View style={stylesInput.buttonContainer}>
            <View style={stylesInput.button}>
                <Button title="Cancel" onPress={cancelGoalHandler} color={'#f31282'} />
            </View>
            <View style={stylesInput.button}>
                <Button title="Add Goal" onPress={addGoalHandler} color={'#b180f0'}/>
            </View>
        </View>
        </View>
        
    </Modal>
    )
};

export default GoalInput;

const stylesInput = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    imageContainer: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        backgroundColor: '#e4d0ff',
        borderColor: '#e4d0ff',
        borderRadius: 8,
        width: '100%',
        marginRight: 8,
        padding: 8, 
        color: '#120438',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: 100,
        marginHorizontal: 8,
        backgroundColor: '#e4d0ff',
        borderRadius: 8,
        
    },
    iOSCancelButton: {
        backgroundColor: '#f31282',
        borderRadius: 15,
        color: 'white',
    }
});