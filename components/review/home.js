import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import CreateModal from "./create.model";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function HomeScreen() {
  const navigation = useNavigation();

  const [reviews, setReviews] = useState([
    {
      id: 1,
      title: "React Native",
      star: 5,
    },
    {
      id: 2,
      title: "Flutter",
      star: 5,
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  const addNew = (item) =>{
    setReviews([...reviews, item])
  }

  return (
    <View>
      <Text style={{ fontSize: 30, padding: 10 }}>Review list:</Text>
      <View style={{ alignItems: "center" }}>
        <AntDesign
          onPress={() => setModalVisible(true)}
          name="pluscircle"
          size={40}
          color="blue"
        />
      </View>
      <View>
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.id + ""}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Detail", item)}
              >
                <View style={styles.reviewItems}>
                  <Text>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <CreateModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        addNew = {addNew}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  reviewItems: {
    padding: 15,
    backgroundColor: "#ccc",
    marginVertical: 15,
  },
});
