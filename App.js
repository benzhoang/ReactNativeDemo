import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  return (
    <View style={styles.container}>

      <View>
      <Text style={{fontSize: 35, fontWeight: "500"}}>Name: {name}</Text>
      <TextInput 
      multiline
      autoCapitalize={"words"}
      style={styles.input} 
      placeholder="Name"
      onChangeText={(value) => setName(value)}/>
      </View>
      
      <View>
      <Text style={{fontSize: 35, fontWeight: "500"}}>Age: {age}</Text>
      <TextInput 
  
      style={styles.input} 
      placeholder="Name"
      onChangeText={(value) => setAge(+value)}
      keyboardType="numeric"
      />
      </View>
      
      <Text style={{fontSize: 35, fontWeight: "500"}}>Count: {count}</Text>
    
    
    <View>
      <Button color={"red"} title="Click here" onPress={() => setCount(count + 1)}/>
      <Button title="Click here" onPress={() => setCount(count - 1)}/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input:{
    borderColor: 'green',
    borderWidth: 1,
    width: 200, 
    padding: 15
  }
});
