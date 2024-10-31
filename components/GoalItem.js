import { StyleSheet, 
         Text, 
         View,
         Pressable
        } from 'react-native';
function GoalItem(props) {
    return (
        <View style={stylesItems.goalItem}>
            <Pressable 
            android_ripple={{color: '#4b0082'}} 
            //onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed}) => pressed && stylesItems.pressedItem}
            >
                <Text style={stylesItems.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
};

export default GoalItem;

const stylesItems = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5
  }
});