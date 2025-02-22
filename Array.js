import { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Array() {

    const [students, setStudents] = useState([
        {
            id: 1,
            name: "HLNM",
            age: 21
        },
        {
            id: 2,
            name: "HLNM",
            age: 23
        },
        {
            id: 3,
            name: "HLNM",
            age: 24
        },
        {
            id: 4,
            name: "HLNM",
            age: 22
        },
        {
            id: 5,
            name: "HLNM",
            age: 22
        },
        {
            id: 6,
            name: "HLNM",
            age: 22
        },
        {
            id: 7,
            name: "HLNM",
            age: 22
        },
        {
            id: 8,
            name: "HLNM",
            age: 22
        },
        {
            id: 9,
            name: "HLNM",
            age: 22
        },
        {
            id: 10,
            name: "HLNM",
            age: 22
        },
        {
            id: 11,
            name: "HLNM",
            age: 22
        },
        {
            id: 12,
            name: "HLNM",
            age: 22
        },
        {
            id: 13,
            name: "HLNM",
            age: 22
        },
        {
            id: 14,
            name: "HLNM",
            age: 22
        },
        {
            id: 15,
            name: "HLNM",
            age: 22
        },
    ]);

  return (
    <View style={styles.container}>
        <Text style={styles.font}>Hello world</Text>
        
        <FlatList 
        data={students}
        keyExtractor={item => item.id + ""}
        renderItem={({item}) => {
            return(
                <View style={styles.item}>
                    <Text style={{color: 'white'}}>{item.name}</Text>
                </View>
            )
        }}
        />
        
        {/* <ScrollView>
            {students.map(item => {
                return(
                    <View key={item.id} style={styles.item}>
                        <Text style={{color: 'white'}}>{item.name}</Text>
                    </View>
                )
            })}
        </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  font:{
    fontSize: 60
  },
  item:{
    padding: 30,
    backgroundColor: 'green',
    marginBottom: 10
  }
});
