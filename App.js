import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView } from "react-native";
import { Home_Screen, Products_Filter_Screen } from "./screens";
import { Business_OnLine, Control_Navigation, Header_App } from "./components";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

//Previene que se oculte mientras se cargan los recursos de la app
SplashScreen.preventAutoHideAsync();

export default function App() {

  const [catIden, setCatIden] = useState(null)
  
  const [loaded, error] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat-VariableFont_wght.ttf"),
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
    <ScrollView style={styles.containerScroll}>
      <Business_OnLine onLine={true} />
      <Header_App />
      <Control_Navigation />
      {catIden === null ? <Home_Screen /> : <Products_Filter_Screen productsFilter={[]}/>}
      
      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerScroll: {
    backgroundColor: "#000",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  containerPrincipal: {
    gap: 30,
  },
});
