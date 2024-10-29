import { StyleSheet, 
         Text, 
         View 
        } from 'react-native';
function GoalItem(props) {
    return (
        <View style={stylesItems.goalItem}>
            <Text style={stylesItems.goalText}>{props.text}</Text>
        </View>
    );
};

export default GoalItem;

const stylesItems = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
});