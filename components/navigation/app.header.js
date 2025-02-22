import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../utils/const';
import { useNavigation } from '@react-navigation/native';


export default function AppHeader(){

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <MaterialIcons name="menu" size={24} color="black" onPress={() => {navigation.openDrawer()}}/>
            <Text style={[styles.headerText, globalStyles.globalFont]}>BenzHoang App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        backgroundColor: '#ccc',
        paddingHorizontal: 5,
        paddingVertical: 10,
        alignItems: 'center',
        paddingTop: 40
    },
    headerText:{
        flex: 1,
        textAlign: 'center',
        fontSize: 25
    }
})