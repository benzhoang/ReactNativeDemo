import { StyleSheet } from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { OPENSANS_REGULAR } from "./utils/const";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./components/navigation/app.navigation";
import { SafeAreaView } from "react-native-safe-area-context";



SplashScreen.preventAutoHideAsync();

export default function App2() {
  const [loaded, error] = useFonts({
    [OPENSANS_REGULAR]: require("./assets/fonts/OpenSans-Regular.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }

  
  return (
 <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
  
  
       <AppNavigation/>
      
      </NavigationContainer>
 </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
