import { View, Text, StyleSheet, Image } from "react-native";
import { OPENSANS_REGULAR } from "../../utils/const";
import { useRoute } from "@react-navigation/native";

export default function DetailScreen(){
    const route = useRoute();


    return(
            <View >
                
                <Text style={styles.review}>Detail</Text>
                <Text style={styles.reviewText}>Id: {route.params.id}</Text>
                <Text style={styles.reviewText}>Title: {route.params.title}</Text>
                <Text style={styles.reviewText}>Rating: {route.params.star}
                </Text>
                <View style={{flexDirection: "row", marginHorizontal: 10, gap: 10}}>
                    <Image source={require("../../assets/images/star.png")} 
                            style={{height: 50, width: 50}}                
                    />
                     <Image source={require("../../assets/images/star.png")} 
                            style={{height: 50, width: 50}}                
                    />
                     <Image source={require("../../assets/images/star.png")} 
                            style={{height: 50, width: 50}}                
                    />
                     <Image source={require("../../assets/images/star.png")} 
                            style={{height: 50, width: 50}}                
                    />
                     <Image source={require("../../assets/images/star.png")} 
                            style={{height: 50, width: 50}}                
                    />
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSANS_REGULAR 
    },
    reviewText: {
        fontSize: 25,
        fontFamily: OPENSANS_REGULAR,
        padding: 15
    }
})