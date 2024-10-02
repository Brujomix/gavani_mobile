import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView } from "react-native";
import {
  Carroucel_Products,
  Container_Categories,
  Header_App,
  Title_Dinamic,
} from "./components";

export default function App() {

  return (
    <ScrollView style={styles.container}>
      <Header_App />
      <Title_Dinamic text="Productos Seleccionados" />
      <Carroucel_Products />
      <Title_Dinamic text="Nuestras Categorias" />
      <Container_Categories />
      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
