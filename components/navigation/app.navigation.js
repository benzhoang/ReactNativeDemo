import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../review/home";
import DetailScreen from "../review/detail";
import AboutScreen from "../review/about";
import AppHeader from "./app.header";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const HomeLayout = () => {
    return (
         <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} options={{header: () => <AppHeader/>}}/>
              <Stack.Screen name="Detail" component={DetailScreen} options={{title: 'Review'}}/>
            </Stack.Navigator> 
    )
}


export default function AppNavigation(){
 return(
    <Drawer.Navigator >
          <Drawer.Screen name="Home" component={HomeLayout} options={{title: "Home", headerShown: false}}/>
          <Drawer.Screen name="About" component={AboutScreen} options={{title: "Info", header: () => <AppHeader/>}}/>
        </Drawer.Navigator>
 )
}