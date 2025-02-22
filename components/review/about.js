import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../utils/const";

export default function AboutScreen(){
    return(
            <View>
                <Text style={[styles.about, globalStyles.globalFont]}>About Review App</Text>
                <Text style={[styles.about, globalStyles.globalFont]}>Make by BenzHoang</Text>
            </View>
        )
}

const styles = StyleSheet.create({
    about: {
        fontSize: 30,
        padding: 15
    }
})