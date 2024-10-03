import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView } from "react-native";
import { Home } from "./screens";
import { Business_OnLine, Control_Navigation, Header_App } from "./components";

export default function App() {
  return (
    <ScrollView style={styles.containerScroll}>
      <Business_OnLine onLine={true} />
      <Header_App />
      <Control_Navigation/>

      <Home />
      
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
