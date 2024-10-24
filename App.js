import { StyleSheet, 
  Text,
   View,
   Button 
 } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textField}>Open up App.js to start working on your app!</Text>
      <Text style={styles.textField}>Changes you make will automatically reload.</Text>
      <Button title="Click Me"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textField: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'blue',
    padding: 16
  }
});
