import {
  Alert,
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";

export default function CreateModal(props) {
  const { modalVisible, setModalVisible, addNew } = props;
  const [title, setTitle] = useState("");
  const [star, setStar] = useState("");

  const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleSubmit = () => {
    if (!title) {
      Alert.alert("Info is invalid", "Info is required");
      return;
    }
    if (!star) {
      Alert.alert("Info is invalid", "Info is required");
      return;
    }

    //Add new
    addNew({
      id: randomInteger(2, 1000000),
      title,
      star,
    });

    setModalVisible(false);
    setStar("");
    setTitle("");
  };

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          
          {/* header */}
          <View style={styles.header}>
            <Text style={styles.words}>Create a review</Text>
            <AntDesign
              onPress={() => {
                setModalVisible(false);
                setTitle("");
                setStar("");
              }}
              name="closecircle"
              size={24}
              color="black"
            />
          </View>

          {/* body */}
          <View>
            <View style={styles.groupInput}>
              <Text style={styles.text}>Content</Text>
              <TextInput
                value={title}
                style={styles.input}
                onChangeText={(v) => setTitle(v)}
              />
            </View>
            <View style={styles.groupInput}>
              <Text style={styles.text}>Rating</Text>
              <TextInput
                keyboardType="numeric"
                style={styles.input}
                value={star}
                onChangeText={(v) => setStar(v)}
              />
            </View>
          </View>

          {/* footer */}
          <View style={{ marginTop: 20 }}>
            <Button title="Add" onPress={() => handleSubmit()} />
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  words: {
    fontSize: 20,
  },
  groupInput: {
    marginBottom: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 10,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
