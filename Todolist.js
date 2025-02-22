import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
//import FlexBox from "./components/flexbox";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Todolist() {
  const [todo, setTodo] = useState("");

  const [listTodo, setListTodo] = useState([]);

  //{id: 1, name: 'Learn FE skills'}

  const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleAddTodo = () => {
    if (!todo) {
      Alert.alert("Error input todo", "Todo is required", [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')}
      ])
      return;
    }
    setListTodo([...listTodo, { id: randomInteger(1, 1000), name: todo }]);
    setTodo("");
  };

  const deleteTodo = (id) => {
    const newTodos = listTodo.filter(item => item.id !== id);
    setListTodo(newTodos)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      {/* header */}
      <Text style={styles.header}>Simple TodoList App</Text>

      {/* form */}
      <View style={styles.form}>
        <TextInput
          value={todo}
          style={styles.todoInput}
          onChangeText={(value) => setTodo(value)}
        />
        <Button title="Add" onPress={handleAddTodo} />
      </View>

      {/* list todo */}
      <View style={styles.todo}>
        <FlatList
          data={listTodo}
          keyExtractor={item => item.id + ""}
          renderItem={({ item }) => {
            return (
              <Pressable style={({pressed}) => ({opacity: pressed ? 0.5 : 1})} onPress={() => deleteTodo(item.id)}>
                <View style={styles.group}>
                  <Text 
                  style={styles.todoItem}>{item.name}</Text>
                 <AntDesign name="close" size={24} color="black" />
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  group:{
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    borderWidth: 1,
    borderStyle: "dashed",
    marginVertical: 15,
    marginHorizontal: 10,
    padding: 15
  },

  container: {
    paddingTop: 50,
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 30,
    color: "#fff",
    flex: 2
  },
  form:{
    //flex: 2
  },
  todo: {
    flex: 30
  },
  todoInput: {
    borderBottomWidth: 1,
    borderBlockColor: "aqua",
    padding: 10,
    margin: 20,
  },
  todoItem: {
    fontSize: 20,
    //marginBottom: 20,
    //padding: 10,
  },
  body: {
    paddingHorizontal: 15,
    marginBottom: 20,
    flex: 1
  },
});
